import mongoose from "mongoose"
const Connection = async (username,password) => {
   const URL=`mongodb+srv://${username}:${password}@my-diary.t1fog6j.mongodb.net/My-Diary?retryWrites=true&w=majority`;
    try{
       await mongoose.connect(URL,{ useNewUrlParser:true});
        console.log("database coonected to mongodb successfully");
    }catch(error){
        console.log("error in connecting to database!!",error);
} 
} 
export default Connection;