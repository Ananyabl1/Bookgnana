import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";
const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || 4000;
const uri = process.env.Mongodburi;

//connect to mongodb
try {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connected to mongodb");
} catch (error) {
  console.log("error:", error);
}


//defining routes
app.use("/book",bookRoute);
app.use("/user",userRoute);




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
