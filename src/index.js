// import { v2 as cloudinary } from 'cloudinary';
const express = require('express');
const session = require('express-session');    
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();

const apiRouter = require('../routes/apiRoutes');

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: 'http://localhost:3000'
});



app.use(cors());
app.use(express.json());

app.route('/api-keys', apiRouter);



server.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`);
});







































// cloudinary.uploader.upload('https://www.telecomasia.net/upload/sprint.editor/cff/cff1de1653a913c0c67159fb8e317549.jpg')
//     .then(res => {
//         console.log('Response: ', res)
//     })
//     .catch(err => console.log('Error: ', err));
// app.use(session({
//     secret: 'sth3aposdn',
//     cookie: { maxAge: 172800000, secure: true, sameSite: 'none' },
//     resave: false,
//     saveUninitialized: false,
// }));
// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true 
//   });
