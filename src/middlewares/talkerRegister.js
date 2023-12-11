const { getTalkers } = require('../functions/getFunctions');
const { writeTalker } = require('../functions/writeTalker');

const talkerRegister = async (request, response) => {
  const talkerRequest = request.body;
  const talkersDatabase = await getTalkers();

  const newId = { id: talkersDatabase.length + 1 };
  const newTalker = Object.assign(newId, talkerRequest);
  talkersDatabase.push(newTalker);

  await writeTalker(talkersDatabase);
  return response.status(201).json(newTalker).end();
};
    
module.exports = { talkerRegister };