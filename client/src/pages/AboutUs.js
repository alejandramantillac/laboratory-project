import React from "react";
import { Link } from "react-router-dom";
import './AboutUs.css';

export default function AboutUs() {
    return (
        <div>
            <section id="nosotros">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <h2 className="nt-5">¿Quiénes somos?</h2>
                            <p>La empresa Laboratorios Asinducom provee servicios de exámenes especializados. En esta plataforma podrás verificar los resultados de los exámenes de laboratorio que te has practicado.</p>
                            <h2 className="nt-5">Misión</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam! Quaerat enim est fugit, dolor dignissimos nulla doloribus delectus voluptate, quam consequatur cupiditate et, at corrupti harum placeat? Dolorem, nihil!</p>
                            <h2>Visión</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, veniam! Quaerat enim est fugit, dolor dignissimos nulla doloribus delectus voluptate, quam consequatur cupiditate et, at corrupti harum placeat? Dolorem, nihil!</p>	
                        </div>
                            <div className="col-sm-12 col-md-6">
                                <Link to="/">
                                    <img src = 'https://i.imgur.com/UPUIL1x.jpeg' width="250" alt="Computador"/>
                                </Link>
                            </div>
                    </div>
                </div>
            </section>
            <br/>
            <br/>
            <br/>
            <br/>
            <footer className="footer">
            <p>@ Copyright 2021 Laboratorios Asinducom - Derechos reservados.</p>
            </footer>
        </div>
    )
}
