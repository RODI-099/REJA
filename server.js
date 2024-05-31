const http = require("http");
const mongodb = require("mongodb");

let db;
const connectionString = "mongodb+srv://RODI-99:Quantum99@cluster0.31rebwt.mongodb.net/REJA"

mongodb.connect(
    connectionString,
     {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, client) => {
    if (err) console.log("ERROR on connection MongoDB");
    else {
        console.log("MongoDB connection succed");
        module.exports = client;
        
        const app = require("./app");
        const server = http.createServer(app);
let PORT = process.env.PORT || 3072;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
);

});
    }
}
);

