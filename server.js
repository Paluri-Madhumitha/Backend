const express = require("express"); // Import Express framework
const bodyParser = require("body-parser"); // Import body-parser to parse incoming request bodies
const cors = require("cors"); // Import CORS to handle Cross-Origin Resource Sharing

const app = express(); // Initialize Express app

// -----ENV Setup----- //
require("dotenv").config(); // Load environment variables from a .env file into process.env

// Debugging logs to check if environment variables are loaded

const PORT = process.env.PORT || 4000; // Define the port number for the server to run on
const routes = require("./routes"); // Import custom route handlers from the 'routes' directory

// -----Middleware----- //
app.use(cors()); // Enable CORS for all routes, allowing requests from different origins
app.use(bodyParser.json()); // Parse incoming request bodies in JSON format

// -----Routes----- //
// Define route handlers for different API endpoints

// Campaign-related routes handled by routes.campaign
app.use("/api/campaign", routes.campaign); 

// User-related routes handled by routes.user
app.use("/api/user", routes.user); 

// Payment-related routes handled by routes.payment
app.use("/api/donate", routes.payment); 

// Donation history or records handled by routes.donation
app.use("/api/donation", routes.donation); 

// Queries or contact form submissions handled by routes.query
app.use("/api/query", routes.query); 

// Catch-all route for undefined endpoints (handles 404 errors)
app.get("*", function (req, res) {
  res.status(404).send("404 Error"); // Send a simple 404 error message for unmatched routes
});

// Start the server and listen on the defined port
app.listen(PORT, function () {
  console.log(`Server running successfully on port ${PORT}`); // Log a success message when the server starts
});