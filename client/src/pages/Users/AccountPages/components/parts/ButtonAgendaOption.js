import React from 'react';
import {Link} from 'react-router-dom'

const ButtonAgendaOption = () => {
    return (
        <div className='mt-5'>
            <Link to='#'><button type="button" class="btn btn-primary">Agregar Agenda</button>
            </Link>
        </div>
    )
}

export default ButtonAgendaOption;
