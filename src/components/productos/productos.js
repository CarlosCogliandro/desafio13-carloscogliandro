// PRUEBAAAAAAA
import Router from 'express';
import path from 'path';
import __dirname from '../../utils/utils.js'


// let path = require("path")
// let { Router } = require('express');
let router = new Router();

// PRUEBAAA
import Contenedor from '../../dao/filesystem/contenedor.js';

// const Contenedor = require('../../dao/filesystem/contenedor.js');
const productos = new Contenedor(path.join(__dirname, "../../data/productos.json"));
// const productos = new Contenedor("../../data/productos.json");

// PRUEBAAA
export default app => {

    // module.exports = app => {

    app.use('/', router);

    router.get('/', (req, res, next) => {
        res.render('inicio', {})
    });

    router.get('/productos', async (req, res, next) => {
        const prod = await productos.getAll();
        res.render('productos', { prod })
    });

    router.post('/productos', async (req, res, next) => {
        let prod = req.body
        await productos.save(prod)
        res.redirect('/')
    });

    router.get('/chat', async (req, res, next) => {
        res.render('chat', {})
    })
};
