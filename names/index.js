let getFirstNames = require("../utilities/utils/index.js");

let listOfNames = require("../country/state/city/index.js");

let getPeopleInCity = (listOfNames) => getFirstNames(listOfNames);

module.exports = getPeopleInCity;
