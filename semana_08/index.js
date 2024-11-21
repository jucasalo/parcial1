const express = require('express');
const cors = require('cors');
const routerAPI = require('./routes/index.js');

const app = express();
const port = 3000;

// Configuración de CORS
const corsOptions = {
    origin: ['http://localhost:5173'], // Sin el slash final
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};
app.use(cors(corsOptions));

// Middleware para parsear JSON
app.use(express.json());

// Rutas principales
routerAPI(app);

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
