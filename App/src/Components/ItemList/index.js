import React from 'react'
import Item from '../Item'

const ItemList = () => {

    // const [prod, setProd] = useState([algo])
    // const [dato, setdato] = useState([])

    // useEffect(() => {
    //     getGifs(algo)
    //     .then( setImages)
        
    // }, [category])
    // const operacion = new Promise((resolve,reject)=>{
    //     //aca dentro va la operacion que tarda en el tiempo
    //     setTimeout(() => {
    //         // console.log('Hola');
    //         const prod  = {
    //             id: 1,
    //             title: 'Titulo',
    //             precio: 2500,
    //             pictureUrl: ''
    //         };
    //         // const pedido_a_bd = ["Fran","Hola","Que tal"]
    //         // resolve(pedido_a_bd);
    //         resolve(prod);
            
    //     }, 2000);
    // })
    // operacion.then((arrayProducto)=>{
    //     console.log(arrayProducto)
    //     console.log('Termino bien la promesa');
    // })
    // operacion.catch(()=>{
    //     console.log("Termino la promesa mal")
    // }); //termina mal
    // const {loading} = Item();
    return (
            <div>
                {/* {loading && <p>Cargando...</p>} */}
                {/* <Item id= {1}title="Pancho" price={2500} pictureUrl=""/> */}
                <Item/>
            </div>
        
    )
}
export default ItemList 