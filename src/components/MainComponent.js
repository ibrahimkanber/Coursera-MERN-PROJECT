import {useState} from "react"
import { MenuComponent } from './MenuComponent';
import { DishdetailComponent } from './DishdetailComponent';
import {DISHES} from "../shared/dishes"
import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";

function Main() {
  
  const [dishes,setDishes]=useState(DISHES)
  const [selectedDishId,setSelectedDishId]=useState("")

  const onDishSelect=(dishId)=>{
      setSelectedDishId(dishId)
  }
  return (
    <div>
      <HeaderComponent/>
      <MenuComponent dishes={DISHES} onDishSelect={onDishSelect}/>
      <DishdetailComponent dish={dishes.filter(dish=>dish.id===selectedDishId)[0]}/>
      <FooterComponent/>
    </div>
  );
}

export default Main;
