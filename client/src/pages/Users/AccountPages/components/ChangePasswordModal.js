import { Modal, Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../../auth/useAuth';
import { useForm } from 'react-hook-form';
import changePasswordResolver from '../../../../validations/changePasswordResolver';
import { useEffect } from 'react';

export default function ChangePasswordModal({isOpen, close}) {

    const { register, handleSubmit, formState: { errors}, reset } = useForm({ resolver: changePasswordResolver }); 


    const onSubmit = (formData) => {
        alert('Se cambió la contraseña exitosamente')

    }

    useEffect(() => {
        if(!isOpen) {
            reset()
        }
    }, [isOpen, reset])

    console.log(register('password'));

    return (
        <Modal show = {isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Cambiar contraseña</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nueva Contraseña: </Form.Label>
                        <Form.Control type="password" placeholder="Nueva Contraseña"                {...register('password')}
                        />
                        {errors?.password && (
                            <Form.Text>
                            <Alert variant="danger">
                                {errors.password.message}
                            </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {close}> Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}>Actualizar Contraseña</Button>
            </Modal.Footer>
        </Modal>
    )
}
