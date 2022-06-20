import './style.css';

function List({ title, pic, link }) {
  return (
    <div class="card border-dark" style={{ color: 'white' }}>
      <img class="card-img-top cover" height="400" src={pic} alt="" />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <a href="#" class="h2">
          {title}
        </a>
      </div>
    </div>
  );
}

export default List;
