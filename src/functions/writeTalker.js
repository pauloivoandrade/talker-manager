const fs = require('fs').promises;
const { TALKER_API } = require('./getFunctions');

const writeTalker = async (newDatabase) => {
  try {
    await fs.writeFile(TALKER_API, newDatabase);
  } catch (error) {
    return ({ message: error.message });
  }
};

module.exports = { writeTalker };