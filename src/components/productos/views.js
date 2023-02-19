import { Router } from "express";

const router = Router();

export default app => {

    app.use('/', router);

    router.get('/register', (req, res) => {
        res.render('register');
    })

    router.get('/login', (req, res) => {
        res.render('login');
    })
}