import mongoose from 'mongoose';


const productschema= new mongoose.Schema({
    id:{
        type: String,
        required: true,
        unique: true
    },
    url: String,
    detailUrl: String,
    title: String,
    price: Object,
    quantity: Number,
    description: String,
    discount: String,
    tagline: Object

})

const Product = mongoose.model('product', productschema);
export default Product;