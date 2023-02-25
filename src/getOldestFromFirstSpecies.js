const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const colab = employees.find((employee) => employee.id === id);
  const respons = colab.responsibleFor[0];
  const spec = species.find((specie) => specie.id === respons);
  const resi = spec.residents;

  const old = resi.reduce((acc, curr) => {
    if (acc.age < curr.age) { return curr; }
    return acc;
  });
  return Object.values(old); // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
}

module.exports = getOldestFromFirstSpecies;
