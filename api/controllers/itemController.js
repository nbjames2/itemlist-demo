const Item = require('../schema/item');

module.exports = {
  async getAll (req, res, next) {
    getAllItems(res);
  },

  async createItem (req, res, next) {
    const item = req.body.item;
    const newItem = new Item(item);
    await newItem.save();
    getAllItems(res);
  },

  async remove (req, res, next) {
    const itemId = req.params.itemId;
    await Item.findOneAndDelete({ _id: itemId });
    getAllItems(res);
  },

  async update (req, res, next) {
    const item = req.body.item;
    await Item.findOneAndUpdate({ _id: item._id }, { ...item });
    getAllItems(res);
  }
};

async function getAllItems (res) {
  const items = await Item.find();
  res.send({ success: true, itemList: items });
}
