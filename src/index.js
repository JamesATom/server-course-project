import express from 'express';
import session from 'express-session';    
import http from 'http';
import cors from 'cors';
import {} from 'dotenv/config';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: '*'
});

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'sth3aposdn',
    cookie: { maxAge: 172800000, secure: true, sameSite: 'none' },
    resave: false,
    saveUninitialized: false,
}));





server.listen(process.env.PORT, () => {
    console.log(`Listening on PORT: ${process.env.PORT}`);
});