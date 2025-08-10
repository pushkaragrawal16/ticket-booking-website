import mongoose from "mongoose";
const bookedseatSchema = new mongoose.Schema({
displayName:String,
email:String,
bookedseats:[Number] ,
movieId:String
});

const bookedseat = mongoose.model('bookedseat', bookedseatSchema);
export default bookedseat;