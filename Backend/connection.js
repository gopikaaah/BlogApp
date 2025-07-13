const mongoose = require("mongoose");
//Write missing code here
const uri = "mongodb+srv://gopikabinishk:gopika@cluster0.mtvbl2u.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  });
