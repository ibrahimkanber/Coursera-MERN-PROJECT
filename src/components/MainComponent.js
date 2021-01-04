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
import {DishdetailComponent} from "./DishdetailComponent"
import About from "./AboutUs";
function Main() {
  
  const [dishes,setDishes]=useState(DISHES)
  const [leaders,setLeaders]=useState(LEADERS)
  const [promotions,setPromotions]=useState(PROMOTIONS)
  const [comments,setComments]=useState(COMMENTS)
  const [selectedDishId,setSelectedDishId]=useState("")

  const onDishSelect=(dishId)=>{
      setSelectedDishId(dishId)
  }

  const HomePage=()=>{
    return(
<HomeComponent 
        dish={dishes.filter(dish=>dish.featured)[0]}
        promotion={promotions.filter(promo=>promo.featured)[0]}
        leader={leaders.filter(lead=>lead.featured)[0]}
        />
    )
  }

  const DishWithId=({match})=>{
    return(
      <DishdetailComponent 
      dish={dishes.filter(dish=>dish.id==parseInt(match.params.id,10))[0]}
      comments={comments.filter(comment=>comment.dishId==parseInt(match.params.id,10))}
      />
    )
  }

  const AboutUs=({match})=>{
    return(
      <About leaders={leaders}/>
    )
  }

  return (
    <div>
      <HeaderComponent/>
      <Switch>

        <Route path="/home" component={HomePage}/>

        <Route exact path ="/menu" component={()=><MenuComponent dishes={DISHES} onDishSelect={onDishSelect}/>}/>

        <Route path="/menu/:id" component={DishWithId}/>

        <Route exact path ="/contactus" component={Contact}/>

        <Route exact path ="/aboutus" component={AboutUs}/>

        <Redirect to="/home" />
      </Switch>
     
      <FooterComponent/>
    </div>
  );
}

export default Main;
