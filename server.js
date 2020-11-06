const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const plantsRouter = require("./plants/plantsRouter")

const server = express();

server.use(helmet())
server.use(cors())
server.use(express.json())

server.use(plantsRouter)

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong, please try again later",
  });
});

server.get("/", (req, res) => {
	res.json({
		message: "Welcome To My Own Auth Project",
	})
})

module.exports = server;