const { Server } = require("socket.io");
const next = require("next");
const http = require("http");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
    const server = http.createServer((req, res) => {
        nextHandler(req, res);
    });

    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });
    
    let viewers = [];
    
    io.on("connection", (socket) => {
        const ip = socket.handshake.headers['x-forwarded-for'] || socket.conn.remoteAddress;
        viewers.push({ id: socket.id, ip });
        io.emit("update", { count: viewers.length, viewers });
    
        socket.on("disconnect", () => {
            viewers = viewers.filter(viewer => viewer.id !== socket.id);
            io.emit("update", { count: viewers.length, viewers });
        });
    });
    

    server.listen(port, (err) => {
        if (err) throw err;
        console.log(`> Ready on http://localhost:${port}`);
    });
});
