const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  source: {
    type: String
  },
  pubyear: {
    type: String
  },
  doi: {
    type: String
  },
  claim: {
    type: String
  },
  evidence: {
    type: String
  }
});

module.exports = Book = mongoose.model('article', ArticleSchema);