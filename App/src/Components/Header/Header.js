import ItemListContainer from "../ItemListContainer";
import Button from 'react-bootstrap/Button';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import NavBar from "../NavBar/index";

 
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
            <Button className="m-5"variant="primary">Primary</Button>{' '}
        </header>

    )
}

export default Header
