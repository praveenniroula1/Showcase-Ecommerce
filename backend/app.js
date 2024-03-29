import express from "express";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

// importing routes
import product from "./routes/productRoutes.js";
import user from "./routes/userRoutes.js";
import order from "./routes/orderRoutes.js";
import payment from "./routes/paymentRoutes.js";
app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

export default app;
