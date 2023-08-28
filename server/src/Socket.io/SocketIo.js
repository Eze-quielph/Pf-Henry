const app= require ('../app')
const io= require('socket.io')(app, {cors: {origin:'*'}});

io.on('connection', (socket)=>{
    console.log('Connected')

    socket.on('chat_message', (data)=>{
          io.emit('chat_message', data);
    })
})