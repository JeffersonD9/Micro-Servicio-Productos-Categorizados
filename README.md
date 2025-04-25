# 🛒 API REST - Productos & Categorías

Esta API REST permite gestionar productos y categorías para una aplicación de comercio electrónico o inventario.

## 🚀 Tecnologías
- Node.js
- Express
- MySQL
- CORS
- Morgan
- Cookie Parser
- Dotenv
- Prisma (ORM)
- AWS - EC2
- AWS - RDS
---

## ☁️ Configuración Original en AWS

Este microservicio fue originalmente implementado en AWS con la siguiente configuración:

### Infraestructura utilizada
- **Amazon EC2**: Servidor que aloja el microservicio Node.js
- **Amazon RDS**: Base de datos MySQL para almacenar productos y categorías

### Arquitectura de red
- La instancia EC2 y la base de datos RDS están configuradas en la misma VPC para permitir comunicación interna segura
- Esta configuración elimina la necesidad de exponer la base de datos a través de IP públicas
- La comunicación entre los servicios se realiza exclusivamente a través de la red interna de AWS

### Flujo de comunicación
```
Aplicación cliente → API (EC2) → Base de datos (RDS)
```

La API desplegada en la instancia EC2 actúa como intermediario entre la aplicación cliente y la base de datos RDS, permitiendo un enfoque más seguro al mantener la base de datos aislada de acceso directo.

> **Nota importante**: Esta configuración es simplemente una referencia de la implementación original. El microservicio puede ser desplegado en cualquier entorno de su preferencia (otros proveedores cloud, servidores on-premise, plataformas de hosting, etc.) según las necesidades y recursos disponibles.

---

## 📦 Endpoints

### 🔹 Productos
| Método | Ruta | Descripción | Permisos |
| ------ | ---- | ----------- | -------- |
| GET | `/api/products` | Obtener todos los productos | Admin, Vendedor |
| GET | `/api/products/:id_product` | Obtener un producto por ID | Admin, Vendedor |
| POST | `/api/products` | Crear un nuevo producto | Admin |
| PUT | `/api/products/:id_product` | Actualizar un producto | Admin |
| DELETE | `/api/products/:id_product` | Eliminar un producto | Admin |

### 🔸 Categorías
| Método | Ruta | Descripción | Permisos |
| ------ | ---- | ----------- | -------- |
| GET | `/api/categories` | Obtener todas las categorías | Admin, Vendedor |
| GET | `/api/categories/:id_category` | Obtener categoría por ID | Admin, Vendedor |
| POST | `/api/categories` | Crear una nueva categoría | Admin |
| PUT | `/api/categories/:id_category` | Actualizar una categoría | Admin |
| DELETE | `/api/categories/:id_category` | Eliminar una categoría | Admin |

### 🔹🔸 Productos Categorizados
| Método | Ruta | Descripción | Permisos |
| ------ | ---- | ----------- | -------- |
| GET | `/api/categorized-products` | Obtener productos categorizados | Admin, Vendedor |
| GET | `/api/categories/:categoryId/products` | Obtener productos por categoría | Admin, Vendedor |

## ⚙️ Configuración Local

1. Clonar el repositorio
   
   ```bash
   git clone https://github.com/JeffersonD9/Micro-Servicio-Productos-Categorizados.git
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Dependencias necesarias :
    ```bash
    npm install prisma mysql dotenv cookie-parser cors express
    ```
   
5. Configurar variables de entorno:
   - Crear archivo `.env` en la raíz del proyecto con las siguientes variables:
   ```
   DATABASE_URL="mysql://usuario:contraseña@localhost:3306/nombre_db"
   PORT=3000
   ```

6. Iniciar el servidor:
   ```bash
   npm start
   ```

## 🔧 Opciones de Despliegue

### Despliegue en AWS (Configuración Original)
Puede seguir un enfoque similar al original utilizando AWS:
1. Provisionar una instancia EC2 para el servidor
2. Configurar una base de datos RDS MySQL 
3. Asegurar que ambos servicios estén en la misma VPC
4. Configurar grupos de seguridad para permitir la comunicación entre los servicios

### Despliegues Alternativos
Este microservicio puede ser desplegado en diversos entornos según sus preferencias:
- Otros proveedores cloud (Google Cloud, Azure, etc.)
- Servidores on-premise
- Plataformas de contenedores (Docker, Kubernetes)
- Plataformas de hosting (Heroku, Digital Ocean, Vercel, etc.)

Lo importante es mantener una adecuada separación entre la capa de aplicación y la base de datos para garantizar seguridad y escalabilidad.

---

## 👤 Autor
Jefferson Steven Muñoz Delgado.

##  Redes Sociales
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jefferson-steven-mu%C3%B1oz-delgado-a096b1231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/jeff_mdelgado/)
