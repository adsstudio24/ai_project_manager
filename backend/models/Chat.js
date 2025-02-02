const mongoose = require('mongoose');
const ChatSchema = new mongoose.Schema({ message: String, sender: String });
module.exports = mongoose.model('Chat', ChatSchema);
