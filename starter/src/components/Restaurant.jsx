function Restaurant(props) {
  
  //Presentation component
  console.log(props);
  return (
    <div data-cy={props.restaurant.name} className="restaurant">
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
    </div>
  );
}

export default Restaurant;