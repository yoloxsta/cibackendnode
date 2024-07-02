const express = require('express');
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors());

app.get('/message', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.listen(port, () => {
    console.log(`Server running at 0.0.0.0:${port}`);
});
