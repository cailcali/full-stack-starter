import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`/api/recipes/${id}`)
          .then((response) => response.json())
          .then((data) => setData(data));
      }
    },
    [id]
  );

  function formattedString(value) {
    return value.split('&').join('<li>');
  }

  function numberedFormat(value) {
    return value.split('&').join('\n');
  }

  return (
    <main class="container">
      <h1>{data?.Name}</h1>
      <center>
        <img src={data?.Picture} height="450" />
      </center>
      <div class="row">
        <div class="col-sm">
          <div class="card border-dark" style={{ height: 'auto', marginTop: '15px' }}>
            <div class="card-body">
              <h4 class="card-title">Instructions</h4>
              <p>{data?.Instructions}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card border-dark" style={{ height: 'auto', marginTop: '15px' }}>
            <div class="card-body">
              <h4 class="card-title">Ingredients</h4>
              <p>{data?.Ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Detail;
