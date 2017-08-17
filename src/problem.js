  //Given N days of average home price sales data
  //Fixed window size of K
  //For each window of K days, from left to right, find the number of increasing subranges within the window minus the number of decreasing subranges within the window

  //A window of days is defined as a contiguous range of days. Thus, there are exactly N-K+1 windows where this metric needs to be computed.

  //An increasing subrange is defined as a contiguous range of indices [a,b], a < b , where each element is larger than the previous element.

  //A decreasing subrange is similarly defined, except each element is smaller than the next.

  //Constraints:
  //1 ≤ N ≤ 200,000 days
  //1 ≤ K ≤ N days
const formatting = require('./helpers')
const textFile = `./inputs/${process.argv[2]}`
const formattedTxt = formatting.formatTxt(textFile);

const amneProblem = (days, homePrices)=>{
  const totalDays = days[0]
  const windowDays = days[1]
  const possibleMoves = homePrices.slice(homePrices.indexOf(homePrices[windowDays - 1]), homePrices.length).length
  var iterator = 0
  while(iterator < possibleMoves){
    var increase = 0
    var decrease = 0
    let startDay = iterator
    let endDay = windowDays + iterator
    let currentWindow = homePrices.slice(startDay, endDay)
    for(let i = 0, currentWindowLength = currentWindow.length - 1; i < currentWindowLength; i++){
      let currentPrice = currentWindow[i]
      let nextPriceIncreaseIndex = 1
      let nextPriceDecreaseIndex = 1
      while(currentPrice < currentWindow[i + nextPriceIncreaseIndex]) {
        increase++
        nextPriceIncreaseIndex++
      }
      while(currentPrice > currentWindow[i + nextPriceDecreaseIndex]) {
        decrease++
        nextPriceDecreaseIndex++
      }
    }
    console.log(increase - decrease)
    iterator++
  }

}

amneProblem(formattedTxt.days, formattedTxt.prices)

module.exports = amneProblem;
