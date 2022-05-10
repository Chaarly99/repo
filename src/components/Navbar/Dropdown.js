import { useState } from "react";
import { Link } from "react-router-dom";
import { serviceDropdown } from "./Menulist";
import "./Dropdown.css";

const Dropdown = () => {
    const [dropdown, setDropdown] = useState(false);
    return (
        <ul className={dropdown ? "services-submenu clicked" : "services-submenu"}
            onClick={() => setDropdown(!dropdown)}
        >
            {serviceDropdown.map(item => (
                <li key={item.id}>
                    <Link to={item.url} onClick={() => setDropdown(false)}>
                        {item.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
};
   
   export default Dropdown;
   