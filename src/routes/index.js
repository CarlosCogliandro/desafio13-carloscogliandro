
// PRUEBAAAAAAA
import productosApi from '../components/productos/productos.js';
import cart from '../components/productos/cart.js';
import user from '../components/productos/user.js';
import session from '../components/productos/sessions.js';
import views from '../components/productos/views.js';

// let productosApi = require('../components/productos/index.js');

export default app =>{
// module.exports = app => {
    productosApi(app);
    cart(app);
    user(app);
    session(app);
    views(app);
};



