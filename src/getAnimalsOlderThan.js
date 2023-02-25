const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const getObjectByName = species.find(({ name }) => animal.includes(name));
  return getObjectByName.residents.every((ag) => ag.age >= age);
}

module.exports = getAnimalsOlderThan;
