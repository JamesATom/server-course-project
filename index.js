// import { v2 as cloudinary } from 'cloudinary';
const express = require('express'); 
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');
require('dotenv').config();
const db = require('./models');

const apiRouter = require('./routes/apiRoutes');
const loginRouter = require('./routes/loginRoutes');
const registerRouter = require('./routes/registerRoutes');

const session = require('express-session');   
const passport = require('passport');
const store = new session.MemoryStore();
// const LocalStrategy = require("passport-local").Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const TwitterStrategy = require('passport-twitter').Strategy;
const GitHubStrategy = require('passport-github2').Strategy;

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
    cors: 'http://localhost:3000',
});

app.use(express.json());
app.use(cors(
    {
        origin: 'http://localhost:3000', 
        credentials: true
    }
));
// app.set("trust proxy", 1);
app.use('/apiKeys', apiRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);

app.use(
    session({
        secret: "secretcode",
        resave: false,
        saveUninitialized: false,
        store,
        cookie: {
            sameSite: "none",
            secure: false,
            maxAge: 1000 * 60 * 60 * 24
        }
    })
);

app.use(passport.initialize());
app.use(passport.session());

// passport.use(new LocalStrategy(function (username, password, done) {
//         db.users.findByUsername(username, (err, user) => {
//             if(err) return done(err);
//             if(!user) return done(null, false);
//             if(user.password != password) return done(null, false);
//             return done(null, user);
//         });
//     })
// );

passport.serializeUser((user, done) => {
    return done(null, user);
});

passport.deserializeUser((user, done) => {
    return done(null, user);
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },

    function verify(accessToken, refreshToken, profile, cb) {
        cb(null, profile)
    }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));

app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login', failureMessage: true }), 
    (req, res) => { res.redirect('http://localhost:3000/'); });


passport.use(new TwitterStrategy({
        consumerKey: process.env.TWITTER_CONSUMER_KEY,
        consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
        callbackURL: "http://localhost:8000/auth/twitter/callback"
    },
        function(token, tokenSecret, profile, cb) {
            console.log('what is up');
            cb(null, profile);
        }
    )
);

app.get('/auth/twitter', passport.authenticate('twitter'));

app.get('/auth/twitter/callback', passport.authenticate('twitter', { failureRedirect: '/login', failureMessage: true }),
    (req, res) => { res.redirect('http://localhost:3000/'); });


// passport.use(new GitHubStrategy({
//         clientID: process.env.GITHUB_CLIENT_ID,
//         clientSecret: process.env.GITHUB_CLIENT_SECRET,
//         callbackURL: "/auth/github/callback"
//     },
//     function(accessToken, refreshToken, profile, done) {
        
//         }
//     )
// );

// app.get('/auth/github', passport.authenticate('github', { scope: [ 'user:email' ] }));

// app.get('/auth/github/callback', passport.authenticate('github', { failureRedirect: '/login' }),
//     (req, res) => { res.redirect('http://localhost:3000/'); });

app.get('user', (req, res) => {
    res.send(req.user);
});

// db.sequelize.drop();

db.sequelize.sync({ alter: false }).then(() => {
    app.listen(process.env.PORT, () => {
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
