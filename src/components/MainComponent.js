import {useState,useEffect} from "react"
import { MenuComponent } from './MenuComponent';

import { HeaderComponent } from "./HeaderComponent";
import { FooterComponent } from "./FooterComponent";
import { Switch,Route,Redirect } from "react-router-dom";
import { HomeComponent } from "./HomeComponent";
import { Contact } from "./ContactComponent";
import {DishdetailComponent} from "./DishdetailComponent"
import About from "./AboutUs";

import {useSelector,useDispatch} from "react-redux"
import {fetchDishes} from "../redux/ActionCreators"



function Main() {
  const {dishes,leaders,comments,promotions}=useSelector(state=>state)
  const dispatch=useDispatch()


  useEffect(() => {
    dispatch(fetchDishes())
  
  }, [])


 


  const HomePage=()=>{
    return(
      <HomeComponent 
        dish={dishes.dishes.filter(dish=>dish.featured)[0]}
        dishesLoading={dishes.isLoading}
        errMess={dishes.errorMessage}
        promotion={promotions.filter(promo=>promo.featured)[0]}
        leader={leaders.filter(lead=>lead.featured)[0]}
        />
    )
  }

  const DishWithId=({match})=>{
    return(
      <DishdetailComponent 
      dish={dishes.dishes.filter(dish=>dish.id==parseInt(match.params.id,10))[0]}
      comments={comments.filter(comment=>comment.dishId==parseInt(match.params.id,10))}
      dishesLoading={dishes.isLoading}
      errMess={dishes.errorMessage}
      />
    )
  }

  const AboutUs=()=>{
    return(
      <About leaders={leaders}/>
    )
  }

  return (
    <div>
      <HeaderComponent/>
      <Switch>

        <Route path="/home" component={HomePage}/>

        <Route exact path ="/menu" component={()=><MenuComponent dishes={dishes} />}/>

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
