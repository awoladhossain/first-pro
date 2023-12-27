import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSource } from '../interface/Terror';
import config from '../config';
import handleZodError from '../Error/handlezodError';
import handleValidationError from '../Error/handleValidationError';
import handleCastError from '../Error/handleCastError';
import handleDuplicateError from '../Error/handleDuplicateError';
import AppError from '../Error/AppError';

const globalErrorhandler: ErrorRequestHandler = (
  error,
  req,
  res,
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  next,
) => {
  // if (config.NODE_ENV === 'development') console.log(error)
  // setting default values
  let statusCode = 500;
  let message = 'something went wrong';

  let errorSource: TErrorSource = [
    {
      path: '',
      message: 'Something went wrong!',
    },
  ];

  if (error instanceof ZodError) {
    const simplefiedError = handleZodError(error);

    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSource = simplefiedError?.errorSource;
  } else if (error?.name === 'ValidationError') {
    // console.log("vai ami tmr mongoose error");

    const simplefiedError = handleValidationError(error);

    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSource = simplefiedError?.errorSource;
  } else if (error?.name === 'CastError') {
    const simplefiedError = handleCastError(error);

    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSource = simplefiedError?.errorSource;
  } else if (error?.code === 11000) {
    const simplefiedError = handleDuplicateError(error);

    statusCode = simplefiedError?.statusCode;
    message = simplefiedError?.message;
    errorSource = simplefiedError?.errorSource;
  } else if (error instanceof AppError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  } else if (error instanceof Error) {
    message = error?.message;
    errorSource = [
      {
        path: '',
        message: error?.message,
      },
    ];
  }

  // ultimaltly resturn
  return res.status(statusCode).json({
    success: false,
    message,
    // error: error,
    errorSource,
    stack: config.NODE_ENV === 'development' ? error?.stack : null,
  });
};

export default globalErrorhandler;

/**
 * pattern to send error message
 *
 * success
 * message
 * errorSource[
 * path:'',
 * message:""
 * ]
 * stack
 */
