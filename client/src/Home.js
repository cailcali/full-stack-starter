import Item from './Item';
import './style.css';

function Home() {
  return (
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="box v">
            <Item title="Vegetarian" link="veg"></Item>
          </div>
        </div>
        <div class="col">
          <div class="box a">
            <Item title="American" link="american" />
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <div class="box c">
            <Item title="Chinese" link="chinese" />
          </div>
        </div>
        <div class="col">
          <div class="box i">
            <Item title="Italian" link="italian" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
