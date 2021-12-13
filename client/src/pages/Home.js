import React from 'react';

import './Home.css';

export default function Home() {
    return (
        <div>
            <section id="inicio" className="text-center">
                <div className="jumbotron pb-5">
                    <h1 className="display-5"><strong>Laboratorios Asinducom</strong></h1>
                    <p className="lead">Consulta los resultados de tus exámenes médicos en pocos minutos</p>
                </div>
            </section>
            <footer className="footer">
            <p>@ Copyright 2021 Laboratorios Asinducom - Derechos reservados.</p>
            </footer>
        </div>
    )
}
