import './App.css';

// Importo las vistas
import Home from './views/Home';
// import Ingredientes from './views/Ingredientes';
// import Recetas from './views/Recetas';
// import Login from './views/Login';
// import Registro from './views/Registro';
import NotFound from './views/NotFound';

import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1> Gestión de Recetas e Ingredientes</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to='/'> Inicio </NavLink>
          </li>
          {/* <li>
            <NavLink to='/ingredientes'> Ingredientes </NavLink>
          </li>
          <li>
            <NavLink to='/recetas'> Recetas </NavLink>
          </li>
          <li>
            <NavLink to='/registro'> Registro </NavLink>
          </li>
          <li>
            <NavLink to='/login'> Login </NavLink>
          </li>*/}
        </ul> 
      </nav>

      { /* Área donde se mostrarán los componentes (Vistas) */ }
      <Routes>
        <Route path='/' element={<Home />} /> 
        {/* <Route path='/ingredientes' element={<Ingredientes />} />
        <Route path='/recetas' element={<Recetas />} />
        <Route path='/registro' element={<Registro />} />
        <Route path='/login' element={<Login />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
