function getMaxProfit(prices){
  let lowPriceIndex =  0;
  let highPriceIndex = 0;
  let maxProfit= Number.NEGATIVE_INFINITY;

  for (let index = 0; index < prices.length; index++) {
    if (prices[index] < prices[lowPriceIndex]){
      lowPriceIndex = index;
    }
    if(prices[index +1]> prices[highPriceIndex]){
      highPriceIndex = index + 1;
    }
    const currentProfit = prices[highPriceIndex] - prices[lowPriceIndex];

    if (currentProfit > maxProfit){
      maxProfit = currentProfit
    }

    if (index+1 === prices.length-1) {
      return maxProfit;
    }
  }
}


const stockPrices = [10, 7, 5, 8, 11, 9];
const maxProfit = getMaxProfit(stockPrices);

console.log(maxProfit);
