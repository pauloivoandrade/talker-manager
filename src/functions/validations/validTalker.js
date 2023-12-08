const emptyTalk = (talk) => {
  if (!talk) {
    throw new Error('O campo "talk" é obrigatório');
  }
};

const emptyWatch = (talk) => {
  if (!talk.watchedAt) {
    throw new Error('O campo "watchedAt" é obrigatório');
  }
};

const validWatchedAt = (watchedAt) => {
  const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  if (!dateRegex.test(watchedAt)) {
    throw new Error('O campo "watchedAt" deve ter o formato "dd/mm/aaaa"');
  }
};

const rateNull = (rate) => rate === undefined || rate === null;
const rateValues = (rate) => typeof rate !== 'number' || rate <= 0 || rate > 5 || !Number
  .isInteger(rate);

const validRate = (rate) => {
  if (rateNull(rate)) {
    throw new Error('O campo "rate" é obrigatório');
  }
  if (rateValues(rate)) {
    throw new Error('O campo "rate" deve ser um número inteiro entre 1 e 5');
  }
};

const talkValidation = (request, response, next) => {
  const { talk } = request.body;
  try {
    emptyTalk(talk);
    emptyWatch(talk);
    validWatchedAt(talk.watchedAt);
    validRate(talk.rate);
    next();
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
};

module.exports = { talkValidation };
