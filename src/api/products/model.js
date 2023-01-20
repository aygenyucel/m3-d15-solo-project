import mongoose from "mongoose";

import { Schema, model } from "mongoose";

const reviewsSchema = new Schema(
  {
    comment: { type: String, required: true },
    rate: { type: Number, min: 1, max: 5, required: true },
  },
  { timestamps: true }
);

const productsSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    imageUrl: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: false },

    reviews: [reviewsSchema],
  },
  { timestamps: true }
);

export default model("Product", productsSchema);
