import express from "express";
import listEndpoints from "express-list-endpoints";
import cors from "cors";
import mongoose from "mongoose";
import {
  badRequestHandler,
  genericErrorHandler,
  notFoundHandler,
} from "./errorsHandlers.js";
import productsRouter from "./api/products/index.js";

const server = express();
const port = process.env.PORT || 3001;

// **************************************** MIDDLEWARES ************************************************
server.use(cors());
server.use(express.json());

// *************************************** ENDPOINTS ***************************************************
server.use("/products", productsRouter);

// ************************************ ERROR HANDLERS *************************************************
server.use(badRequestHandler);
server.use(notFoundHandler);
server.use(genericErrorHandler);

mongoose.connect(process.env.MONGO_CONNECTION_STRING);

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to Mongo!");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log(`Server is running on port ${port}`);
  });
});
