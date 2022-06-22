import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
  return (
    <main className="container">
      <h1>{data?.fields?.Name}</h1>
    </main>
  );
}

export default Detail;
