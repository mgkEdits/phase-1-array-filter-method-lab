// // Code your solution here
// function fuzzyMatch(drivers, letters) {
//     return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
//   }

  
//   function findMatching(drivers, name) {
//     return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
//   }
  
//   function matchName(drivers, name) {
//     return drivers.filter(driver => driver.name === name);
//   }
  

function findMatching(drivers, driverName){
  return drivers.filter(names => names.toLowerCase() === driverName.toLowerCase());

}

function fuzzyMatch(drivers, driverName){
  return drivers.filter(names => names.toLowerCase().startsWith(driverName.toLowerCase()));
}
  
function matchName(drivers, driverName){
  return drivers.filter(names => names.name === driverName);
}
