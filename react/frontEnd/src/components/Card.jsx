const Card = ({ texto, descripcion, tiempo }) => {
    return (
      <div className="card">
        <h3>{texto}</h3>
        <p>{descripcion}</p>
        <small>{tiempo}</small>
      </div>
    );
  };
  
  export default Card;
  