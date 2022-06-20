import List from './ListItem';
import { useState, useEffect } from 'react';
import './style.css';

function Italian() {
  const [items, setItems] = useState([]);
  useEffect(function () {
    const request = fetch('https://api.airtable.com/v0/appTEF3HX6lc96DcR/Italian?api_key=key5zkU8SBip3vhWj');
    request.then((response) => response.json()).then((data) => setItems(data.records));
  }, []);

  return (
    <div class="container">
      <div class="col-sm-3 cardImageText">
        <div class="row" style={{ display: 'flex', flexWrap: 'noWrap' }}>
          {items.map((item) => (
            <List title={item.fields.Name} pic={item.fields.Picture[0].url} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Italian;
