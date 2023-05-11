// import { v2 as cloudinary } from 'cloudinary';
const express = require('express');
const session = require('express-session');    
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();
const db = require('./models');
const apiRouter = require('./routes/apiRoutes');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const TwitterStrategy = require('passport-twitter').Strategy;
// const GitHubStrategy = require('passport-github').Strategy;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: 'https://client-course-project.vercel.app/'
});

app.use(cors());
app.use(express.json());
app.use('/apiKeys', apiRouter);

app.use(session({
    secret: 'sthjustlikethis',
    resave: false,
    saveUninitialized: false,
    cookie: { 
        maxAge: 172800000, 
        secure: true, 
        sameSite: 'none' 
    },
}));

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user, done) => {
    return done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/oauth2/redirect/google',
    scope: [ 'profile' ],
    state: true
  },
  function verify(accessToken, refreshToken, profile, cb) {
    console.log('Profile: ', profile);
    cb(null, profile)
  }
));

app.get('/login/google', passport.authenticate('google'));

app.get('/oauth2/redirect/google',
  passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }),
  function(req, res) {
    res.redirect('/');
});

db.sequelize.sync().then(() => {
    server.listen(process.env.PORT, () => {
        console.log(`Listening on PORT: ${process.env.PORT}`);
    });
});








































// cloudinary.uploader.upload('https://www.telecomasia.net/upload/sprint.editor/cff/cff1de1653a913c0c67159fb8e317549.jpg')
//     .then(res => {
//         console.log('Response: ', res)
//     })
//     .catch(err => console.log('Error: ', err));

// cloudinary.config({ 
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//     api_key: process.env.CLOUDINARY_API_KEY, 
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//     secure: true 
//   });
