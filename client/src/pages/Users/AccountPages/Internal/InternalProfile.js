import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import AccountOptionsTwo from "../components/parts/AccountOptionsTwo";
import photo from '../../../../assets/img/svg/male_avatar.svg'

export default function Profile() {


    return (
        <>
        <Container>
            <Row className="mt-4">
                <Col xs={12} className="text-center">
                    <img
                    src={photo}
                    alt="profile"
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        objectFit: 'cover'

                    }}
                    />
                </Col>
                <Col className = 'mt-4'>
                    <Card className='text-center mx-auto p-4' style = {{maxWidth: '360px'}}> 

                        <Button variant="warning" className="mt-3">
                            Editar Perfil
                        </Button>
                        <Button variant="link" className="mt-1" style = {{textDecoration: 'none'}}>
                            Cambiar Contraseña
                        </Button>
                        <Button variant="link" className="mt-3 text-danger" style = {{textDecoration: 'none'}}
                        >
                            Eliminar Cuenta
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>	
            <AccountOptionsTwo />
        </Container>

        </>
    )
}
