const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const expressServer = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(expressServer);

// Use the relative path to the client folder
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("*", (req, res) => {
  // Use the relative path to the index.html file
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.get("/express-server", (req, res) => {
  res.end("this is backend");
});

io.on("connection", (socket) => {
  console.log("new user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

expressServer.listen(3000, () => {
  console.log("server is running on port 3000");
});
