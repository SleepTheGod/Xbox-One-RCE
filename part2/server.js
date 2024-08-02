const express = require('express');
const path = require('path');
const fs = require('fs'); // Required to read configuration files if needed
const app = express();
const port = 3000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle /data endpoint to dump configuration
app.get('/data', (req, res) => {
    // Simulate configuration data
    const configData = {
        database: {
            host: 'localhost',
            port: 5432,
            user: 'admin',
            password: 'password'
        },
        server: {
            port: 8080,
            environment: 'development'
        },
        security: {
            encryption: 'AES-256',
            apiKey: 'your-api-key-here'
        }
    };

    // Convert the config data to a JSON string
    const jsonData = JSON.stringify(configData, null, 2);

    // Send the JSON data as the response
    res.json(configData);
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
