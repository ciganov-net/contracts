"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PROTO_PATHS = void 0;
const node_path_1 = require("node:path");
exports.PROTO_PATHS = {
    AUTH: (0, node_path_1.join)(__dirname, '../../proto/auth.proto'),
    ACCOUNT: (0, node_path_1.join)(__dirname, '../../proto/account.proto'),
    USER: (0, node_path_1.join)(__dirname, '../../proto/user.proto')
};
