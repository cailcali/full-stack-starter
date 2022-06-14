import Item from './Item';

function Home() {
  return (
    <main className="container">
      <h1>Eat Healthy</h1>
      <Item title="Vegetarian" text="Text 1" />
      <Item title="American" text="Text 2" />
      <Item title="Chinese" text="Text 3" />
      <Item title="Italian" text="Text 4" />
    </main>
  );
}

export default Home;
