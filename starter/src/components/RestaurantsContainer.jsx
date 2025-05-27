import Restaurant from "./Restaurant";

//Container for the logic for Restaurant
function RestaurantsContainer(props) {
  console.log(props);
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;