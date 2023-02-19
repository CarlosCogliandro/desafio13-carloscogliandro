
// PRUEBAAAAAAA
import express from "express";
import session from "express-session";
import __dirname from './src/utils/utils.js'
import ejs from 'ejs';
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import passport from "passport";
import initializeStrategies from "./src/config/passport.js";
// let express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;
const connection = mongoose.connect("mongodb+srv://carloscogliandro:backendcarlos@cluster0.ng7biv3.mongodb.net/ecommerce?retryWrites=true&w=majority", error => {
    if (error) console.log(error);
    else console.log('Base de datos conectada!!')
})

// PRUEBAAAAAAA
import serverRoutes from './src/routes/index.js'

// let serverRoutes = require('./src/routes');

// Socket

// PRUEBAAAAAAA
// import path from "path";
import HttpServer from 'http'
import Socket from "./src/utils/sockets/index.js";

// let path = require("path");
// let {Server: HttpServer} = require("http");
// let Socket = require("./src/utils/sockets");


// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://carloscogliandro:backendcarlos@cluster0.ng7biv3.mongodb.net/ecommerce?retryWrites=true&w=majority",
        ttl: 3600,
    }),
    secret: 'PalabraSecretaQueNadieVea',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000000,
    }
}));

initializeStrategies();
app.use(passport.initialize());
app.use(passport.session())

// Engine
app.engine('ejs', ejs.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

serverRoutes(app);

let httpServer = HttpServer(app);

let socket = new Socket(httpServer);
socket.init();

const connectedServer = app.listen(PORT, () => console.log(`Server ON By Carlos Cogliandro------> http://localhost:${PORT}`));
connectedServer.on('Error al conectar ----->', (error) => { console.log(error) });