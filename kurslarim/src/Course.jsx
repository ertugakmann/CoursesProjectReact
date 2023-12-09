function Course({ id, content, title, price, handleDelete }) {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{title}</h2>
        <h4 className="cardPrice">{price}TL</h4>
      </div>
      <p>{content}</p>
      <button className="cardDeleteBtn" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Course;
