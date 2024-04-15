const express=require('express');
const socketIO=require('socket.io')
const app=express();
const path=require('path');
const server = app.listen(3000,()=>{
    console.log("Server started");
});
const io=socketIO(server);
app.use(express.static(path.join(__dirname)));

io.on('connect',(socket)=>{
   console.log("A user has connected to server"); 
   //Listen for 'join' event 
   socket.on('chat message',msg=>{
    io.emit('chat message',{type:'message', username: socket.username
,message:msg});
   });

   //listen for 'chat' message event
   socket.on('chat message',msg=>{
    io.emit('chat message',{type:'message',username: socket.username,message: msg});
   });

   // listen for 'disconnect' event when user leaves
   socket.on('disconnect',()=>{
    console.log("A user disconnected");
    if(socket.username){
        io.emit('chat message',{type:'notification',message:'${socket.username} has left the chat'});
    }
   });

});

