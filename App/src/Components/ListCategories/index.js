import React from 'react';
import ItemCount from '../ItemCount';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom"
 

const ListCategories = (category) => {
    const {id, title, image} = category;
    
    return (
        <Card className= "container col-4 row-3">
            <div className= "container">
            <img  alt={title} src={image}  width="150" height="150" text-align ="center" />
            <p text-align="center">{title}</p>
            </div>
            <Link  to={`/itemDetail/${id}`} >Ver más...</Link>
            <div className= "container-fluid">
            <ItemCount  stock={5} initial={0} />
            </div>
        </Card>
    )
}
export default ListCategories