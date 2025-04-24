import express from "express";
import morgan from "morgan";
import { PORT, NODE_ENV } from "./config/config.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import productRoutes from "./routes/RouteProducts.js"
import categoryRoutes from "./routes/RouteCategories.js"
import homeRoute from "./routes/RouteHome.js";
import categorizedProductRoutes from "./routes/RouteProductsCategorized.js"

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
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use('/api', categorizedProductRoutes);

export default app;