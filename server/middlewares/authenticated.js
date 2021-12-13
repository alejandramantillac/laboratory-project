const jwt = require('jwt-simple');
const moment = require('moment');

const SECRET_KEY = 'ismkSAGans8989dw98A8SDFsas8';

exports.ensureAuth = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(403).send({message: 'La petición no tiene la cabecera de autenticación'});
    }

    const token = req.headers.authorization.replace(/['"]+/g, '');

    try {
        var payload = jwt.decode(token, SECRET_KEY);
        
        if(payload.exp <= moment().unix()){
            return res.status(404).send({message: 'El token ha expirado'});
        }
    } catch (ex) {
        // console.log(ex);
        return res.status(404).send({message: 'El token no es válido'});
    }

    req.user = payload;
    next();
};