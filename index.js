const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

app.get('/user/:name', async (req, res) => {
    const username = req.params.name;
    const url = `https://api.github.com/users/${username}`;

    try {
        const response = await axios.get(url);
        res.status(200).json(response.data);
    } catch (error) {
        res.status(error.response?.status || 500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
