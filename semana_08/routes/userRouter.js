const express = require('express');
const router = express.Router();

const {
  creatUser, getUsers, getUsersById, deleteUserById, updateUserById, login
} = require('../controllers/userController');

//devuelve todos los usuarios
router.get('/', getUsers);

// crea un nuevo usuario
router.post('/', creatUser);

// obtener usuario por ID
router.get('/:id', getUsersById);

// actualizamos un usuario por ID
router.put('/:id', updateUserById);

// eliminamos un usuario por ID
router.delete('/:id', deleteUserById);

// iniciar sesión
router.post('/login', login);

module.exports = router;
