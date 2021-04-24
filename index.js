import genres from "./routes/genres.js";
import customers from "./routes/customers.js";
import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);

mongoose
  .connect(
    "mongodb+srv://dragonblade:1234@cluster0.y8nu2.mongodb.net/myFirstDatabase"
  )
  .then(() => console.log("connect to mongoo db ... "))
  .catch((err) => {
    console.error(err);
    console.log("could not connect to mongo db ...");
  });

app.use(express.json());
app.use("/api/genres", genres);
app.use("/api/customers", customers);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
