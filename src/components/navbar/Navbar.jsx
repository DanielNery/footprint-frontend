import './Navbar.css';
import React from "react";

import Avatar from "../../assets/avatar.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faBars, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ sidebarOpen, closeSidebar, openSidebar  }) => {

    return (
        <nav>
            <div className="nav_icon" onClick={() => sidebarOpen ? closeSidebar() : openSidebar()}>
                <FontAwesomeIcon className="nav__icon" icon={faBars} />
            </div>

            <div className="navbar__left">
                <a href="/" className="active_link">Gráficos</a>
                <a href="/">Relatórios</a>
                <a href="/">Filtros</a>
            </div>

            <div className="navbar__right">
                <a href="/">
                    <FontAwesomeIcon className="nav__icon" icon={faSearch} />
                </a>

                <a href="/">
                    <FontAwesomeIcon className="nav__icon" icon={faClock} />
                </a>

                <a href="/">
                    <img src={ Avatar } alt="avatar" width="30"/>
                </a>
            </div>
        </nav>
    )

}

export default Navbar