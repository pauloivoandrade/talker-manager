const noName = (name) => {
  if (!name || name === '' || name === null) { return true; }
  return false;
};

const nameOK = (name) => {
  if (name.length >= 3 && typeof name === 'string') { return true; }
  return false;
};

const validName = (request, response, next) => {
  const { name } = request.body;
  try {
    if (noName(name)) {
      throw new Error('O campo "name" é obrigatório');
    }
    if (!nameOK(name)) {
      throw new Error('O "name" deve ter pelo menos 3 caracteres');
    }
  } catch (error) {
    return response.status(400).json({ message: error.message });
  }
  next();
};

module.exports = { validName };