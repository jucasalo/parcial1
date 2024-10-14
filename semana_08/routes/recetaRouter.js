const express = require('express');
const router = express.Router();
const {
    getAllRecetas,
    getRecetaById,
    createReceta,
    updateReceta,
    deleteReceta,
    nombreReceta,
filtrarCategoria,
filtrarTiempo
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
router.get('/buscar/:nombre', nombreReceta);

// filtrar recetas
router.get('/filtro/categoria/:categoria', filtrarCategoria);
router.get('/filtro/tiempo/:tiempoPreparacion', filtrarTiempo);

module.exports = router;
