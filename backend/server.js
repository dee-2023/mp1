const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const cors = require('cors')

app.use(
    cors({
        origin: 'http://localhost:3000'
    })
)

//generate accesstoken
const generateAccessToken = (user) => {
    return jwt.sign( { id: user.id, isAdmin: user.isAdmin }, "TokenSecurityKey", {expiresIn : '1000s'})
}

//registered user
const LoginProfiles = [

    {
        id: 1,
        username: "admin",
        password: "passwd123",
        isAdmin: true,
    },
    {
        id: 2,
        username: "staff",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        username: "vice",
        password: "abrakadabra",
        isAdmin: false,
    },
{
        id: 4,
        username: "super",
        password: "69843",
        isAdmin: true,
    },
{
        id: 5,
        username: "user",
        password: "123",
        isAdmin: false,
    }
];

//for login
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const user = LoginProfiles.find((u) => {
        return u.username === username && u.password === password;
    });

    if(user) {

    const accessToken = generateAccessToken(user);
       
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken: accessToken
        })
            
    } else {
        res.status(401).json('Username and Password is incorrect.')
    }
})

//middleware for security
const verify = (req, res, next) => {
    const authHeader = req.headers.authorization;

        if(authHeader) {
            const token = authHeader.split(' ')[1];

            jwt.verify(token, 'TokenSecurityKey', (err, user) => {
                if(err) {
                    return res.status(403).json('TokenKey not valid')
                }
                req.user = user;
                next();
            })
        } else {
            return res.status(403).json('You are not authenticated');
        }
}

app.listen(5000)
console.log('Server is running.')