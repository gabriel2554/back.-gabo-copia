"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarioRoutes = express_1.Router();
usuarioRoutes.get('/', function (req, res) {
    return res.status(200).json({
        ok: true,
        mensaje: 'todo bien'
    });
});
usuarioRoutes.post('/', function (req, res) {
    var body = req.body;
    console.log(body);
    return res.status(200).json({
        ok: true,
        datos: body
    });
});
usuarioRoutes.put('/', function (req, res) {
    var body = req.body.POST;
    console.log(body);
    return res.status(200).json({
        ok: true,
        datos: body
    });
});
usuarioRoutes.delete('/', function (req, res) {
    var body = req.body.D;
    console.log(body);
    return res.status(200).json({
        ok: true,
        datos: body
    });
});
exports.default = usuarioRoutes;
