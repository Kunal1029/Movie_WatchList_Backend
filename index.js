const express = require("express");
const app = express();
const connectDB = require("./db");
const movieRouter = require("./Routes/movieRoutes");

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 2000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use("/api/movie", movieRouter);


// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
