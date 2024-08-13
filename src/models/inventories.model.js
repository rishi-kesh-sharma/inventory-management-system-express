const mongoose = require("mongoose");

const inventorySchema = mongoose.Schema(
  {
    name: {
      type: "string",
      required: true,
    },
    quantity: {
      type: "string",
      default: 0,
    },
    category: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Inventory = mongoose.model("inventory", inventorySchema);
