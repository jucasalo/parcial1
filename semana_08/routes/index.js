const userRouter = require('./userRouter');
const ingredienteRouter = require('./ingredienteRouter');
const recetaRouter = require('./recetaRouter');

function routerAPI( app){

    app.use('/api/users', userRouter);
    app.use('/api/ingrediente', userRouter);
    app.use('/api/receta', userRouter);
}

module.exports = routerAPI;