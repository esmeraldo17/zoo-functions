const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const countObject = {};
  if (animal === undefined) {
    species.forEach((specie) => {
      countObject[specie.name] = specie.residents.length;
    });
    return countObject;
  }

  if (animal.sex === undefined) {
    const procura = species.find((specie) => specie.name === animal.specie);
    return procura.residents.length;
  }

  const search = species.find((specie) => specie.name === animal.specie);
  const sex = search.residents.filter((e) => e.sex === animal.sex);
  return sex.length;
}

module.exports = countAnimals;
