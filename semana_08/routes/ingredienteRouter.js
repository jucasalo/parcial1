const express = require('express');
const router = express.Router();
const {
    getAllIngredientes,
    getIngredienteById,
    createIngrediente,
    updateIngrediente,
    deleteIngrediente,
    searchIngrediente,
    filterIngredientes
} = require('../controllers/ingedienteController');

// obtener todos los ingredientes
router.get('/', getAllIngredientes);

// obtener un ingrediente por ID
router.get('/:id', getIngredienteById);

// agregar un nuevo ingrediente
router.post('/', createIngrediente);

// actualizar un ingrediente
router.put('/:id', updateIngrediente);

// eliminar un ingrediente
router.delete('/:id', deleteIngrediente);

// buscar ingredientes por nombre
router.get('/buscar', searchIngrediente);

// filtrar ingredientes
router.get('/filtro', filterIngredientes);

module.exports = router;

