// // import {createContext} from "react"
// //     export const CartContext = createContext() 
// //     // export const {Consumer,Provider} = contexto
// //     // addItem=(item,quantity)=>{

// //     // }
// //     // removeItem=(itemId)=>{

// //     // }
// //     // clear=()=>{

// //     // }
// //     // isInCart=(id)=>{

// //     // } 
    
// import React, { createContext, useState } from 'react'

// const CartContext = createContext({})

// export function CartContextProvider({ children }) {
//     // console.log("Children",children);

//     const [items, setItems] = useState([])
    
//     const addItem = (item, quantity) => {
//         const index = items.findIndex(itemInList => itemInList.item.id === item.id)
        
//         if(index !== -1){
//             const nuevoItems = items
//             nuevoItems[index] = { item: nuevoItems[index].item, quantity: nuevoItems[index].quantity+quantity}
//             setItems(nuevoItems)
//         } else {
//             setItems([...items, { item, quantity }])
//         }
//     }

//     const removeItem = id => {
//         const index = items.findeIndex(itemInList => itemInList.item.id === id)
        
//         if(index !== -1) items.splice(index, 0)

//         setItems([...items])
//     }

//     const clear = () => setItems([])

//     return (
//         <CartContext.Provider value={{items, addItem, removeItem, clear}}>
//             { children }
//         </CartContext.Provider>
//     )
// }

// export default CartContext
import {createContext,useState} from "react"

export const CartContext = createContext()

const {Consumer,Provider} = CartContext

const CustomProvider = ({children}) => {

    const [carrito,setCarrito] = useState([])

    const [items, setItems] = useState([])
    
    const addItem = (item, quantity) => {
        const index = items.findIndex(itemInList => itemInList.item.id === item.id)
        
        if(index !== -1){
            const nuevoItems = items
            nuevoItems[index] = { item: nuevoItems[index].item, quantity: nuevoItems[index].quantity+quantity}
            setItems(nuevoItems)
        } else {
            setItems([...items, { item, quantity }])
        }
    }

    const removeItem = (itemId) => {
        console.log(itemId)
    }

    const clear = () => {
        console.log("Clear")
    }

    const isInCart = (id) => {}

    const contexto_para_consumir = {carrito,addItem,removeItem,clear}
    
    return (
        <Provider value={contexto_para_consumir}>
            {children}
        </Provider>
    )
}

export default CustomProvider