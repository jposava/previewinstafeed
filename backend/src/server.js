const express = require("express");
const cors = require("cors");
const axios = require('axios');

const server = express();

server.use(express.json());
server.use(cors());

const port = 8080;
const token = "IGQVJYTEx4cVdNNVJ5SnNNQ2RjdTB5TzRzQWI4OWxOd3NxeWxDVVo0S3AwcW1yaTctSGYzZAk5zSEl1MkRIS1pIelZA1SzlZAVlNzWVd6Y1dJa3c0S2ZACZAGZAOTktMNTZAUeUxGNkhmakUwVmNyaERfTEJjNQZDZD";
const part2url = "&fields=media_url,media_type,caption,permalink";
const url = `https://graph.instagram.com/me/media?access_token=${token + part2url}`;

//SERVER ON
server.listen(port, () => {
    console.log(`API ONLINE ON PORT ${port}`);
});

//GET FEED
server.get('/', async (req, res) => {
    const data = await axios.get(url).then((res) => res.data)
    return  res.status(200).send(data)
});