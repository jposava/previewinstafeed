const mongoose = require('mongoose');

const FakePost = mongoose.model('FakePost', {
    image: String,
    date: Date
});

module.exports = FakePost