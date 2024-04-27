import express from "express"
import cors from "cors"
import reviews from "./api/reviews.route.js"



const app = express();
app.use(cors())
app.use(express.json())

app.use("api/v1/reviews", reviews)

// if not found in the reviews -> code

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

export default app;