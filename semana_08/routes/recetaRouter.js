const express = require('express');
const router = express.Router();
const {
    getAllRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta,
    searchReceta,
    filterRecetas
} = require('../controllers/recetaController');

// obtener todas las recetas
router.get('/', getAllRecetas);

// obtener una receta por ID
router.get('/:id', getRecetaById);

// crear una nueva receta
router.post('/', createReceta);

// actualizar una receta
router.put('/:id', updateReceta);

// eliminar una receta
router.delete('/:id', deleteReceta);

// buscar recetas por nombre
router.get('/buscar', searchReceta);

// filtrar recetas
router.get('/filtro', filterRecetas);

module.exports = router;
