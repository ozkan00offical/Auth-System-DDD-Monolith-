import express from 'express';
import userRouter from './modules/user/presentation/routes';

const app = express()

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/users", userRouter);

export default app;