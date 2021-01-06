import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import { Loading } from './LoadingComponent'
import {baseUrl} from "../shared/baseUrl"


export const RenderCard = ({ item, isLoading, errMess }) => {
console.log(item)
    if (isLoading) {
        return (
            <Loading />
        )
    } else if (errMess) {
        return (
            <h4>{errMess}</h4>
        )
    } else {


        return (
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
        )

    }
}
