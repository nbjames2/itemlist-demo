module.exports = {
  createUser: (req, res, next) => {
    console.log('Hit createUser function');
  },

  login: (req, res, next) => {
    console.log('Hit login function');
  },

  getUser: (req, res, next) => {
    console.log('Hit getUser function');
  }
};
