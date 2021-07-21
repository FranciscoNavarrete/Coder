import ItemListContainer from "./Components/ItemListContainer";
import NavBar from "./Components/NavBar"
 
//aca se destructura
const Header = ({nombre,edad,usuarios})=>{

    //declaro las variable de la propiedad
    //destructuring
    // const {nombre,edad} = prop;

    console.log(nombre);
    console.log(edad);
    console.log(usuarios);

    return (
        <header>
            <title>Smart</title>
            {/* <h1>TItulo</h1> */}
            <NavBar/>
            <ItemListContainer mensaje = "ACA VA EL MENSAJE POR PROP "/>
        </header>

    )
}

export default Header
