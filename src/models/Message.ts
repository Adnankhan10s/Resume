import mongoose ,{Document} from "mongoose";

interface Message extends Document{
    
    firstname:string,
    lastname:string,
    email:string,
    phone:string,
    message:string
}

const messageSchema = new mongoose.Schema <Message>({

     firstname:{type:String , required:true,minlength:2},
     lastname:{type:String, required:true , minlength:2},
     email:{type:String , required:true },
     phone:{type:String , required:true},
     message:{type:String , required:true}
})
 const Message = mongoose.models.Message || mongoose.model<Message>("Message" , messageSchema);
 export default Message;