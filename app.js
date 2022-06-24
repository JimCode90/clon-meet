const express = require('express')
const http = require('http')

const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = require('socket.io')(server)



app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

let connectedPeers = [];

io.on('connection', (socket) => {
    // console.log(`User Conectado a socket.io server`)
    // console.log(socket.id)
    connectedPeers.push(socket.id)
    console.log(connectedPeers);


    socket.on("pre-offer", (data) => {
        console.log("pre-offer-came")

        const { calleePersonalCode, callType } = data
        const connectedPeer = connectedPeers.find((peerSocketId) => {
            return peerSocketId === calleePersonalCode
        })

        if (connectedPeer){
            const data = {
                callerSocketId : socket.id,
                callType : callType
            }

            io.to(calleePersonalCode).emit("pre-offer", data)
        }

    })

    socket.on('disconnect', () => {

        console.log('usuario desconectado')
        const newConnectedPeers = connectedPeers.filter( (peerSocketId) => {
            return peerSocketId !== socket.id;
        })

        connectedPeers = newConnectedPeers;
        console.log(connectedPeers);

    })
})



server.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})
