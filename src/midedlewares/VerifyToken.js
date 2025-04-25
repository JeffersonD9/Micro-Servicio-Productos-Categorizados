import jwt from 'jsonwebtoken';
import { SECRET_TOKEN } from '../config.js'; // Asegúrate de importar la constante

export const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'Acceso denegado. Token no proporcionado o formato incorrecto' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, SECRET_TOKEN); 

    req.user = decoded;
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'El token ha expirado' });
    }
    return res.status(401).json({ message: 'Token inválido' });
  }
};
