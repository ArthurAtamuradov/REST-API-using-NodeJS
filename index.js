const express = require("express");
const path = require("path");
const todoRoutes = require("./routes/todo");
const sequelize = require("./tools/database");
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use("/api/todo", todoRoutes);
app.use((req, res, next) => {
  res.send("/index.html");
});
async function start() {
  try {
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log("Server is running");
    });
  } catch (error) {
    console.log(error);
  }
}
start();
