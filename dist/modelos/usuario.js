"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
var mongooseUniqueValidator = require("mongoose-unique-validator");
var usuarioSchema = new mongoose_1.Schema({
    nombre: { type: String, uppercase: true },
    apellidoP: { type: String, uppercase: true },
    apellidoM: { type: String, uppercase: true },
    email: { type: String, lowercase: true, required: [true, 'Se requeire un correo electronico'], unique: true },
    contraseña: { type: Number },
    estado: { type: String, default: 'Activo' },
}, { collection: 'usuarios' });
usuarioSchema.plugin(mongooseUniqueValidator, { message: " { PATH } de ser unico" });
exports.default = mongoose_2.default.model('Usuario', usuarioSchema);
