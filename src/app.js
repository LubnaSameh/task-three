// Express => frame of nodej java script, help me to build my application

// crud application
//1- create => post
//2- read =>  get
//3- update => patch
//4- delete =>  delete

////////////

//     two ways to display ur web on browser
//1-domain from any company
//2- local host without domain

// local host: port = 3000 5000 => node

//angular 4200  --- php 8080
/////////////////////////////////////

// this ways to any project
//basic steps
// npm init -y
// npm i express

//1- y3rf package
const express = require("express");
const app = express();

//2- port
//           from campany    or port
const port = process.env.PORT || 3000


//3- create page
//                 response=> display page
// app.get('/', (req, res) => {
//     res.send("hello home page")
// })

//3- create another page
//                 response=> display page
// app.get('/page2', (req, res) => {
//     const userInfo = {
//         name: "Lubna",
//         age: 20
//     };
//     const userInfoJson = JSON.stringify(userInfo);

//     res.send(`${userInfoJson}`);
// });

//3- create another page
//                 response=> display page
// app.get('/about', (req, res) => {
//     res.send("<h2>about page</h2>  <button> send </button>")
// })

//////////
//        link front with back
//  static path:
const path = require("path") // is a core module, la y7tag npm
// console.log(__dirname)
// console.log(path.join(__dirname, '../puplic')) // link with project front ../ => back step
const x = path.join(__dirname, '../puplic') // in folder puplic

// static , can`t read or take value from user anything 
app.use(express.static(x))

// index.html => index = '/' or home 
// if data.html=> http://localhost:3000/data.html =>to dispaly project

/////////////////////////////////
// dynamic pages
// hbs npm=> in google
// npm i hbs => in terminal

// to clarify or configure template of engine use => app.set
app.set('view engine', 'hbs');
// create folder its name "views" this word build in node beside src and create index.hbs


const viewsDirectory = path.join(__dirname, '../temp1/views')
app.set('views', viewsDirectory);

//      to read header 
// we use finction build in hbs, so write require
const hbs = require('hbs')
const partialsPath = path.join(__dirname, '../temp1/partials');
hbs.registerPartials(partialsPath)

console.log("Partials Path:", partialsPath);



app.get('/', (req, res) => {
    res.render('index', { // name of file
        title: "home",
        desc: "this home page"
    })
})

//       /endpoint
app.get('/services', (req, res) => {
    res.render('services', {
        title: "service",
        desc: "this services page",
        img: "/images/background.jpg"
    })
})

app.get('/data', (req, res) => {
    res.render('data', {
        title: "DATA",
        desc: "this DATA page",

    })
})

app.get('/contactUs', (req, res) => {
    res.render('contactUs', {
        title: "CONTACTUS",
        desc: "this CONTACTUS page",

    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "ABOUT",
        desc: "this ABOUT page",

    })
})



//4- = run
app.listen(port, () => {
    console.log("app is lisiting on port 3000")
})

// to run => node src/app.js
//http://localhost:3000/ => write this in google

//  npm i nodemon -g => save any update on edit in my code  = auto save
// to EASYYYYY run => nodemon src/app.js
// nodemon src/app.js -e js,hbs