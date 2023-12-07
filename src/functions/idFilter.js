async function idTalker(apiArray, talkerId) {
  try {
    const filteredId = apiArray.find((talker) => talker.id === parseInt(talkerId, 10));
    return filteredId;
  } catch (error) { return ({ message: error }); }
}

module.exports = { idTalker };