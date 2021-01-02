import React, { useState } from 'react'
import {
    Card, CardImg, CardImgOverlay,
    CardTitle
} from 'reactstrap';


export const MenuComponent = (props) => {
 

    return (
        <div className="container">
            <div className="row">

           
            {
                props.dishes.map(dish => {
                    return (
                        <div key={dish.id} className="col-12 col-md-5 m-1">

                        <Card onClick={()=>props.onDishSelect(dish.id)} >
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardImgOverlay>
                                <CardTitle tag="h5" style={{textAlign:'left'}}>{dish.name}</CardTitle>
                            </CardImgOverlay>
                        </Card>
                        </div>
                    )
                })
            }
            </div>
        
        </div>
    )
}
