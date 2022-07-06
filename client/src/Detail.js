import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css';

function Detail() {
  const { id } = useParams();

  const [data, setData] = useState();

  useEffect(
    function () {
      if (id) {
        fetch(`https://api.airtable.com/v0/appSeNpZMzPQuA8h7/Recipes/${id}?api_key=key5zkU8SBip3vhWj`)
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
    return value.split('&').join('<br><br>');
  }

  return (
    <main class="container">
      <div class="center">
        <h1>{data?.fields?.Name}</h1>
        <img src={data?.fields?.Picture[0].url} height="450" />
      </div>
      <div class="row">
        <div class="col-sm">
          <div class="card border-dark" style={{ height: 'auto', marginTop: '15px' }}>
            <div class="card-body">
              <h4 class="card-title">Instructions</h4>
              <p>{data?.fields?.Instructions}</p>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="card border-dark" style={{ height: 'auto', marginTop: '15px' }}>
            <div class="card-body">
              <h4 class="card-title">Ingredients</h4>
              <p>{data?.fields?.Ingredients}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Detail;
