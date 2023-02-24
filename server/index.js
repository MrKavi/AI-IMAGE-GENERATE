import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import postRoutes from "./routes/postRouts.js";
import aiImgRoutes from "./routes/aiImgRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", postRoutes);
app.use("/api/v1/aiImg", aiImgRoutes);

app.get("/", async (req, res) => {
  res.send("hello node ");
});

const startServer = (async) => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(5000, () =>
      console.log("server has started on port http://localhost:5000")
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();
