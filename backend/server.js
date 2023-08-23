const express = require("express")
const app = express()
const jwt = require("jsonwebtoken")
const cors = require("cors")
//const bcrypt = require()

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))
app.use(express.json())



app.use(
    cors({
        origin: "http://localhost:3000"
    })
)

const generateAccessToken = (user) => {
    return jwt.sign( { id: user.id, isAdmin: user.isAdmin }, "ThisMYsecretKey", {expiresIn : '1s'})
}

//registered user
const userDB = [

    {
        id: 1,
        username: "admin",
        password: "passwd123",
        isAdmin: true,
    },
    {
        id: 2,
        username: "user",
        password: "123456",
        isAdmin: false,
    },
    {
        id: 3,
        username: "user1",
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
app.post('/signin', (req, res) => {
    const { username, password } = req.body;
    
    const user = userDB.find((u) => {
        return u.username === username && u.password === password;     
    });

 if(user){

    const accessToken = generateAccessToken(user);
 
        res.json({
            username: user.username,
            isAdmin: user.isAdmin,
            accessToken: accessToken,
        }); 

    } else {
    res.status(400).json("Username or Password incorrect"); 
    }
    
})

const verify = (req, res, next) => {

    const autHeader = req.headers.authorization; "authorization"

    if(autHeader){
        const token = autHeader.split(" ")[1];
        jwt.verify(token, "ThisIsMySecretKeyxxx", (err,user) => {
            if(err){
                return res.status(403).json("token is not valid")
            }
            req.user = user;
            next();

        })
    } else {
        return res.status(403).json("You are not authenticated")
    }
}
app.delete('/api/users/:userId', verify, (req, res)=> {

    if(req.user.id === req.params.userId || req.user.isAdmin){
        res.status(200).json("User has been deleted")
    } else {
        res.status(200).json("Not allowed!")
    }

})

app.listen(8080);
console.log('Server is running in port 8080')