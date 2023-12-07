const express = require('express');

const { getTalkers } = require('./functions/getFunctions');
const { idTalker } = require('./functions/idFilter');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = process.env.PORT || '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});

app.get('/talker', async (_request, response) => {
  const talkers = await getTalkers();
  return response.status(200).json(talkers);
}); 

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await getTalkers();
  const talkersIds = await idTalker(talkers, id);
  if (!talkersIds || talkers.length === 0) {
    return response.status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }
  return response.status(200).json(talkersIds);
});