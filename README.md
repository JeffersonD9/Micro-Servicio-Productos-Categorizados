# 🛒 API REST - Productos & Categorías

Esta API REST permite gestionar productos y categorías para una aplicación de comercio electrónico o inventario.

## 🚀 Tecnologías

- Node.js
- Express
- MongoDB / Mongoose (o el ORM que uses)
- CORS
- Morgan
- Cookie Parser

---

## 📦 Endpoints

### 🔹 Productos

| Método | Ruta                  | Descripción                  |
|--------|-----------------------|------------------------------|
| GET    | `/api/products`       | Obtener todos los productos |
| GET    | `/api/products/:id`   | Obtener un producto por ID  |
| POST   | `/api/products`       | Crear un nuevo producto     |
| PUT    | `/api/products/:id`   | Actualizar un producto      |
| DELETE | `/api/products/:id`   | Eliminar un producto        |

---

### 🔸 Categorías

| Método | Ruta                   | Descripción                    |
|--------|------------------------|--------------------------------|
| GET    | `/api/categories`      | Obtener todas las categorías  |
| POST   | `/api/categories`      | Crear una nueva categoría     |
| DELETE | `/api/categories/:id`  | Eliminar una categoría        |

---

## ⚙️ Configuración

1. Clonar el repositorio
2. Instalar dependencias:

   ```bash
   npm install
