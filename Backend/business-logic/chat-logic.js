const io = require("socket.io");

function init(listener) {

    const socketsManager = io(listener, { cors: { origin: "http://localhost:3000" } }); // Allow react front

    socketsManager.sockets.on("connection", socket => {

        console.log("A client has been connected.");
        
        // a message that goes out for every new user that connects
        socket.emit("new-message", {
            from: "Admin",
            text: "Welcome to the chat app!",
            createdAt: new Date().getTime(),
        });

        // a message that goes out for everyone except the new user that connected
        socket.broadcast.emit("new-message", {
            from: "Admin",
            text: "New user joined",
            createdAt: new Date().getTime(),
        });

        // socket.on("create-message", msg => {
        //     console.log("create-message: ", msg);
        //     socketsManager.sockets.emit("msg-from-server", {
        //         from: message.from,
        //         text: message.from,
        //         createdAt: new Date().getTime(),
        //     });
        //     // socket.broadcast.emit("create-message", {
        //     //     from: message.from,
        //     //     text: message.from,
        //     //     createdAt: new Date().getTime(),
        //     // });
        // });

        socket.on("disconnect", () => {
            console.log("A client has been disconnected");
        });

    });

}

module.exports = {
    init
}