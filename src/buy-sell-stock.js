
function stockBuySell(prices){
  let lowestPrice = Number.MAX_SAFE_INTEGER;
  let lowestPricePosition = -1;
  let highestPricePosition = -1;
  let highestPrice = 0;
  let maxProfit = 0; 

  if(!(prices.length >1))return "Need more than one stock price"

  prices.forEach((price, i) => {
    // check if lowest price
    if (price < lowestPrice){
      lowestPrice = price;
      lowestPricePosition = i;
    }
    
    const nextDayPrice = prices[i+1];
    if (nextDayPrice && nextDayPrice > price){
      highestPrice = nextDayPrice;
      highestPricePosition = i+1;
      const profit = nextDayPrice - price;
      if (profit > maxProfit){
        maxProfit = profit;
      }
    }
    
  });

  return `buy on day ${lowestPricePosition +1}, sell on day ${highestPricePosition +1}`
}

console.log(stockBuySell([110, 180, 260, 40, 310, 535, 695]));
