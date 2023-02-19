
import Router from 'express'

let router = new Router();

export default app => {

    app.use('/', router);

    router.get('/login', async (req, res) => {
        if (req.session.login) {
            res.redirect('inicio')
        } else {
            res.render('/login', { status: false })
        }
    })

    router.post('/login', async (req, res) => {
        const user = 'user';
        const pass = '1234';
        if (user == 'user' && pass === '1234') {
            req.session.login = true;
            res.redirect('inicio')
        } else {
            req.session.login = false;
            res.redirect('/login')
        }
    })

    router.get('/', async (req, res) => {
        res.render('/', { status: req.session.login })
    })

    router.get('/logout', async (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                res.json(err);
            } else {
                res.render('inicio', { status: false });
            }
        })
    })
}