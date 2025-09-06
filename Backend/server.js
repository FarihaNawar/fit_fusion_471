require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoutes = require('./routes/UserRoutes');
// const progressRoutes = require('./routes/ProgressRoutes');
const productRoutes = require('./routes/ProductRoutes');
const recipeRoutes = require('./routes/RecipeRoutes');
const yogaRoutes = require('./routes/YogaRoutes');

const app = express();
const PORT = process.env.PORT || 3500;
const mongoString = process.env.MONGO_URI;
const dbName = process.env.MONGO_DB_NAME || 'fit_fusion';

// ✅ Debugging log
console.log("Loaded MONGO_URI:", mongoString);
console.log("Using Database:", dbName);

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(mongoString, {
    dbName,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("✅ Database connected successfully"))
    .catch((err) => {
        console.error("❌ Database connection error:", err.message);
        console.error("Full error:", err);
        process.exit(1);
    });

// Route Registration with Debugging Logs
console.log(" Registering user routes at /api/users");
app.use('/api/users', userRoutes);

// console.log(" Registering progress routes at /api/progress");
// app.use('/api/progress', progressRoutes);
console.log(" Registering product routes at /api/products");
app.use('/api/products', productRoutes);
console.log(" Registering recipe routes at /api/recipes");
app.use('/api/recipes', recipeRoutes);
console.log(" Registering yoga routes at /api/yoga");
app.use('/api/yoga', yogaRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(" Error Middleware - Error Stack:", err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    console.warn(`404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
