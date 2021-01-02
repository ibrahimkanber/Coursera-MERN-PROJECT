import {useState} from "react"
import { Navbar, NavbarBrand } from 'reactstrap';
import { MenuComponent } from './MenuComponent';
import { DishdetailComponent } from './DishdetailComponent';
import {DISHES} from "../shared/dishes"

function Main() {
    const [dishes,setDishes]=useState(DISHES)
  const [selectedDishId,setSelectedDishId]=useState("")

  const onDishSelect=(dishId)=>{
      setSelectedDishId(dishId)
  }
  return (
    <div className="App">
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
      <MenuComponent dishes={DISHES} onDishSelect={onDishSelect}/>
      <DishdetailComponent dish={dishes.filter(dish=>dish.id===selectedDishId)[0]}/>
    </div>
  );
}

export default Main;
