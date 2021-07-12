const express = require("express");
const app = express();
const cors = require("cors");
const server = require("http").createServer(app);
const sendEmail = require("./mailer");
const db = require("./db");


app.use(cors());

const io = require('socket.io')(server, {
    cors: {
        origin: "*"
    }
});


io.on("connection", (socket) => {
    //console.log("what is socket", socket);
    console.log("socket is activated...");

    socket.on("chat", (payload) => {
        const messageQuery = `Insert Into messages (from_user, message) value('${payload.username}','${payload.message}')`
        db.query(messageQuery, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result)
            }
        })
        sendEmail(payload.username, payload.message)
        io.emit("chat payload", payload);
    })
})



app.get('/', (req, res) => {
    let getMessagesQuery = `select * from messages`;
    db.query(getMessagesQuery, (err, result)=> {
        if (err){
            console.log(err)
        }else{
            res.send(result)
        }
    })
})


server.listen(5000, () => console.log("http://localhost:5000"))