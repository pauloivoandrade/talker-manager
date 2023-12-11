const { getTalkers } = require('../functions/getFunctions');
const { writeTalker } = require('../functions/writeTalker');

async function talkerDelete(request, response) {
  try {
    const getId = request.params.id;
    const dataBase = await getTalkers();

    const filteredId = dataBase.find((talker) => talker.id !== Number(getId));

    const newDatabase = JSON.stringify(filteredId); // Converte em json
    await writeTalker(newDatabase); // Grava os dados no arquivo
    return response.status(204)
      .json({ message: 'Pessoa palestrante deletada com sucesso' }).end(); // Envia a confirmação
  } catch (error) { return response.status(400).json({ message: error.message }); }
}

module.exports = { talkerDelete };