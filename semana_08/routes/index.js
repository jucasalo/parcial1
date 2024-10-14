const userRouter = require('./userRouter');
const ingredienteRouter = require('./ingredienteRouter');
const recetaRouter = require('./recetaRouter');

function routerAPI( app){

    app.use('/api/users', userRouter);
    app.use('/api/ingrediente', ingredienteRouter);
    app.use('/api/receta', recetaRouter);
}

module.exports = routerAPI;