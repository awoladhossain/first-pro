import mongoose from 'mongoose';
import { TErrorSource, TGenericErrorRespone } from '../interface/Terror';

const handleCastError = (
  error: mongoose.Error.CastError,
): TGenericErrorRespone => {
  const errorSource: TErrorSource = [
    {
      path: error.path,
      message: error.message,
    },
  ];

  const statusCode = 400;
  return {
    statusCode,
    message: 'Invalid ID',
    errorSource,
  };
};

export default handleCastError;
