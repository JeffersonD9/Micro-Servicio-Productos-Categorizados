# 🛒 API REST - Productos & Categorías

Esta API REST permite gestionar productos y categorías para una aplicación de comercio electrónico o inventario.

## 🚀 Tecnologías

- Node.js
- AWS - RDS AND EC2
- Express
- Mysql
- CORS
- Morgan
- Cookie Parser
- Dotenv
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

## ⚙️ Configuración

1. Clonar el repositorio
   
   ```bash
   git clone https://github.com/JeffersonD9/Micro-Servicio-Productos-Categorizados.git
   
3. Instalar npm:

   ```bash
   npm install
   
4.  Instalar dependiencias necesarias para su uso:
   
     ```bash
      npm install prisma mysql dotenv cookie-parser cors express
