import mongoose from "mongoose";

type ConnectionObject={
    isConnected?:number
}

const connection :ConnectionObject={}


 async function dbConnect():Promise<void>{
            if (connection.isConnected) {
                console.log("DataBase Already Connected");
                return;
            }
        try {
            const db = await mongoose.connect(process.env.MONGODB_URl||"")
            connection.isConnected = db.connections[0].readyState
            console.log("MongoDB Connected Successfully");

        } catch (error) {
            console.log("MongoDB Connection Error", error);
            process.exit(1);
        }


}
export default dbConnect;