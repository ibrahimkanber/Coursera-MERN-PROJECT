import {useState} from "react"
import { MenuComponent } from './MenuComponent';

import {DISHES} from "../shared/dishes"
import {COMMENTS} from "../shared/comments"
import {LEADERS} from "../shared/leaders"
import {PROMOTIONS} from "../shared/promotions"
import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";
import { Switch,Route,Redirect } from "react-router-dom";
import { HomeComponent } from "./HomeComponent";
import { Contact } from "./ContactComponent";
//<DishdetailComponent dish={dishes.filter(dish=>dish.id===selectedDishId)[0]}/>
function Main() {
  
  const [dishes,setDishes]=useState(DISHES)
  const [leader,setLeaders]=useState(LEADERS)
  const [promotions,setPromotions]=useState(PROMOTIONS)
  const [comments,setComments]=useState(COMMENTS)
  const [selectedDishId,setSelectedDishId]=useState("")

  const onDishSelect=(dishId)=>{
      setSelectedDishId(dishId)
  }
  return (
    <div>
      <HeaderComponent/>
      <Switch>
        <Route path="/home" component={HomeComponent}/>
        <Route exact path ="/menu" component={()=><MenuComponent dishes={DISHES} onDishSelect={onDishSelect}/>}/>
        <Route exact path ="/contactus" component={Contact}/>
        <Redirect to="/home" />
      </Switch>
     
      <FooterComponent/>
    </div>
  );
}

export default Main;
