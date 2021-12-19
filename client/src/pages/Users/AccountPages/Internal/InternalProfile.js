import React, { useState, useEffect } from "react";
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
                    <p><b>Empleado</b></p>
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
