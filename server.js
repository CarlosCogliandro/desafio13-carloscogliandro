
import express from "express";
import session from "express-session";
import __dirname from './src/utils.js'
import MongoStore from "connect-mongo";
import passport from "passport";
import initializeStrategies from "./src/config/passport.config.js";
import cartRouter from './src/routes/cart.router.js';
import productsRouter from './src/routes/products.router.js';
import sessionsRouter from './src/routes/sessions.router.js';
import viewsRouter from './src/routes/views.router.js';
import config from "./src/config/config.js";

const app = express();
const PORT = config.app.PORT;

// Socket
// import { Server as HttpServer } from 'http';
// // import HttpServer from 'http'
// import SocketP from "./src/utils/sockets/index.js";

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/public`));
app.use(session({
    store: MongoStore.create({
        mongoUrl: config.mongo.URL,
        ttl: 3600,
    }),
    secret: config.session.SECRET2,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000000,
    }
}));

// Passport
initializeStrategies();
app.use(passport.initialize());
app.use(passport.session())

// Engine
// app.engine('ejs', ejs.engine());
app.set("views", `${__dirname}/views`);
app.set("view engine", "ejs");

//Routers
app.use('./cart', cartRouter);
app.use('/productos', productsRouter)
app.use('/sessions', sessionsRouter);
app.use('/', viewsRouter);

// Inicializacion de Socket
// const httpServer = HttpServer(app);
// const socket = new SocketP(httpServer);
// socket.init();

const connectedServer = app.listen(PORT, () => console.log(`Server ON By Carlos Cogliandro------> http://localhost:${PORT}`));
connectedServer.on('Error al conectar ----->', (error) => { console.log(error) });