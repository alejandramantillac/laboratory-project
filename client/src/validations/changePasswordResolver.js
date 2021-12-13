import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

const schema = yup.object().shape({
    password: yup
    .string('La contraseña debe ser segura')
    .required('Debes ingresar una contraseña válida')
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
}); 

export default yupResolver(schema);