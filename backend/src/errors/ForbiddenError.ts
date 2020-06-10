export class ForbiddenError extends Error {
  readonly status = 403;
  readonly message = "Forbidden";
}
