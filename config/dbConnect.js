const { default: mongoose } = require("mongoose")

const dbConnect = () => {
    try{
        const conn = mongoose.connect(process.env.MONGODB_URL);
        console.log('DataBase Connected Sucessfully');
    } catch (error) {
        console.log('DataBase Error')
    }
  };
  
  // Call the function to connect to MongoDB
  module.exports = dbConnect;