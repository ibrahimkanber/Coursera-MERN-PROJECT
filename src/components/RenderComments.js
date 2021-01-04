import React from 'react'
import {
    Card,CardText,
    CardTitle
} from 'reactstrap';
export const RenderComments = ({comments}) => {
    return (
        <div className="col-12 col-md-5 m-1" >
        <Card style={{height:"100%"}}>
            <CardTitle>Comments</CardTitle>
             {
                comments.map((comment,index)=>{
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
    )
}
