// import NavBar from "./Components/NavBar";
import Header from "./Header";




const App =()=> {
    const usuarios=[{nombre: "Fran"}, {nombre: "Fran2"}]
    
        return(
            <header>
                {/* <title>Smart</title> */}
                <Header test test2 nombre="Fran" edad= {27} usuarios={usuarios}>
                    <p>Hola...</p>
                    </Header>  
                {/* <NavBar/> */}
            </header>
        )
    
}

export default App