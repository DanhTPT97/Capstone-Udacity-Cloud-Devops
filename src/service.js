const fs = require('fs');

const path = './data/posts.json';

const Service = {
  list() {
    try {
      const response = fs.readFileSync(path);
      return JSON.parse(response);
    } catch (error) {
      console.log(error);
      throw new Error('Cannot load data');
    }
  },
};

module.exports = Service;
