// a "card" is a web dev term for a component with rounded corners, a drop shadow, etc.
import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
