const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

const clientDir = path.join(__dirname, 'client/build');

// Use static resources from /build directory
app.use(express.static(clientDir));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
