import React from 'react'
import {Link} from 'react-router-dom'
import routes from '../config/routes';
import { logout } from '../api/auth';

import './Navbar.css';

export default function Navbar() {

    const logoutUser = () => {
        logout();
        window.location.reload();
    };

    // const { logout } = useAuth();   

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <Link to="/">
                        <img src = 'https://i.imgur.com/HFQebi6.png' width="250" alt="Logo"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <Link className = "nav-link" to = '/'>Inicio</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className = "nav-link  dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" to = {routes.login} >Ingresar</Link>
                            <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                            <li><Link className="dropdown-item" to = '/external/login'>Paciente</Link></li>
                            <li><Link className="dropdown-item" to = '/internal/login'>Empleado</Link></li>
                            <li><Link className="dropdown-item" to = '/admin/login'>Administrador</Link></li>
                        </ul>


                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to = '/about-us' >Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "nav-link" to = '/contact' >Contáctenos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className = "button btn btn-danger" onClick={logoutUser} to='/' >Cerrar sesión</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}