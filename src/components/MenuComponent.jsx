import React from "react";
import { Card, CardImg, CardImgOverlay,
  CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import DishDetail from './DishDetailComponent.jsx';

function renderDish(dish) {
  if (dish != null) return <DishDetail dish={dish} />;
  else return <div />;
}
function RenderMenuItem ({dish, onClick}) {
        return (
            <Card>
                <Link to={`/menu/${dish.id}`} >
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Link>
            </Card>
        );
    }
const Menu = (props, onClick) => {
  const menu = props.dishes.map(dish => {
    return (
      <div key={dish.id} className="col-12 col-md-5 m-1">
        <RenderMenuItem dish={dish} onClick={renderDish(dish)} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
     
    </div>
  );
}




export default Menu;