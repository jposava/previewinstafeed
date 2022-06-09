require('dotenv').config();

const express = require("express");
const cors = require("cors");
const axios = require('axios');

const server = express();

server.use(express.json());
server.use(cors());

const port = 8080;
const part2url = "&fields=media_url,media_type,caption,permalink";
const url = `https://graph.instagram.com/me/media?access_token=${process.env.TOKEN + part2url}`;

//SERVER ON
server.listen(port, () => {
    console.log(`API ONLINE ON PORT ${port}`);
});

//GET FEED
server.get('/', async (req, res) => {
    const data = await axios.get(url).then((res) => res.data)
    return  res.status(200).send(data)
});


//mongodb+srv://jposava:<password>@cluster0.fbkeb.mongodb.net/?retryWrites=true&w=majority