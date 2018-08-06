// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value}) ;

}

function destructivelyUpdateDriverWIthKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
  
}
