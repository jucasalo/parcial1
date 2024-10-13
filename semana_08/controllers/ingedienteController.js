const Ingrediente = require('../models/ingredienteModel');

// Obtener todos los ingredientes
const getAllIngredientes = async (req, res) => {
    try {
        const ingredientes = await Ingrediente.find();
        res.status(200).json({ msg: 'success', data: ingredientes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener los ingredientes', data: {} });
    }
};

// Obtener un ingrediente por ID
const getIngredienteById = async (req, res) => {
    const { id } = req.params;
    try {
        const ingrediente = await Ingrediente.findById(id);
        if (ingrediente) {
            res.status(200).json({ msg: 'success', data: ingrediente });
        } else {
            res.status(404).json({ msg: 'Ingrediente no encontrado', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al obtener el ingrediente', data: {} });
    }
};

// Crear un nuevo ingrediente
const createIngrediente = async (req, res) => {
    const { nombre, cantidad, unidadMedida } = req.body;

    if (!nombre || !cantidad || !unidadMedida) {
        return res.status(400).json({ msg: 'Faltan parámetros obligatorios', data: { nombre, cantidad, unidadMedida } });
    }

    try {
        const nuevoIngrediente = new Ingrediente({ nombre, cantidad, unidadMedida });
        await nuevoIngrediente.save();
        res.status(201).json({ msg: 'Ingrediente creado', data: nuevoIngrediente });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al crear el ingrediente', data: {} });
    }
};

// Actualizar un ingrediente
const updateIngrediente = async (req, res) => {
    const { id } = req.params;
    const { nombre, cantidad, unidadMedida } = req.body;

    try {
        const ingredienteActualizado = await Ingrediente.findByIdAndUpdate(
            id,
            { nombre, cantidad, unidadMedida },
            { new: true }
        );
        if (ingredienteActualizado) {
            res.status(200).json({ msg: 'Ingrediente actualizado', data: ingredienteActualizado });
        } else {
            res.status(404).json({ msg: 'Ingrediente no encontrado', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al actualizar el ingrediente', data: {} });
    }
};

// Eliminar un ingrediente
const deleteIngrediente = async (req, res) => {
    const { id } = req.params;

    try {
        const ingredienteEliminado = await Ingrediente.findByIdAndDelete(id);
        if (ingredienteEliminado) {
            res.status(200).json({ msg: 'Ingrediente eliminado', data: ingredienteEliminado });
        } else {
            res.status(404).json({ msg: 'Ingrediente no encontrado', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al eliminar el ingrediente', data: {} });
    }
};

// Buscar ingredientes por nombre
const searchIngrediente = async (req, res) => {
    const { nombre } = req.query;

    try {
        const ingredientes = await Ingrediente.find({ nombre: { $regex: nombre, $options: 'i' } });
        if (ingredientes.length) {
            res.status(200).json({ msg: 'success', data: ingredientes });
        } else {
            res.status(404).json({ msg: 'No se encontraron ingredientes con ese nombre', data: {} });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al buscar el ingrediente', data: {} });
    }
};

// Filtrar ingredientes 
const filterIngredientes = async (req, res) => {
    const { tipo } = req.query;

    try {
        const ingredientes = await Ingrediente.find({ tipo });
        res.status(200).json({ msg: 'success', data: ingredientes });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Error al filtrar los ingredientes', data: {} });
    }
};

module.exports = {
    getAllIngredientes,
    getIngredienteById,
    createIngrediente,
    updateIngrediente,
    deleteIngrediente,
    searchIngrediente,
    filterIngredientes
};
