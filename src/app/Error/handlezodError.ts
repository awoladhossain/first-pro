import { ZodError, ZodIssue } from 'zod';
import { TErrorSource, TGenericErrorRespone } from '../interface/Terror';

const handleZodError = (error: ZodError): TGenericErrorRespone => {
  const errorSource: TErrorSource = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  };
};

export default handleZodError;
