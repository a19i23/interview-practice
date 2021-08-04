function getMaxProfit(stockPrices){
  let lowPriceIndex =  0;
  let highPriceIndex = 0;
  let maxProfit= Number.NEGATIVE_INFINITY;

  for (let index = 0; index < stockPrices.length; index++) {
    if (stockPrices[index] < stockPrices[lowPriceIndex]){
      lowPriceIndex = index;
    }
    if(stockPrices[index +1]> stockPrices[highPriceIndex]){
      highPriceIndex = index + 1;
    }
    const currentProfit = stockPrices[highPriceIndex] - stockPrices[lowPriceIndex];

    if (currentProfit > maxProfit){
      maxProfit = currentProfit
    }

    if (index+1 === stockPrices.length-1) {
      return maxProfit;
    }
  }
}


const stockPrices = [10, 7, 5, 8, 11, 9];
const maxProfit = getMaxProfit(stockPrices);

console.log(maxProfit);

//Solution
// function getMaxProfit(stockPrices) {
//   if (stockPrices.length < 2) {
//     throw new Error('Getting a profit requires at least 2 prices');
//   }

//   // We'll greedily update minPrice and maxProfit, so we initialize
//   // them to the first price and the first possible profit
//   let minPrice = stockPrices[0];
//   let maxProfit = stockPrices[1] - stockPrices[0];

//   // Start at the second (index 1) time
//   // We can't sell at the first time, since we must buy first,
//   // and we can't buy and sell at the same time!
//   // If we started at index 0, we'd try to buy *and* sell at time 0.
//   // this would give a profit of 0, which is a problem if our
//   // maxProfit is supposed to be *negative*--we'd return 0.
//   for (let i = 1; i < stockPrices.length; i++) {
//     const currentPrice = stockPrices[i];

//     // See what our profit would be if we bought at the
//     // min price and sold at the current price
//     const potentialProfit = currentPrice - minPrice;

//     // Update maxProfit if we can do better
//     maxProfit = Math.max(maxProfit, potentialProfit);

//     // Update minPrice so it's always
//     // the lowest price we've seen so far
//     minPrice = Math.min(minPrice, currentPrice);
//   }

//   return maxProfit;
// }
