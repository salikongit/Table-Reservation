import mongoose from "mongoose";

export const dbConnection = async () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "hotel",
    })
    .then(() => {
      console.log("connected to database succesfully");
    }).catch(err => {
      console.log(`some error occured while connecting to database!${err}`)
    })

};
