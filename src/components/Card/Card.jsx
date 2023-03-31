import "./Card.scss"

const Card = (props) => {
    console.log(props);
  const {id, name, img} =props
  return (
    <div className="card" key={id}>
      <img src={img} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;
