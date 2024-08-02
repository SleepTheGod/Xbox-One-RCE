# Xbox One RCE

```⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩⬜⬜⬜
⬜⬜🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩⬜⬜
⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜
⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜
⬜🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩⬜
⬜🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩⬜
🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩
🟩🟩🟩🟩🟩⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜🟩🟩🟩🟩🟩
🟩🟩🟩🟩⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜🟩🟩🟩🟩
⬜🟩🟩🟩⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜🟩🟩🟩⬜
⬜🟩🟩⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜🟩🟩⬜
⬜🟩🟩⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜🟩🟩⬜
⬜⬜🟩⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜🟩⬜⬜
⬜⬜🟩⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜🟩⬜⬜
⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜
⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜
⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜🟩🟩🟩🟩🟩⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜```


This repository contains a simple Node.js server setup for debugging your Xbox One via the Edge browser on the console.

## Setup Instructions

### 1. Create `package.json`

Create a `package.json` file to manage your project's dependencies. You can create it using the following command:

```bash
npm init -y
```

Install Express
Install Express to use it over the built-in http module for more flexibility

```
npm install express
```
 Create server.js

```
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

```

Create index.html
Ensure your HTML file is named index.html and located in the same directory as server.js.

Run Your Server
Start your server with the following command

```
node server.js
```

Access via Edge Browser
Open the Edge browser on your Xbox One and navigate to http://<your_computer_ip>:3000. You should be able to view and debug your HTML file.

And now you are Done Enjoy Gamers Subscribe to me on youtube https://youtube.com/Stripped!
