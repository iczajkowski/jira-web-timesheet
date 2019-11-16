export enum JiraConnectionError {
  WrongAddress,
  Unauthorized,
  Forbidden,
  Unknown
}

export abstract class JiraError {
  type: JiraConnectionError = JiraConnectionError.Unknown;
  httpStatusCode: number = 400;
  message?: string;
}

class WrongAddressError extends JiraError {
  type = JiraConnectionError.WrongAddress;

  constructor(error: any) {
    super();
    this.message = `Invalid URL ${error.host}`;
  }
}

class UnknownError extends JiraError {
  type = JiraConnectionError.Unknown;

  constructor(error: any) {
    super();
    this.message = error && error.message;
  }
}

class UnauthorizedError extends JiraError {
  type = JiraConnectionError.Unauthorized;
  httpStatusCode = 401;

  constructor() {
    super();
    this.message = "Unauthorized";
  }
}

interface ErrorFactory {
  match(error: any): boolean;
  create(error: any): JiraError;
}

const errorMappers: ErrorFactory[] = [
  {
    match(error: any): boolean {
      return error.code === "ENOTFOUND";
    },
    create(error: any): JiraError {
      return new WrongAddressError(error);
    }
  },
  {
    match(error: any): boolean {
      try {
        const parsedError = JSON.parse(error);
        return parsedError && parsedError.statusCode === 401;
      } catch {
        return false;
      }
    },
    create(): JiraError {
      return new UnauthorizedError();
    }
  },
  {
    match(): boolean {
      return true;
    },
    create(error: any): JiraError {
      return new UnknownError(error);
    }
  }
];

export const mapJiraError = (error: any): JiraError => {
  // @ts-ignore
  return errorMappers.find(mapper => mapper.match(error)).create(error);
};
