function Item({ title, text }) {
  return (
    <div>
      <div className="card">
        <img className="card-img-top" src="..." alt="Card image cap" />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{text}</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Item;
