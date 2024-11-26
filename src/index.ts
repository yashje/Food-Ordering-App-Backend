import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import myUserRoute from "./routes/MyUserRoute";

mongoose
    .connect(process.env.MONGODB_CONNECTION_STRING as string)
    .then(() => console.log("Connected to database!"));

const app = express();  
app.use(cors());
app.use(express.json());

app.get("/hi", async (req: Request, res: Response) => {
    res.send({ message: "health OK!" });
}); 

app.use("/api/my/user", myUserRoute);
 
app.listen(1000, () => {
    console.log("server started on localhost:1000");
}); 