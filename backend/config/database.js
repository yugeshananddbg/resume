import mongoose from "mongoose";
export const connectDatabase = () => {
  mongoose.connect(process.env.MONGO_URL).then((c) => {
      console.log(`Mongodb connnected to : ${c.connection.host}`)
  }).catch(e=>{
      console.log(`Error: ${e}`)
  });
};
