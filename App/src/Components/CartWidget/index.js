  
import {useContext} from "react";
import {Link} from "react-router-dom";
import CartContext from "../../Context/CartContext";

const CartWidget = ()=>{

     const {finalQuantity} = useContext(CartContext);

     if (finalQuantity === 0) return (<i className="fa fa-shopping-cart "></i>)
    return(
    <>
        <i className="fa fa-shopping-cart ">{finalQuantity}</i>
        
    </>
    )
}
export default CartWidget