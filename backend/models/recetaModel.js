const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recetaSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    ingredientes: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Ingrediente'
        }
    ],
    tiempoPreparacion: {
        type: Number, // Tiempo en minutos
        required: true
    },
    instrucciones: {
        type: String,
        required: true
    },
    categoria: {
        type: String, // Por ejemplo aca podria ir: "desayuno", "almuerzo", "cena", si tuviesemos datos.
        required: false
    },
    created: {
        type: Date,
        default: Date.now
    }
});

const Receta = mongoose.model('Receta', recetaSchema);
module.exports = Receta;
