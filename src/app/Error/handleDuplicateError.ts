// import { TErrorSource, TGenericErrorRespone } from "../interface/Terror";

// const handleDuplicateError = (error: any): TGenericErrorRespone => {

//     const match = error.message.match(/"([^"]*)"/);

//     const extractedMessage = match && match[1];

//     const errorSource: TErrorSource = [{
//         path: "",
//         message: `${extractedMessage} is already exists`
//     }]

//     const statusCode = 400;
//     return {
//         statusCode,
//         message: 'Invalid ID',
//         errorSource
//     }
// }

// export default handleDuplicateError;

/* eslint-disable @typescript-eslint/no-explicit-any */

import { TErrorSource, TGenericErrorRespone } from '../interface/Terror';

const handleDuplicateError = (err: any): TGenericErrorRespone => {
  // Extract value within double quotes using regex
  const match = err.message.match(/"([^"]*)"/);

  // The extracted value will be in the first capturing group
  const extractedMessage = match && match[1];

  const errorSource: TErrorSource = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Invalid ID',
    errorSource,
  };
};

export default handleDuplicateError;
