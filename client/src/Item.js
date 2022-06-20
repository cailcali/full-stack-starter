import './style.css';

function Item({ title, link }) {
  return (
    <div class="btn btn-primary btn-block gradient-button">
      <a href={link}>{title}</a>
    </div>
  );
}

export default Item;
