const fs = require('fs');
const path = require('path');

const TALKER_API = path.resolve('src', 'talker.json');

async function getTalkers() {
  try {
    const talkersData = fs.readFileSync(TALKER_API, 'utf-8');
    const data = JSON.parse(talkersData);
    return data;
  } catch (error) {
    return [];
  }
}

module.exports = { getTalkers, TALKER_API };
