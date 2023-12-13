const express = require("express");
const app = express();
const port = 3000;
const router = require("./routes/index");
const cors = require("cors");
const errorHandler = require("./middlewares/error");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server running in port ${port}`);
});
