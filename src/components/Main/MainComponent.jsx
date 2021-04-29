import React from 'react';
import Header from '../Header/HeaderComponent';
import Footer from '../Footer/FooterComponent';
import { Switch, Route , Redirect} from 'react-router-dom';
import Cart from "../Carts";
import Products from "../Products";
import Details from "../ProductDetails/Details";
import Login from "../login";


const Main = () => {
  return (
    <div className="cart--main flex--col-grow">
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route path='/product/:id' component={Details} />
        <Route path='/login' component={Login} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;