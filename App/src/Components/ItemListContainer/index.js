import { useState } from "react";
import Item from "../Item";
import ItemList from "../ItemList";



const ItemListContainer = ( {algo} ) => {
    console.log(algo);
    return (
        <header>
            <div className="m-5 col-11 ">{algo}<br></br><br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </div>
            <ol>
                <ItemList />
            </ol>
        </header>
    )
}

export default ItemListContainer


