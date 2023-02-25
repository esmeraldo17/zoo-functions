const data = require('../data/zoo_data');

const { species, hours } = data;
const week = Object.keys(hours);
const animais = species.map(({ name }) => name);
const monday = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

function searchAnimal(animal) {
  const search = species.find((specie) => animal.includes(specie.name)).availability;
  return search;
}

function listDay(dia) {
  const hour = hours[dia];
  const animals = species.filter(({ availability }) => availability
    .includes(dia)).map((e) => e.name);
  if (dia === 'Monday') {
    const mon = {
      [dia]: {
        officeHour: 'CLOSED', exhibition: 'The zoo will be closed!',
      },
    }; return mon;
  }
  const list = {
    [dia]: {
      officeHour: `Open from ${hour.open}am until ${hour.close}pm`,
      exhibition: animals,
    },
  };
  return list;
}

function getSchedule(scheduleTarget) {
  const newarray = week.map((e) => listDay(e));
  const newObj = Object.assign({}, ...newarray);
  if (animais.includes(scheduleTarget)) return searchAnimal(scheduleTarget);
  if (scheduleTarget === 'Monday') return monday;
  if (!scheduleTarget) return newObj;
  if (week.includes(scheduleTarget)) return listDay(scheduleTarget);
  return newObj;
}

module.exports = getSchedule;
