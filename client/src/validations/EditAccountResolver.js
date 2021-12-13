import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    name: yup
        .string('El nombre debe ser un texto')
        .required('Se requiere un nombre'),
    email: yup
        .string('El email debe ser un texto')
        .email('El email debe ser válido')
        .required('Se requiere un email'),
}); 

export default yupResolver(schema);