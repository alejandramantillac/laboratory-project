import React from "react";
import { Link } from "react-router-dom";
import './Contact.css';

export default function Contact() {
    return (
        <div>
        <section id="contactenos">
            <div className="container">
                <h2 className="text-center mt-5">
                    <strong>Sedes</strong>
                </h2>

            <div className="row mt-5">
                <div className="col-sm-12 col-md-4 text-center">
                    <h3 className="mt-5">Cali</h3>
                    <br/>
                    <p>
                        <Link to="/">
                            <img src= 'https://i.imgur.com/sVJ1Cg9.png' alt="Cali" className="img-fluid" />
                        </Link>
                    </p>
                </div>

                <div className="col-sm-12 col-md-4 text-center">
                    <h3 className="mt-5">Bogotá</h3>
                    <br/>
                    <p>
                    <Link to="/">
                            <img src= 'https://i.imgur.com/5jR34Wu.png' alt="Bogotá" className="img-fluid" />
                    </Link>
                    </p>
                </div>

                <div className="col-sm-12 col-md-4 text-center">
                    <h3 className="mt-5">Medellín</h3>
                    <br/>
                    <p>
                    <Link to="/">
                            <img src= 'https://i.imgur.com/t5y3WGn.png' alt="Medellín" className="img-fluid" />
                    </Link>
                    </p>
                </div>
            </div>
    </div>
        
            <div className="container">
                <h2 className="text-center mt-5">
                    <strong>Líneas de atención</strong>
                </h2>
                    <p>
                    Líneas de atención:
                    <br/>
                    Bogotá (60+1) 3673000
                    <br/>
                    Cali (60+2) 3989352
                    <br/>
                    Medellín (60+4) 5908333
                    <br/>
                    Línea nacional de información general 018000918700
                    </p>
            </div>
            </section>           
            <footer className="footer">
            <p>@ Copyright 2021 Laboratorios Asinducom - Derechos reservados.</p>
            </footer>         
        </div>
    )
}
