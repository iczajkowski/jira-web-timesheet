"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var JiraConnectionError;
(function (JiraConnectionError) {
    JiraConnectionError[JiraConnectionError["WrongAddress"] = 0] = "WrongAddress";
    JiraConnectionError[JiraConnectionError["Unauthorized"] = 1] = "Unauthorized";
    JiraConnectionError[JiraConnectionError["Forbidden"] = 2] = "Forbidden";
    JiraConnectionError[JiraConnectionError["Unknown"] = 3] = "Unknown";
})(JiraConnectionError = exports.JiraConnectionError || (exports.JiraConnectionError = {}));
class JiraError {
    constructor() {
        this.type = JiraConnectionError.Unknown;
        this.httpStatusCode = 400;
    }
}
exports.JiraError = JiraError;
class WrongAddressError extends JiraError {
    constructor(error) {
        super();
        this.type = JiraConnectionError.WrongAddress;
        this.message = `Invalid URL ${error.host}`;
    }
}
class UnknownError extends JiraError {
    constructor(error) {
        super();
        this.type = JiraConnectionError.Unknown;
        this.message = error && error.message;
    }
}
class UnauthorizedError extends JiraError {
    constructor() {
        super();
        this.type = JiraConnectionError.Unauthorized;
        this.httpStatusCode = 401;
        this.message = "Unauthorized";
    }
}
const errorMappers = [
    {
        match(error) {
            return error.code === "ENOTFOUND";
        },
        create(error) {
            return new WrongAddressError(error);
        }
    },
    {
        match(error) {
            try {
                const parsedError = JSON.parse(error);
                return parsedError && parsedError.statusCode === 401;
            }
            catch (_a) {
                return false;
            }
        },
        create() {
            return new UnauthorizedError();
        }
    },
    {
        match() {
            return true;
        },
        create(error) {
            return new UnknownError(error);
        }
    }
];
exports.mapJiraError = (error) => {
    return errorMappers.find(mapper => mapper.match(error)).create(error);
};
