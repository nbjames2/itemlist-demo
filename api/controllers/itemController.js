module.exports = {
  getAll: (req, res, next) => {
    console.log('Hit getAll function');
  },

  createItem: (req, res, next) => {
    console.log('Hit createItem function');
  },

  remove: (req, res, next) => {
    console.log('Hit remove function');
  },

  update: (req, res, next) => {
    console.log('Hit update function');
  }
};
