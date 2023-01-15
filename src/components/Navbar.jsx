
const NavBar = ({setSearch}) => {



    return ( 
        <>
            <nav className="navbar text-primary text-center">
                <div className="container-fluid">
                    <a className="navbar-brand">Buscador de Colaboradores</a>
                    <form
                        className="d-flex "
                        role="search"
                    >
                        <input
                            type="search"
                            onChange={(e) => setSearch(e.target.value)}
                            className="form-control me-2"
                            placeholder="Buscar un Colaborador"
                        />
                    </form>
                </div>
            </nav>
        </>
    );
}
 
export default NavBar;