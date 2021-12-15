import React from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
// import { useLocation } from 'react-router';
// import useAuth from '../../../auth/useAuth';
import './LoginForm.scss';
import { Link } from 'react-router-dom';

// const userCredentials = {};

export default function LoginForm() {
    // const location = useLocation();
    // const { login } = useAuth();

        return (  
            <Container id="login-container">
                <Row>  
                    <Col>
                        <Row>
                            <h2>Iniciar Sesión</h2>
                        </Row>    
                        <Row>
                            <Col
                                sm="12"
                                xs="12"
                                md={{span: 4, offset: 4}}
                                lg={{span: 4, offset: 4}}
                                xl={{span: 4, offset: 4}}
                            >
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Correo Electrónico</Form.Label>
                                        <Form.Control type="email" placeholder="Email" 
                                            onChange={(e) => this.setState({correo: e.target.value})}
                                        />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Contraseña" 
                                            onChange={(e) => this.setState({contrasena: e.target.value})}
                                        />
                                    </Form.Group>
                                    <Link to = '/internal-profile'>
                                    <Button variant="secondary" type="submit"
                                        // onClick = {() => login(userCredentials, location.state?.from )}
                                    >
                                        Iniciar Sesión
                                    </Button>
                                    </Link> 
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }

