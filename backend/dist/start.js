"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const shared_1 = require("./shared");
const Server_1 = __importDefault(require("./Server"));
const port = Number(process.env.PORT || 3000);
Server_1.default.listen(port, () => {
    shared_1.logger.info("Express server started on port: " + port);
});
