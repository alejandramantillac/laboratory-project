import React from 'react';
import {Link} from 'react-router-dom'
import { Card} from 'react-bootstrap'
import routes from '../../../../../config/routes';

const AccountOptionsTwo = () => {
    return (
        <div>
            <Card className = "mt-3 text-center mx-auto p-4">
                <Link className = "nav-link" to = "/internal-agenda">  <button type="button" className="btn btn-dark">Agendamientos</button> </Link>
                <Link className = "nav-link" to = "/internal-exam"> <button type="button" className="btn btn-dark">Exámenes</button> </Link>
                <Link className = "nav-link" to = "/internal-result" > <button type="button" className="btn btn-dark">Resultados</button> </Link>
            </Card>
        </div>
    )
}

export default AccountOptionsTwo;

