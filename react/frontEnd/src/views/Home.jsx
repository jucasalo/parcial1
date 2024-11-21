import ProductsContainer from "../components/ProductsContainer";
import Card from '../components/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';  // Importamos Axios

const Home = () => {
  const [recetas, setRecetas] = useState([]); // Estado para las recetas

  useEffect(() => {
    console.log('Se renderizó el componente.');

    const getRecetas = async () => {
      try {
        // Usamos Axios para hacer la solicitud GET
        const response = await axios.get('http://localhost:3000/api/receta');
        
        console.log('Respuesta del servidor:', response.data);  // Log de la respuesta del servidor

        if (response.data.msg === 'success') {
          // Adaptar las recetas al formato necesario
          const recetasAdaptadas = response.data.data.map((receta) => ({
            id: receta._id,
            nombre: receta.nombre,
            descripcion: receta.descripcion,
            tiempoPreparacion: receta.tiempoPreparacion,
          }));
          setRecetas(recetasAdaptadas);
        } else {
          console.error("Error en la respuesta del servidor:", response.data.msg);
        }
      } catch (error) {
        console.error("Error al obtener las recetas:", error);
      }
    };

    getRecetas();
  }, []);

  return (
    <>
      <h2>Inicio</h2>
      <h4>Recetas disponibles:</h4>

      <ProductsContainer>
        {recetas.length > 0 ? (
          recetas.map((receta) => (
            <Card
              key={receta.id}
              texto={receta.nombre}
              descripcion={receta.descripcion}
              tiempo={`Tiempo: ${receta.tiempoPreparacion} min`}
            />
          ))
        ) : (
          <p>No hay recetas disponibles en este momento.</p>
        )}
      </ProductsContainer>
    </>
  );
};

export default Home;
