import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
        default: 'Alguna descripcion correcta del producto!'
    },
    code: {
        type: Number,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    }
});

const productsModel = new mongoose.model('Products', productsSchema);

export default productsModel;