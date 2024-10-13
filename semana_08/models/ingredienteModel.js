const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ingredienteSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    unidadMedida: {
        type: String,
        required: true
    },
    tipo: {
        type: String, //Por ej aca podria ir: "fruta", "carne"
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Ingrediente = mongoose.model('Ingrediente', ingredienteSchema);
module.exports = Ingrediente;
