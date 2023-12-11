const { getTalkers } = require('../functions/getFunctions');

async function talkerSearch(request, response) {
  try {
    const { q } = request.query;
    const allTalkers = await getTalkers();
    console.log(allTalkers);
    console.log('Query Parameter:', q);
    const filtredTalkers = allTalkers.filter((talker) => talker.name.toLowerCase()
      .includes(q.toLowerCase()));
    console.log(filtredTalkers);
    return response.status(200).json(filtredTalkers); // Envia a confirmação
  } catch (error) {
    return response.status(400).json([]);
  }
}

module.exports = { talkerSearch };