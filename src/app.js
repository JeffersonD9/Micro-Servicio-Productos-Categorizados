import express from "express";
import dotenv from 'dotenv'
import morgan from "morgan";
import { PORT, NODE_ENV } from "./config.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/RouteProducts.js"
import categoryRoutes from "./routes/RouteCategories.js"
import homeRoute from "./routes/RouteHome.js";
import categorizedProductRoutes from "./routes/RouteProductsCategorized.js"

dotenv.config()
const app = express();
app.use(cors());
app.use(morgan("dev"));

if (NODE_ENV === "production") {
  console.log = function () { };
}

app.set("port", PORT);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());

// Routes

app.use("/", homeRoute);
app.use("/api-REST", productRoutes);
app.use("/api-REST", categoryRoutes);
app.use('/api-REST', categorizedProductRoutes);

import jwt from 'jsonwebtoken';

const token2 = 'd5fFRR6oVx91DpdZpk2i-Token'; // reemplazá esto por el valor real o process.env.JWT_SECRET

const token = jwt.sign(
  {
    id: 1,
    role: 1, // admin
    userName: 'admin_test'
  },
  token2,
  { expiresIn: '1d' }
);

console.log('Token de prueba:', token);


export default app;
