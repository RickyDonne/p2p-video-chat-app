"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logger_1 = require("./lib/logger");
var websockets_1 = require("./websockets");
var PORT = 8080;
var logger = (0, logger_1.createConsoleLogger)();
var server = (0, websockets_1.createServer)(logger);
server.listen(PORT);
logger.info("Started listening on ".concat(PORT));
//# sourceMappingURL=index.js.map