import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import AccountOptions from "../components/parts/AccountOptions";
import photo from '../../../../assets/img/svg/female_avatar.svg'

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
                    <p><b>Paciente</b></p>
                    </Card>
                </Col>
            </Row>
        </Container>
        <Container>	
            <AccountOptions />
        </Container>

        </>
    )
}
