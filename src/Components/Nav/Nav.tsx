import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.svg";
import bars from "../../assets/images/bars.svg";
import close from "../../assets/images/close.svg";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Nav = () => {
    const [active, setActive] = useState(false)
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav_box">
                    <NavLink className="nav_logo" to="/">
                        <img src={logo} alt="" />
                    </NavLink>
                    <button className="nav_menu" onClick={() => setActive(true)}>
                        <img src={bars} alt="" />
                    </button>
                    <ul className={`nav_list ${active && 'active'}`} >
                        <button className="nav_close" onClick={() => setActive(false)}>
                            <img src={close} alt="" />
                        </button>
                        <li>
                            <NavLink className="nav_link" to={'/'}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link" to={'/movie'}>Фильмы</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link" to={'/tv'}>Сериалы</NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_link search" to={'/search'}>
                                <FaSearch />
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Nav