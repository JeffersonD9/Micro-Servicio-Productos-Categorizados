// middlewares/verifyToken.js
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  try {
    // Obtener el token del encabezado Authorization
    const authHeader = req.headers.authorization;
    console.log(authHeader)
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ 
        message: 'Acceso denegado. Token no proporcionado o formato incorrecto' 
      });
    }
    
    // Extraer el token (quitar el prefijo "Bearer ")
    const token = authHeader.split(' ')[1];
    console.log(token)
    // Verificar el token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Agregar la información del usuario decodificada a la solicitud
    req.user = decoded;
    
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'El token ha expirado' });
    }
    
    return res.status(401).json({ message: 'Token inválido' });
  }
};