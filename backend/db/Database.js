// const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose.connect(process.env.DB_URL).then((data) => {
//     console.log(`mongodb connected with server: ${data.connection.host}`);
//   });
// };

// module.exports = connectDatabase;

const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`✅ MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    throw error; // don't silently crash
  }
};

module.exports = connectDatabase;
