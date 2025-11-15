// index.js
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js"); // make sure folder is lowercase 'routes'

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

console.log(">>> Running INDEX.JS from:", __filename);
console.log("Router loading...");

// Routes
app.use("/api/products", productRoute);

// Root route
app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});

// MongoDB Atlas connection
const username = "sankeerth07";
const password = "password_123";
const cluster = "backend.ennaeof.mongodb.net";
const dbName = "crudAppDB";

const mongoURI = `mongodb+srv://${username}:${password}@${cluster}/${dbName}`;

mongoose.connect(mongoURI)
    .then(() => {
        console.log('✅ MongoDB connected successfully');

        // Start Express server after DB connection
        app.listen(port, () => {
            console.log(`🚀 Server Running on http://localhost:${port}`);
        });
    })
    .catch(err => {
        console.error('❌ MongoDB connection error:', err.message);
    });