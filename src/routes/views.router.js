
import { Router } from "express";

const router = Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/home', async (req, res) => {
    res.render('home', { user: req.session.user });
});

router.get('/chat', async(req, res, next)=>{
    res.render('chat', {})
});

router.get('/logout', (req, res) => {
    res.render('logout', { user: req.session.user });
    req.session.destroy();
    console.log('Sesion finalizada');
});

export default router;