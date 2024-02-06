const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");
dotenv.config({ path: "backend/config/config.env" });
const bgYellow = "\x1b[43m";
const resetColor = "\x1b[0m";

//Handling Uncaught Exception

process.on("uncaughtException",(err) => {
  console.error(`Error:${err.message}`);
  console.error('Closing the server in response to Uncaught Exception');
  process.exit(1);
})




connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(
    `${bgYellow}app listening on port ${process.env.PORT}${resetColor}`
  );
});

//Unhandled Promise Rejection

process.on("unhandledRejection", (err) => {
  console.error(`Error:${err.message}`);
  console.error('Closing the server in response to an Unhandled Promise Rejection');

  server.close(() => {
    process.exit(1);
  });
});
