"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createServer = void 0;
var socket_io_1 = require("socket.io");
var onJoinRoom = function (logger, socket) { return function (room) {
    logger.info("join room=".concat(room, " sid=").concat(socket.id));
    socket.join(room);
    socket.broadcast.to(room).emit("peerConnect", socket.id);
}; };
var onWebRtcAnswer = function (logger, server, socket) {
    return function (_a) {
        var _b;
        var answerSdp = _a.answerSdp, sid = _a.sid;
        logger.info("webRtcAnswer fromSid=".concat(socket.id, " toSid=").concat(sid));
        (_b = server.sockets.sockets
            .get(sid)) === null || _b === void 0 ? void 0 : _b.emit("webRtcAnswer", { answerSdp: answerSdp, sid: socket.id });
    };
};
var onWebRtcIceCandidate = function (logger, server, socket) {
    return function (_a) {
        var _b;
        var candidate = _a.candidate, label = _a.label, sid = _a.sid;
        logger.debug("webRtcIceCandidate fromSid=".concat(socket.id, " toSid=").concat(sid));
        (_b = server.sockets.sockets
            .get(sid)) === null || _b === void 0 ? void 0 : _b.emit("webRtcIceCandidate", { candidate: candidate, label: label, sid: socket.id });
    };
};
var onWebRtcOffer = function (logger, server, socket) {
    return function (_a) {
        var _b;
        var offerSdp = _a.offerSdp, sid = _a.sid;
        logger.info("webRtcOffer fromSid=".concat(socket.id, " toSid=").concat(sid));
        (_b = server.sockets.sockets
            .get(sid)) === null || _b === void 0 ? void 0 : _b.emit("webRtcOffer", { sid: socket.id, offerSdp: offerSdp });
    };
};
var onDisconnect = function (logger, socket) { return function (reason) {
    logger.info("disconnecting reason=".concat(reason, " sid=").concat(socket.id));
    socket.rooms.forEach(function (room) {
        socket.broadcast.to(room).emit("peerDisconnect", socket.id);
    });
}; };
var onConnection = function (logger, server) { return function (socket) {
    logger.info("connection sid=".concat(socket.id));
    socket.emit("connected");
    socket.on("joinRoom", onJoinRoom(logger, socket));
    socket.on("disconnecting", onDisconnect(logger, socket));
    socket.on("webRtcAnswer", onWebRtcAnswer(logger, server, socket));
    socket.on("webRtcIceCandidate", onWebRtcIceCandidate(logger, server, socket));
    socket.on("webRtcOffer", onWebRtcOffer(logger, server, socket));
}; };
var createServer = function (logger) {
    var server = new socket_io_1.Server({
        cors: {
            origin: process.env.NODE_ENV === "development" ? "*" : "https://p2p-vc.onrender.com/",
            methods: ["GET", "POST"],
        },
    });
    server.on("connection", onConnection(logger, server));
    return server;
};
exports.createServer = createServer;
//# sourceMappingURL=index.js.map