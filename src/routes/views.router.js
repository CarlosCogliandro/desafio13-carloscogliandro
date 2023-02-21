import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('inicio', {})
});

router.get('/productos', (req, res) => {
    res.render('productos')
}) 

router.get('/chat', async (req, res) => {
    res.render('chat', {})
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

export default router;