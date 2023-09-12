import { products } from "./Constants/Data.js";
import Product from "./Model/product-schema.js";

const DefaultData = async () => {
    try {
        await Product.deleteMany({});
        await Product.insertMany(products);
        console.log("Default data inserted successsfully");
    }
    catch(error){
        console.log("Error while inserting default data is", error.message);
    }
}

export default DefaultData;