const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema(
  {
    title: { type: String, required: [true, 'Missing item name'] },
    likelihood: { type: Number, enum: [1, 2, 3], default: 1 },
    risk: { type: Number, enum: [1, 2, 3], default: 1 },
    impact: { type: Number, enum: [1, 2, 3], default: 1 },
    description: { type: String, required: [true, 'Missing item description'] }
  }
);

module.exports = mongoose.model('Item', itemSchema);
