const express = require("express");
const path = require("path");
const todoRoutes = require("./routes/todo");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.send("/index.html");
});
app.use("/api/todo", todoRoutes);

app.listen(PORT);
