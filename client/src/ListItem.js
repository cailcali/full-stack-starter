import './style.css';
import { Link } from 'react-router-dom';

function List({ id, title, pic, link }) {
  return (
    <div class="card border-dark" style={{ color: 'white' }}>
      <img class="card-img-top cover" height="400" src={pic} alt="" />
      <div class="card-body">
        <h5 class="card-title"></h5>
        <Link to={`/detail/${id}`} class="h2">
          {title}
        </Link>
      </div>
    </div>
  );
}

export default List;
