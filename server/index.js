const { Server } = require("socket.io");
const io = new Server(8000);

io.on("connection", (socket) => {
  console.log("Socket connected ", socket.id);
});

io.listen(3000);
