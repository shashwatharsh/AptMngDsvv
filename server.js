const http = require("http");

const server = http.createServer((req,res)=>{
    res.end("Server is responding. Welcome to Server of Appointment Sysytem");
});
server.listen(8000,"127.0.0.1", () => {
    console.log("listening to the port no 5002.");
});
