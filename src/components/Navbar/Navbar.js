import {MenuList} from "./Menulist";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../../media/Performance-logo-sinfondo.png';
import Dropdown from "./Dropdown";

const Navbar = () => {
    const [dropdown, setDropdown] = useState(false);
    const [clicked, setClicked] = useState(false); //Establece el estado del elemento y lo actualiza en la función
    const menuList = MenuList.map( item => {
        if(item.title === "Iniciar Sesión"){
            return(
                <li key={item.id} className={item.cName} 
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}>
                    <NavLink 
                    to={item.url} 
                    className={(navData) => (navData.isActive ? "active" : 'none')}>
                        {item.title}
                    </NavLink>
                    {dropdown && <Dropdown/>}
                </li>
            );
        }
        return(
            <li key={item.id} className={item.cName}>
                <NavLink to={item.url} className={(navData) => (navData.isActive ? "active" : 'none')}>
                    {item.title}
                </NavLink>
            </li>
        );
    });
    const handleClick = () =>{ //Envía el estado del elemento
        setClicked(!clicked);
    }
    return(
        <nav>
            <div className="logo">
                <img src={logo}></img>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <ul className={clicked ? "menu-list" : "menu-list close"}>
                {menuList}
            </ul>
        </nav>
    )
};

export default Navbar;