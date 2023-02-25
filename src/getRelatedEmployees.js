const data = require('../data/zoo_data');


const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((e) => e.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const manegedList = employees.filter(({ managers }) => managers.includes(managerId));
    const people = manegedList.map((mp) => `${mp.firstName} ${mp.lastName}`);

    return people;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
