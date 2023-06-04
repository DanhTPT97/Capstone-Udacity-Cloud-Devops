const Service = require('./service');

const Controller = {
  async getPosts(req, res, next) {
    try {
      const posts = await Service.list();
      return res.status(200).json(posts);
    } catch (error) {
      return next(error);
    }
  },
};

module.exports = Controller;
