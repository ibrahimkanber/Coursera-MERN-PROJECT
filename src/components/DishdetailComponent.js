import React from 'react'
import {
    Card, CardImg,CardText,
    CardTitle
} from 'reactstrap';



export const DishdetailComponent = (props) => {
    console.log(props.dish)
    if (props.dish) {
        return (
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg src={props.dish.image} width="100%"/>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1" >
                   <Card style={{height:"100%"}}>
                       <CardTitle>Comments</CardTitle>
                        {
                            props.dish.comments.map((comment,index)=>{
                                return(
                                    <div  key={index}>
                                        <CardText style={{textAlign:"left"}}>{comment.comment}</CardText>
                                        <CardText style={{textAlign:"left"}}>--{comment.author}-- 
                                          {  new Intl.DateTimeFormat("en-US",{year:"numeric", month:"short",day:"2-digit"}).format(new Date(Date.parse(comment.date)))}</CardText>
                                    
                                    </div>
                                )
                            })
                        }
                    </Card>
                </div>
            </div>
            </div>
        )
    }else{
        return(
            <div></div>
        )
    }
}
