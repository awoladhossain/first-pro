import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import globalErrorhandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/route';
const app: Application = express();

// *** parser

app.use(express.json());
app.use(cors());

// *** application routes

app.use('/api/v1', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

// const test = (req: Request, res: Response) => {
//   // const a = 10;
//   // res.send(a);
//
// }
// app.get('/', test)

app.use(globalErrorhandler);
app.use(notFound);

export default app;
