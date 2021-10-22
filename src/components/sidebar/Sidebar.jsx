import React from "react";
import Logo from '../../assets/logo.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faHistory, faBook, faSortNumericUpAlt, faMagic, faUser, faSignOutAlt, faAtom } from '@fortawesome/free-solid-svg-icons'

import './Sidebar.css'

const Sidebar = ({ sidebarOpen }) => {
    return (
        <div className={sidebarOpen ? "sidebar__responsive" : "sidebar__hide"} id="sidebar">
            
            <div className="sidebar__title">

                <div className="sidebar__img">
                    <img src={ Logo } alt="Logo" />
                    <h1>Footprint</h1>
                </div>

            </div>


            <div className="sidebar__menu">

                <div className="sidebar__link active_menu_link">
                    <FontAwesomeIcon icon={faAtom} className="sidebar__icon" />
                    <a href="/" >Início</a>
                </div>

                <h2>Paciente</h2>

                    {/* Separar em um componente */}
                    
                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faChartLine} className="sidebar__icon" />
                        <a href="/">Monitoramento</a>
                    </div>

                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faHistory} className="sidebar__icon" />
                        <a href="/">Histórico</a>
                    </div>

                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faBook} className="sidebar__icon" />
                        <a href="/">Sobre</a>
                    </div>

                <h2>Configurações</h2>

                    {/* Separar em um componente */}
                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faSortNumericUpAlt} className="sidebar__icon" />
                        <a href="/">Unidades</a>
                    </div>

                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faMagic} className="sidebar__icon" />
                        <a href="/">Cores</a>
                    </div>

                    <div className="sidebar__link">
                        <FontAwesomeIcon icon={faUser} className="sidebar__icon" />
                        <a href="/">Usuários</a>
                    </div>

                    <div className="sidebar__logout">
                        <FontAwesomeIcon icon={faSignOutAlt} className="sidebar__icon" />
                        <a href="/">Sair</a>
                    </div>

            </div>
        </div>
    )
}

export default Sidebar;