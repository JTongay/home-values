const fs = require('fs');

const formatTxt = (txtFile)=>{
  let inputData = fs.readFileSync(txtFile, 'utf-8');
  let formatData = inputData.split('\n')
  let days = formatData[0].split(' ').map(Number)
  let prices = formatData[1].split(' ').map(Number)

  //check valid data for days
  let validData = checkValidData(days, prices)
  if(!validData){
    return 'try again'
  }
  return validData
}

const checkValidData = (days, prices) => {
  if(days.length !== 2){
    console.log('incorrect input for days');
    return false
  }
  if(days[0] < days[1]) {
    console.log('window must be smaller than the total number of days');
    return false
  }
  if(days[1] < 1){
    console.log('must have a window of at least 1');
    return false
  }
  return {
        days: days,
        prices: prices
      }
}

const helperMethods = {
  formatTxt: formatTxt
}

module.exports = helperMethods;
