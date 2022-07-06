import List from './ListItem';
import { useState, useEffect } from 'react';
import './style.css';

function Veg() {
  const [items, setItems] = useState([]);
  useEffect(function () {
    const request = fetch(
      'https://api.airtable.com/v0/appSeNpZMzPQuA8h7/Recipes?filterByFormula=%7BCategory%7D+%3D+%22Vegetarian%22&api_key=key5zkU8SBip3vhWj'
    );
    request.then((response) => response.json()).then((data) => setItems(data.records));
  }, []);

  return (
    <div class="container">
      <div class="col-sm-3">
        <div class="row" style={{ display: 'flex', flexWrap: 'noWrap' }}>
          {items.map((item) => (
            <List id={item.id} title={item.fields['Recipe name']} pic={item.fields.Picture[0].url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Veg;
