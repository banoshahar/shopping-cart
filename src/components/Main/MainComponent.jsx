import React from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import { Switch, Route , Redirect} from 'react-router-dom';
import Cart from "../Carts/carts.jsx";
import Products from "../Products/Products.jsx";
import Details from "../ProductDetails/Details";


const Main = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route path='/product/:id' component={Details} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;