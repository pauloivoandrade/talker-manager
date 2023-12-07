const fs = require('fs').promises;
const path = require('path');

const TALKER_API = path.resolve('src', 'talker.json');

async function getTalkers() {
  try {
    console.log(TALKER_API);
    const talkersData = await fs.readFile(TALKER_API, 'utf8');
    const data = JSON.parse(talkersData);
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

module.exports = { getTalkers, TALKER_API };
