console.log("Web Serverni boshlash");
const {log} = require("console");
const express = require("express");
const app = express();
const res = require("express/lib/response")
const http = require("http");
const fs = require("fs");

let user;

fs.readFile("database/user.json", "utf8", (err, data) => {
    if (err) {
        console.log("ERROR:", err);
    } else {
        user = JSON.parse(data);

        // Start the server only after user data is loaded
    
    }
});
 

// 1 Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code 

// 3 Views code 
app.set("views", "views");
app.set("view engine", "ejs");



// 4 Routing code
// app.get("/hello", function(req, res) {
//     res.end(`<h1>HELLO WORLD</h1>`);
// });
// app.get("/gift", function(req, res) {
//     res.end(`<h1>Siz sovgalar bolimidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
    console.log(req.body);
    res.json({test: "success"});
});

app.get("/author", (req, res) => {
    res.render("author", {user: user});
})
app.get("/", function(req, res) {
    res.render("harid")
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
    console.log(`The server is running successfully on port: ${PORT}`);
});

// Yuqorida Express orqali web server qurib oldik!
// EJS orqali backend ichida frontend ni qurib olamz!

// Nodemon -- bu package kodda o'zgarish bo'lsa serverni qayta ishga tushiradi!
// npm start => faqat start script bo'lsagina run beradi.
// npm run start => start dan boshqa script lar bo'lsa masalan: dev, bu holatda npm run dev ishlatamz!

//  GET - database dan ma'lumotni olish uchun GET ishlatiladi.
// POST - ma'lumotni o'zi bilan olib keladi va database ga o'sha ma'lumotni yozadi.
