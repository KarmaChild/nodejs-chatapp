const express = require('express');
const app = express();
const cors = require("cors");
const port = 3000
app.use(express.json());
app.use(cors());

let rooms = new Map;
let chatroom = [];
let current_room;

const CreateRoom = (room_name) => {
   let new_room = [];
   rooms.set(room_name, new_room);
}

const ListRooms = () => {
    var all_rooms = '';

    for (var i = 0, keys = Object.keys(rooms), ii = keys.length; i < ii; i++) {
        console.log(keys[i] + '|' + rooms[keys[i]].list);
    }


    return all_rooms;
}


app.get('/',(req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/create_room',(req,res) => {
   CreateRoom(req.body.room_name);
   console.log(ListRooms())
});

app.get('/list_rooms',(req,res) => {
    var rooms = ListRooms();
    res.send(rooms);
});

app.post('/join_room',(req,res) => {
    let room_name = req.body.room_name;
    res.send(rooms.get(room_name));
    current_room = room_name;
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