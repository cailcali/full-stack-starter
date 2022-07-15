import List from './ListItem';
import { useState, useEffect } from 'react';
import './style.css';

function Chinese() {
  const [items, setItems] = useState([]);
  useEffect(function () {
    fetch(`/api/recipes`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div class="container">
      <div class="col-sm-3 cardImageText">
        <div class="row" style={{ display: 'flex', flexWrap: 'noWrap' }}>
          {items
            .filter((item) => item.Category == 'Chinese')
            .map((item) => (
              <List key={item.id} id={item.id} title={item.Name} pic={item.Picture} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Chinese;
