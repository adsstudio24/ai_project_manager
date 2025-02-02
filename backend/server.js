const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

mongoose.connect('mongodb://localhost:27017/project_manager', { useNewUrlParser: true, useUnifiedTopology: true });

const Task = mongoose.model('Task', new mongoose.Schema({ title: String, completed: Boolean }));
const Chat = mongoose.model('Chat', new mongoose.Schema({ message: String, sender: String }));

const app = express();
app.use(cors());
app.use(express.json());

app.post('/task', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json({ message: 'Завдання додано!' });
});

app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

app.post('/chat', async (req, res) => {
    const chat = new Chat(req.body);
    await chat.save();
    res.json({ message: 'Повідомлення надіслано!' });
});

app.get('/chat', async (req, res) => {
    const chats = await Chat.find();
    res.json(chats);
});

app.listen(5000, () => console.log('Сервер AI-менеджера запущено на порту 5000'));
