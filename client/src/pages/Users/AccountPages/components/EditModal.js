import { Modal, Alert, Button, Form } from 'react-bootstrap';
import useAuth from '../../../../auth/useAuth';
import { useForm } from 'react-hook-form';
import changePasswordResolver from '../../../../validations/changePasswordResolver';
import { useEffect } from 'react';
import EditAccountResolver from '../../../../validations/EditAccountResolver';

export default function EditModal({isOpen, close, user}) {

    const { register, handleSubmit, formState: { errors, dirtyFields }, reset } = useForm({ resolver: EditAccountResolver }); 
    const { updateUser } = useAuth();

    const isDirty = !!Object.keys(dirtyFields).length;
    const onSubmit = (formData) => {
        if(!isDirty) return;

        updateUser(formData);
        close();
    }

    useEffect(() => {
        if(!isOpen) {
            reset()
        }
    }, [isOpen, reset])

    useEffect(() => {
        if(user)reset({
            name: user.name,
            email: user.email
        });
    }, [user, reset]);

    console.log(register('password'));

    return (
        <Modal show = {isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Editar Cuenta</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit = {handleSubmit(onSubmit)}>
                    <Form.Group>
                        <Form.Label>Nombre: </Form.Label>
                        <Form.Control type="text" placeholder="Nombre"                {...register('name')}
                        />
                        {errors?.name && (
                            <Form.Text>
                            <Alert variant="danger">
                                {errors.name.message}
                            </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email: </Form.Label>
                        <Form.Control type="email" placeholder="Correo"                {...register('email')}
                        />
                        {errors?.email && (
                            <Form.Text>
                            <Alert variant="danger">
                                {errors.email.message}
                            </Alert>
                            </Form.Text>
                        )}
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {close}> Cancelar</Button>
                <Button variant="primary" onClick={handleSubmit(onSubmit)}
                disabled = {!isDirty}
                >Actualizar Datos</Button>
            </Modal.Footer>
        </Modal>
    )
}