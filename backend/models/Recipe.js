const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: [{
    type: String,
    required: true,
  }],
  instructions: {
    type: String,
    required: true,
  },
  prepTime: {
    type: Number, // in minutes
  },
  cookTime: {
    type: Number, // in minutes
  },
  servings: {
    type: Number,
  },
  image: {
    type: String, // URL to image
  },
}, {
  timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);