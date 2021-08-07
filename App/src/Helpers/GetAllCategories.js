import React from 'react'
// import { getAllItem } from '../../Helpers/getAllItem'
// // {id,title,image,price,description,category}
// const GetCategories = (data) => {
//     // console.log(id,title,url);

//     getAllItem(data)

//     return (
//         <div className="card animate__animated animate__fadeIn">
//             <p>{category}</p>
//             <p>{image}</p>
//             <p>{price}</p>
//             <p>{description}</p>
//             <p>{title}</p>
//         </div> 
//     )
// }
// export default GetCategories
 const GetAllCategories = async ( category ) => {
     
     const url = `https://fakestoreapi.com/products/category/${category}`;
    const resp = await fetch(url);
    const  data  = await resp.json();
    console.log("GET AL CATEGOIRES.----------",data);
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