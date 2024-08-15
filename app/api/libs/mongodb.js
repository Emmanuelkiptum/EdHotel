
import mongoose from "mongoose";

const MongoDBConnect = () =>{
    try {
        mongoose.connect("mongodb+srv://kiptummeri:<password>@uchambuzi.q3djn.mongodb.net/?retryWrites=true&w=majority&appName=uchambuzi");
        console.log("Connected next to MongoDb Atlas");
    } catch (error) {
        console.log(error);
    }
}
export default MongoDBConnect ;