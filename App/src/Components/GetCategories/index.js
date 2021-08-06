import React from 'react'
import { getAllItem } from '../../Helpers/getAllItem'
// {id,title,image,price,description,category}
const GetCategories = (data) => {
    // console.log(id,title,url);

    getAllItem(data)

    return (
        <div className="card animate__animated animate__fadeIn">
            <p>{category}</p>
            <p>{image}</p>
            <p>{price}</p>
            <p>{description}</p>
            <p>{title}</p>
        </div> 
    )
}
export default GetCategories
