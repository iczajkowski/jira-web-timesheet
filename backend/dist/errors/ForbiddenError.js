"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ForbiddenError extends Error {
    constructor() {
        super(...arguments);
        this.status = 403;
        this.message = "Forbidden";
    }
}
exports.ForbiddenError = ForbiddenError;
