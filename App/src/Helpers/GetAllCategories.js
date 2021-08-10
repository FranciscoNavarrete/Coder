import React from 'react'

 const GetAllCategories = async ( category ) => {
     
    const url = `https://fakestoreapi.com/products/category/${category}`;
    const resp = await fetch(url);
    const  data  = await resp.json();

    const categories = data.map(prod => {
        
        return {
            id: prod.id,
            title: prod.title,
            price: prod.price,
            category: prod.category,
            description: prod.description,
            image: prod.image
        }
    })
    return categories;
} 
export default GetAllCategories