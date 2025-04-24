
export const authorizeRoles = (...allowedRoles) => {
    return (req, res, next) => {
      // Verificar si el usuario existe en la solicitud (agregado por verifyToken)
      if (!req.user) {
        return res.status(401).json({ 
          message: 'No autenticado' 
        });
      }
      
      // Verificar si el rol del usuario está en la lista de roles permitidos
      if (!allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ 
          message: 'No tiene permiso para acceder a este recurso' 
        });
      }
      
      next();
    };
  };