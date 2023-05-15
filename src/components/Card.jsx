import "./Card.css";

const Card = (props) => {
  const get_colors = (props) => {


    if (props.Red) return 'Red'
    if (props.Green) return 'Green'
    if (props.Blue) return 'Blue'
    if (props.Purple) return 'Purple'
    return ""
  };

  return (
    <div className={`Card ${get_colors(props)}`}>
      <div className="Header">
        <span className="Title">{props.title}</span>
      </div>
      <div className="Content">
      {props.children}
      </div>
    </div>
  );
};

export default Card;
