import { Link } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar">
        <a className="navbar__presentation" href="#menu">Presentación</a>
        <Link className="navbar__explorar" to="/categorias">Explorar</Link>
    </nav>
  )
}
