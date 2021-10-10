import { Route, Redirect, Switch } from "react-router-dom";




//HOC
import HomeLayoutHOC from "./HOC/Home.HOC";
import RestaurantLayoutHOC from "./HOC/Restaurant.HOC";
//import CheckoutLayoutHOC from "./HOC/Checkout.Hoc";

//Component
import Temp from "./Components/temp";




//pages
import Home from "./Page/Home";

function App() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>

    <HomeLayoutHOC path="/:type" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id/overview" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id/order-online" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id/menu" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id/reviews" exact component={Home}/>
    <RestaurantLayoutHOC path="/restaurant/:id/photos" exact component={Home}/>
    
    
    
     
    </>
  )
}

export default App;
