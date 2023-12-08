const noAge = (age) => {
  if (age === null || !age || age === '') { return true; }
  return false;
};

const validAge = (age) => (age >= 18);
const ageNumber = (age) => (age === 'number' || age % 1 === 0);
const ageValidation = (request, response, next) => {
  const { age } = request.body;
  try {
    if (noAge(age)) throw new Error('O campo "age" é obrigatório');
    if (!validAge(age) || !ageNumber(age)) {
      throw new Error(
        'O campo "age" deve ser um número inteiro igual ou maior que 18',
      ); 
    }
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { ageValidation };