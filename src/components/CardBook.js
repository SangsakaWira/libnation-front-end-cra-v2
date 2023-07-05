
function CardBook(props) {
  return (
    <div className="book-card">
      <div className="book-card-image">
        <img src={props.image} alt="book cover" />
      </div>
      <div className="book-card-detail">
        <h2 className="heading-2">{props.title}</h2>
        <p>{props.description}</p>
        <p className="heading-2">{props.price}</p>
      </div>
      <button className="btn btn-primary">{props.button}</button>
    </div>
  );
}

export default CardBook;
