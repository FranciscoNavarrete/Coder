import { useContext } from 'react'
import { Table } from 'react-bootstrap';
import  CartContextProvider  from '../../Context/CartContext'
import { CartList } from './CartList';

export default function Cart() {
    
    const { items } = useContext(CartContextProvider)
    console.log("Items que llega",items);
    
    const {item} = items
    console.log("este es el array",item)
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
                        
                        
                

         
         </>
     )
        
}