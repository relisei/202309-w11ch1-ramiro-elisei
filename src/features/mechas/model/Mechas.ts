import mongoose from "mongoose";
import { type MechaApiStructure } from "../types";

const mechasSchema = new mongoose.Schema<MechaApiStructure>({
  name: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    required: true,
  },
  characteristics: {
    type: {
      speed: {
        type: String,
        required: true,
      },
      strength: {
        type: String,
        required: true,
      },
    },
    required: true,
  },
});

export default mongoose.model("Mechas", mechasSchema, "mechas");
