import React from 'react';
import {Link} from 'react-router-dom'
import { Card} from 'react-bootstrap'
import routes from '../../../../../config/routes';

const AccountOptions = () => {
    return (
        <div>
            <Card className = "mt-3 text-center mx-auto p-4">
                <Link className = "nav-link" to = "/agenda" >  <button type="button" className="btn btn-dark">Agendamientos</button> </Link>
                <Link className = "nav-link" to = "/result" > <button type="button" className="btn btn-dark">Resultados</button> </Link>
                <Link className = "nav-link" to = "/notification" > <button type="button" className="btn btn-dark">Notificaciones</button> </Link>
            </Card>
        </div>
    )
}

export default AccountOptions

