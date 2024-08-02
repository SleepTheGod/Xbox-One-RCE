Add a package.json file: Create a package.json file to manage your project's dependencies. You can create it using the following command .

npm init -y

Then, install express if you prefer using it over the built-in http module for more flexibility.

npm install express

Replace the server.js code with the following if using express.

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname)));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});


Create index.html: Ensure your HTML file is named index.html and located in the same directory as server.js.

Now run your server with the following command.

node server.js
