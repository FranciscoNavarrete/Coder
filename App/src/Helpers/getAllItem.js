export const getAllItem = async () => {
    const url = `https://fakestoreapi.com/products/`;
    const resp = await fetch(url);
    const  data  = await resp.json();
    
    const item = data.map(prod => {
        return {
            id: prod.id,
            title: prod.title,
            image: prod.image,
            price: prod.price,
            description: prod.description,
            category: prod.category,
        }
    })
    return item;
} 