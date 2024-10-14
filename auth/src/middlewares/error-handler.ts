import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";
// import { RequestValidationError } from "../errors/request-validation-error";
// import { DatabaseConnectionError } from "../errors/database-connection-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    // const formattedErrors = err.errors.map((error) => {
    //   if (error.type === "field") {
    //     return { message: error.msg, field: error.path };
    //   }
    // });
    res.status(err.statusCode).json({ errors: err.serializeErrors() });
    return; // Since the return type here is void or undefined.
  }

  // if (err instanceof DatabaseConnectionError) {
  //   // res.status(500).json({ errors: [{ message: err.reason }] });
  //   res.status(err.statusCode).json({ errors: err.serializeErrors() });
  //   return; // Since the return type here is void or undefined.
  // }

  res.status(400).json({ errors: [{ message: "Something went wrong" }] });
};
