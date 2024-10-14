import { ValidationError } from "express-validator";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ValidationError[]) {
    super("Ivalid request parameters");
    // Only because we are extending a built in class.
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  // serializeErrors() {
  //   return this.errors.map((err) => {
  //     if (err.type === "field") {
  //       return { message: err.msg, field: err.path };
  //     }
  //   });
  // }

  serializeErrors() {
    return this.errors
      .filter((err) => err.type === "field")
      .map((err) => ({
        message: err.msg,
        field: err.path,
      }));
  }
}
