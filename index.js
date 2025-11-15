const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
    res.send("Hello from Node API Server Updated");
});


mongoose.connect('mongodb://atlas-sql-68fe14bb728ae659d37dfb2d-11ibv4.a.query.mongodb.net/myVirtualDatabase?ssl=true&authSource=admin')
    .then(() => {
        console.log('✅ MongoDB connected successfully');

        app.listen(port, () => {
            console.log('Server Running on port ' + port);
        });
    })
    .catch(err => {
        console.error('❌ Connection error:', err);
    });