import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorRespone } from '../interface/Terror';

const handleValidationError = (
  error: mongoose.Error.ValidationError,
): TGenericErrorRespone => {
  const errorSource: TErrorSource = Object.values(error.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      {
        return {
          path: val?.path,
          message: val?.message,
        };
      }
    },
  );

  const statusCode = 400;
  return {
    statusCode,
    message: 'Validation Error',
    errorSource,
  };
};

export default handleValidationError;
