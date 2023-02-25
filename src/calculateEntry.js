const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18).length;
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const senior = entrants.filter((entrant) => entrant.age >= 50).length;
  const entrant = { child, adult, senior };

  return entrant;
}

function calculateEntry(entrants) {
  if (!entrants) { return 0; }
  if (Object.keys(entrants).length === 0) { return 0; }
  const number = countEntrants(entrants);
  const value = (number.child * 20.99) + (number.adult * 49.99) + (number.senior * 24.99);

  return value;
}

module.exports = { calculateEntry, countEntrants };
