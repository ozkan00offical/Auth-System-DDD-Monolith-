import express from 'express';
import userRouter from './modules/user/presentation/routes.ts';

const app = express()

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/auth", userRouter);

export default app;