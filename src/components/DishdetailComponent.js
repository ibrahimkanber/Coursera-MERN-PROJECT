import React from 'react'
import {
    Breadcrumb, BreadcrumbItem,Button
} from 'reactstrap';
import { Link } from "react-router-dom"
import { RenderDish } from './RenderDish';
import { RenderComments } from './RenderComments';


export const DishdetailComponent = (props) => {
    console.log(props.dish)
    if (props.dish) {
        return (
            <div className="container">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/menu">Menu</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>
                        {props.dish.name}
                    </BreadcrumbItem>
                </Breadcrumb>

                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>

                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} />
                  
                </div>
            </div>
        )
    } else {
        return (
            <div></div>
        )
    }
}
