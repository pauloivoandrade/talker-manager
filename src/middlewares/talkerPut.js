const { getTalkers } = require('../functions/getFunctions');
const { writeTalker } = require('../functions/writeTalker');

async function talkerPut(request, response) {
  const updatedData = request.body;
  const getId = request.params.id;
  console.log(getId);
  updatedData.id = Number(getId);
  const dataBase = await getTalkers();
  console.log(typeof dataBase);
  const filteredId = dataBase.find((talker) => talker.id === Number(getId));
  if (!filteredId) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  console.log(filteredId);
  const allTalkers = dataBase.filter((talker) => talker.id !== Number(getId));
    
  const newDatabase = [...allTalkers, updatedData];

  await writeTalker(newDatabase);

  return response.status(200).json(updatedData); 
}
module.exports = { talkerPut };