import { useContext, useState } from 'react'
import { Button, Table } from 'react-bootstrap';
import  CartContextProvider, { CartContext }  from '../../Context/CartContext'
import { CartList } from './CartList';
import Card from 'react-bootstrap/Card'
import CustomProvider from '../../Context/CartContext';


export default function Cart() {
    
    // const { items } = useContext(CartContextProvider)
    const { items } = useContext(CustomProvider)
    

    console.log("Items que llega",items);
    
    // const {item} = items
    // console.log("este es el array",item)
    const [precioTotal, setPrecioTotal] = useState([ ])
    
    

    // console.log("precioTotal",precioTotal + items.item.price)
    
     return(
         <>
                {/* {items.map(dato => 
           
                <Table striped bordered hover>
                <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dato.item.title}</td>
                        <td>{dato.quantity}</td>
                    </tr>
                </tbody>
                {/* {dato.item.title}: {dato.quantity}  */}
                
                {/* </Table> */}
                {/* )} */}       
                
                         
                <div className="row">
                {
                    items.map((dato) => (

                        <CartList key={dato.id} {...dato} />
                        ))
                    }
            </div>
            {/* <div>
                {   
                    items.map((dato) => (

                        <p>Precio: {PrecioTotal}</p>
                        ))
                    }

            </div> */}
                        
                        
                

         
         </>
     )
        
}