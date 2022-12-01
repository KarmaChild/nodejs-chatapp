const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000
app.use(express.json());
app.use(cors());

let chatroom = [];


app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/show_chat', (req,res) => {
    chatroom_string = chatroom.toString();
    res.send(chatroom_string);
    console.log(chatroom_string);
});

app.post('/add_chat', (req, res) => {
   var chat = req.body.chat;
   chatroom.push(chat);
   console.log(chatroom);
});

app.delete('/delete_chats', (req,res) =>{
  chatroom = [];
})




app.listen(port,()=>console.log('Express server running at port '+port))