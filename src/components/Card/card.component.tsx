type Props = {
  title?: string | JSX.Element;
  body?: string | JSX.Element;
};

function Card(props: Props) {
  return (
    <div className="Card">
      <div className="cardTitle">
        <span>{props.title}</span>
      </div>
      <div className="cardBody">
        <span>{props.body}</span>
      </div>
    </div>
  );
}

export default Card;
