import mongoose from "mongoose";

const MenuSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  descryption: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Menu = mongoose.models.Menu || mongoose.model("Menu", MenuSchema);

export default Menu;
