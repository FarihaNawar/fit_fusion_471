require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');
const userRoutes = require('./routes/UserRoutes');
const progressRoutes = require('./routes/ProgressRoutes');

const PORT = process.env.PORT || 3500;
const mongoString = `mongodb+srv://farihanawar:Arpa1234@cluster0.ok8fzeo.mongodb.net`;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect(mongoString)
    .then(() => console.log(" Database connected successfully"))
    .catch((err) => {
        console.error(" Database connection error:", err);
        process.exit(1);
    });

// Route Registration with Debugging Logs
console.log(" Registering user routes at /api/users");
app.use('/api/users', userRoutes);

console.log(" Registering progress routes at /api/progress");
app.use('/api/progress', progressRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(" Error Middleware - Error Stack:", err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

// 404 handler with enhanced logging
app.use((req, res) => {
    console.warn(`404 - Route not found: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: `Route not found: ${req.originalUrl}` });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
