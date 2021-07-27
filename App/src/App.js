import NavBar from "./Components/NavBar"
import ItemCount from "./Components/ItemCount";
import ItemListContainer from "./Components/ItemListContainer";


    // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]

    // const [contador,setContador] = useState(0);

    // const sumarContador = () =>{
    //     console.log("hola mundo");

    // }
    
    const App = () => {
        // const usuarios = [{ nombre: "Fran" }, { nombre: "Fran2" }]
    
        return (
            <>
                {/* <Header test test2 nombre="Fran" edad={27} usuarios={usuarios}>
                    <p>Hola...</p>
                </Header> */}
                <NavBar/>
                <ItemListContainer mensaje = "ESTE ES EL GREETING"/>
                <ItemCount stock={5} initial={1}/>
                
                {/* <p>Contador actual: {contador}</p>                
                <button onClick = {sumarContador}>+</button> */}
            </>
            
        )
    }

   

export default App