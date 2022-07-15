import List from './ListItem';
import { useState, useEffect } from 'react';
import './style.css';

function Veg() {
  const [items, setItems] = useState([]);
  useEffect(function () {
    fetch(`/api/recipes`)
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div class="container">
      <div class="col-sm-3">
        <div class="row" style={{ display: 'flex', flexWrap: 'noWrap' }}>
          {items
            .filter((item) => item.Category == 'Vegetarian')
            .map((item) => (
              <List key={item.id} id={item.id} title={item.Name} pic={item.Picture} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default Veg;
