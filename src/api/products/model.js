import mongoose from "mongoose";

import { Schema, model } from "mongoose";

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: false },

    //reviews: []
  },
  { timestamps: true }
);

export default model("Product", productsSchema);
