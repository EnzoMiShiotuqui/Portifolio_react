// SASS
import "./navbar_styles.scss"

// LINK
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
        <aside className="sidebar" id="sidebar">
        <nav className="nav">
            <div className="nav_logo">
                <NavLink to="/" className="nav_logo_text">S</NavLink>
            </div>

            <div className="nav_menu">
                <div className="menu">
                    <ul className="nav_list">
                        <li className="nav_item">
                            <NavLink to="/" className="nav_link" >Home</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/curriculum" className="nav_link" >Currículo</NavLink>
                        </li>
                        <li className="nav_item">
                            <NavLink to="/projetos" className="nav_link" >Projetos</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="btn_share">
                <NavLink to="/contato" style={{ color: "var(--skin-color)" }}>
                    <i className="uil uil-share-alt social_share"></i>
                </NavLink>
            </div>

            <div className="nav_close" id="nav_close">
                <i className="uil uil-times"></i>
            </div>
        </nav>
    </aside>
      </>
  )
}

export default Navbar
