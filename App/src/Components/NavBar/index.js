import CartWidget from "../CartWidget"

const NavBar = () =>
    <>
    {/* Nav de menu */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" >Smart</a>
                <div>
                    <a className="navbar-brand "><CartWidget />  Tienda</a>
                    <a className="navbar-brand" >Nosotros</a>
                    <a className="navbar-brand" >Contacto</a>
                </div>
            </div>
        </nav>
    </>

export default NavBar