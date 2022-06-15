require('dotenv').config();

const express = require("express");
const cors = require("cors");
const axios = require('axios');

// const upload = require('./config/multer');
const multer = require('multer');
const upload = multer({dest: './public/uploads'});

const mongoose = require("mongoose");
const FakePost = require("./models/FakePost")

const server = express();

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors());

const port = process.env.PORT;
const url = process.env.API_URL_1 + process.env.TOKEN + process.env.API_URL_2;

//SERVER ON
mongoose.connect(`mongodb+srv://jposava:${process.env.DB_PASSWORD}@cluster0.fbkeb.mongodb.net/previewfeed`)
    .then(() => {
        console.log(`MONGODB ONLINE`);
        server.listen(port, () => {
            console.log(`API ONLINE ON http://localhost:${port}`);
        })
    })
    .catch((err) => console.log(err));

//  ROTAS DA API //
//GET FEED
server.get('/', async (req, res) => {
    const data = await axios.get(url).then((res) => res.data)
    try {
        return res.status(200).send(data)
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});

// //CREATE FAKEPOSTS
// server.post('/fakepost', upload.single('file'), async (req, res) => {
//     if (req.file) {
//         const image = req.file.filename;
//         const date = new Date;
//         const fakepost = { image, date };
//         console.log(image)
//         try {
//             await FakePost.create(fakepost);
//             return res.status(201).send({ message: "Fake Post incluído com sucesso!" });
//         } catch (error) {
//             return res.status(500).send({ error: error });
//         }
//     }
//     return res.status(422).send({ message: "Invalide file type." });
// });
server.post('/fakepost', upload.single('file'), (req, res) => {
    const file = req.file;
    console.log(file)
    res.send("foi");
});

//GET FAKE POSTS
server.get('/fakeposts', async (req, res) => {
    try {
        const fakeposts = await FakePost.find();
        fakeposts.sort((a, b) => {
            if (a.date > b.date) {
                return -1;
            } else {
                return true
            }
        })
        return res.status(200).send(fakeposts);
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});

//DELETE FAKE POST
server.delete('/deletefakepost/:id', async (req, res) => {
    const id = req.params.id
    const fakepost = await FakePost.findOne({ _id: id });
    if (!fakepost) {
        return res.status(422).json({ message: "Post não encontrado para deletar!" });
    }
    try {
        await FakePost.deleteOne({ _id: id });
        return res.status(200).json({ message: "Deletado com sucesso!" });
    } catch (error) {
        return res.status(500).json({ error: error });
    }
});