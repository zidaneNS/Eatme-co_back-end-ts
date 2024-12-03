import express, { Express, Request, Response, json, urlencoded } from "express";
import cors from "cors";
import mongoose from "mongoose";
import connectDB from "./config/connectDB";
import corsOptions from "./config/corsOptions";
import registerRoute from "./routes/register";
import authRoute from "./routes/login";
import foodRoute from "./routes/API/food";

const app: Express = express()
const port: string | 3000 = process.env.PORT || 3000

connectDB();

app.use(cors(corsOptions));
app.use(json());
app.use(urlencoded({ extended: true }));

// main endpoint below

app.use('/register', registerRoute);
app.use('/auth', authRoute);
app.use('/food', foodRoute);

mongoose.connection.once('open', () => {
    console.log('db connected');
    
    app.listen(port, () => {
        console.log(`server is running ing on port ${port}`)
    })
})


export default app;