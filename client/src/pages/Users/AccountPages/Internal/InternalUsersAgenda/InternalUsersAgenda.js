import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtonAgendaOption from '../../components/parts/ButtonAgendaOption';

export default function InternalUsersAgenda() {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='mt-5 text-center'>
                        <ButtonAgendaOption />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}