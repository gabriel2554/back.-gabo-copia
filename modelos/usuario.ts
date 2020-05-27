import { Schema, Document } from 'mongoose';
import mongoose from 'mongoose';
import mongooseUniqueValidator = require('mongoose-unique-validator');

export interface InUsuario extends Document {
    nombre:string;
    apellidoP:string;
    apellidoM:string;
    email:string;
    contraseña:Number;
    estado:string;
}

const usuarioSchema: Schema = new Schema ({
    nombre: { type: String, uppercase: true },
    apellidoP: { type: String, uppercase: true },
    apellidoM: {type: String, uppercase: true },
    email: { type: String, lowercase: true, required: [ true, 'Se requeire un correo electronico'], unique: true },
    contraseña: { type: Number}, 
    estado: { type: String, default: 'Activo'},
},{ collection: 'usuarios' } );

usuarioSchema.plugin( mongooseUniqueValidator, { message: ` { PATH } de ser unico`});
export default mongoose.model<InUsuario>( 'Usuario', usuarioSchema );
