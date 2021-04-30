import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Switch, Route , Redirect} from 'react-router-dom';
import Cart from "../Carts";
import Products from "../Products";
import Details from "../ProductDetails";
import Login from "../login";
import Register from "../Registration";


const Main = () => {
  return (
    <div className="cart--main flex--col-grow">
      <Header />
      <Switch>
        <Route exact path="/" component={Products} />
        <Route exact path="/cart" component={Cart} />
        <Route path='/product/:id' component={Details} />
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default Main;