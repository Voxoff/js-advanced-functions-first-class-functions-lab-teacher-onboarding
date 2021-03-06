// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
}

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
  return quadruples = (fare) => {
    return int * fare;
  }
}
//
const fareDoubler = createFareMultiplier(2);
//
const fareTripler = createFareMultiplier(3);
//
const fetchSpecifiedDrivers = (drivers, fnc) => {
  return fnc(drivers);
}
