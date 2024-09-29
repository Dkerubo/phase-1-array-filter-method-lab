// returns all drivers that match the passed in name
// returns matching drivers if case does not match but letters do
// returns an empty array if there is no match
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
// returns a driver if beginning provided letters match
// does not return drivers if only middle or ending letters match
// does not return drivers if only middle or ending letters match
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
  }
// accesses the data structure to check if name matches
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
  