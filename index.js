const names = require("../country/state/city/index");
const getFirstNames = require("../utilities/utils/index");

module.exports = function getPeopleInCity(names) {
  return getFirstNames(names);
};
