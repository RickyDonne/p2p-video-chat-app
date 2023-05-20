"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConsoleLogger = void 0;
var winston_1 = __importDefault(require("winston"));
var winston_2 = require("winston");
var createConsoleLogger = function () {
    var consoleTransport = new winston_1.default.transports.Console();
    return winston_1.default.createLogger({
        transports: [consoleTransport],
        format: winston_2.format.combine(winston_2.format.colorize(), winston_2.format.timestamp({ format: "HH:mm:ss:ms" }), winston_2.format.printf(function (info) { return "[".concat(info.timestamp, "] [").concat(info.level, "]: ").concat(info.message); })),
    });
};
exports.createConsoleLogger = createConsoleLogger;
//# sourceMappingURL=logger.js.map