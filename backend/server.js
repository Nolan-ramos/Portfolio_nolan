const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/api/message', (req, res) => {
    const { message } = req.body;
    console.log('Received message from client:', message);
    res.send('Message received on the server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
