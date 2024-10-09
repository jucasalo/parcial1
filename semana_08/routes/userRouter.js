const express = require('express');
const router = express.Router();

/* ------------------------- Importo el Controlador ------------------------- */
const {
  createRecipe, 
  getRecipes, 
  getRecipeById, 
  deleteRecipeById, 
  updateRecipeById, 
  searchRecipeByName
} = require('../controllers/recipeController');

// Retorna todas las recetas (con posibilidad de filtros)
router.get('/', getRecipes);

// Crea una nueva receta
router.post('/', createRecipe);

// Obtener receta por ID
router.get('/:id', getRecipeById);

// Actualizamos una receta por ID
router.put('/:id', updateRecipeById);

// Eliminamos una receta por ID
router.delete('/:id', deleteRecipeById);

// Búsqueda por nombre
router.get('/search/:name', searchRecipeByName);

module.exports = router;
