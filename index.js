"use strict";

require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Home = require('./src/model/Home');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/public', express.static('public'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', ['GET', 'POST', 'PUT', 'DELETE']);
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// Connect to MongoDB
mongoose.set("strictQuery", true);

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MongoDB_URL);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Connection error:", error.message);
        process.exit(1);
    }
};

connectDB();

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/src/view/index.html');
});

app.post('/data', async (req, res) => {
    try {
        const { name, kinh, vido, doAm, doAm_1, luongMua, satLo, thoiGianMua, doNghieng } = req.body;
        const newData = new Home({ name, kinh, vido, doAm, doAm_1, luongMua, satLo, thoiGianMua, doNghieng });
        await newData.save();
        const totalEntries = await Home.countDocuments();
        res.json({ data: newData, total: totalEntries });
    } catch (error) { res.status(500).json({ message: error.message }); }
});

app.get('/data', async (req, res) => {
    try {
        const data = await Home.find();
        res.json(data);
    } catch (error) { res.status(500).json({ message: error.message }); }
});

app.get('/list', async (req, res) => {
    try {
        const data = await Home.find();
        const listNames = data.map(x => x.name);
        res.json(listNames);
    } catch (error) { res.status(500).json({ message: error.message }); }
});

app.put('/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Home.updateOne({ _id: id }, req.body);
        res.json(req.body);
    } catch (error) { res.status(500).json({ message: error.message }); }
});

app.delete('/data/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Home.deleteOne({ _id: id });
        const updatedData = await Home.find();
        res.json(updatedData);
    } catch (error) { res.status(500).json({ message: error.message }); }
});

app.listen(PORT, () => {
    console.log(`Server is running at http://127.0.0.1:${PORT}`);
});
