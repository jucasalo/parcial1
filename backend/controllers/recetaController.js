const Receta = require('../models/recetaModel');
const Ingrediente = require('../models/ingredienteModel');

//todas las recetas
const getAllRecetas = async (req, res) => {
    try {
        const recetas = await Receta.find();
        if (!recetas.length) {
            return res.status(404).json({ msg: 'No se encontraron recetas', data: [] });
        }
        res.status(200).json({ msg: 'success', data: recetas });
    } catch (error) {
        console.error('Error al obtener las recetas:', error); 
        res.status(500).json({ msg: 'Error al obtener recetas', error: error.message });
    }
};

// receta por ID
const getRecetaById = async (req, res) => {
    const { id } = req.params;
    try {
        const receta = await Receta.findById(id);
        if (receta) {
            res.status(200).json({ msg: 'success', data: receta });
        } else {
            res.status(404).json({ msg: 'Receta no encontrada', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener la receta', data: {} });
    }
};

// Crear receta
const createReceta = async (req, res) => {
    const { nombre, descripcion, ingredientes, tiempoPreparacion, instrucciones, categoria } = req.body;

    if (!nombre || !descripcion || !ingredientes || !tiempoPreparacion || !instrucciones) {
        return res.status(400).json({
            msg: 'Faltan parámetros obligatorios',
            data: { nombre, descripcion, ingredientes, tiempoPreparacion, instrucciones, categoria }
        });
    }

    try {
        const nuevaReceta = new Receta({
            nombre,
            descripcion,
            ingredientes,
            tiempoPreparacion,
            instrucciones,
            categoria
        });

        await nuevaReceta.save();
        res.status(201).json({ msg: 'Receta creada', data: nuevaReceta });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear la receta', data: {} });
    }
};

// Actualizar receta
const updateReceta = async (req, res) => {
    const { id } = req.params;
    const { nombre, ingredientes, tiempoPreparacion, instrucciones, categoria } = req.body;

    try {
        let ingredientesIds;
        if (ingredientes) {
            ingredientesIds = await Ingrediente.find({ nombre: { $in: ingredientes } }).select('_id');
        }

        const updateData = {
            nombre,
            ...(ingredientesIds && { ingredientes: ingredientesIds }), 
            tiempoPreparacion,
            instrucciones,
            categoria
        };

        const recetaActualizada = await Receta.findByIdAndUpdate(id, updateData, { new: true });
        if (recetaActualizada) {
            res.status(200).json({ msg: 'Receta actualizada', data: recetaActualizada });
        } else {
            res.status(404).json({ msg: 'Receta no encontrada', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al actualizar la receta', data: {} });
    }
};

// Eliminar receta
const deleteReceta = async (req, res) => {
    const { id } = req.params;
    try {
        const recetaEliminada = await Receta.findByIdAndDelete(id);
        if (recetaEliminada) {
            res.status(200).json({ msg: 'Receta eliminada', data: recetaEliminada });
        } else {
            res.status(404).json({ msg: 'Receta no encontrada', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar la receta', data: {} });
    }
};

// Buscar receta por nombre
const nombreReceta = async (req, res) => {
    const { nombre } = req.params; 
    try {
        const recetas = await Receta.find({ nombre: { $regex: nombre, $options: 'i' } });
        if (recetas.length) {
            res.status(200).json({ msg: 'success', data: recetas });
        } else {
            res.status(404).json({ msg: 'No se encontraron recetas', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al buscar la receta', data: {} });
    }
};

// Filtrar recetas por categoría
const filtrarCategoria = async (req, res) => {
    const { categoria } = req.params;  
    try {
        const recetas = await Receta.find({ categoria });
        if (recetas.length) {
            res.status(200).json({ msg: 'success', data: recetas });
        } else {
            res.status(404).json({ msg: 'No se encontraron recetas para la categoría proporcionada', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al filtrar las recetas', data: {} });
    }
};

// Filtrar recetas por tiempo de preparación exacto
const filtrarTiempo = async (req, res) => {
    const { tiempoPreparacion } = req.params;

    try {
        const recetas = await Receta.find({ tiempoPreparacion: Number(tiempoPreparacion) });
        if (recetas.length) {
            res.status(200).json({ msg: 'success', data: recetas });
        } else {
            res.status(404).json({ msg: 'No se encontraron recetas con el tiempo de preparación proporcionado', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al filtrar las recetas', data: {} });
    }
};


module.exports = {
    getAllRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta,
    nombreReceta,
filtrarCategoria,
filtrarTiempo
};
