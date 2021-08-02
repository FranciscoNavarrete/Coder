export const getItem = async (category) => {
    const url = 'https://fakestoreapi.com/products/category/electronics';
    const resp = await fetch(url);
    const  data  = await resp.json();

    const item = data.map(prod => {
        console.log(data)
        return {
            id: prod.id,
            title: prod.title,
            image: prod.image,
            price: prod.price,
            description: prod.description
           
        }
    })

    return item;
} 