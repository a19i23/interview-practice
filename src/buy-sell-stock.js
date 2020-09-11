// Brute force O(n)^2
// function stockBuySell(prices){
//   if(prices.length < 2) return "Need more than one stock price"

//   let highestPrice = 0;
//   let lowestPrice = Number.MAX_SAFE_INTEGER;
//   let lowPriceIndex = 0;
//   let highPriceIndex = 0;
//   let maxProfit = Number.MIN_SAFE_INTEGER;

//   for (let i = 0; i < prices.length; i++) {
//     for (let j=i+1; j<prices.length; j++){  

//       const currentProfit = prices[j] - prices[i]
//       if(currentProfit > maxProfit){
//         maxProfit = currentProfit;
//         highPriceIndex = j;
//         lowPriceIndex = i;
//         highestPrice = prices[j];
//         lowestPrice = prices[i];
//       }
//     }
//   }
//   return `Buy on day ${lowPriceIndex+1}, sell on ${highPriceIndex + 1}`
// }

// O(n) time complexity
// function stockBuySell(prices){
//   let lowestPrice = Number.MAX_SAFE_INTEGER;
//   let lowestPricePosition = 0;
//   let highestPricePosition = 0;
//   let highestPrice = 0;
//   let maxProfit = Number.MIN_SAFE_INTEGER; 

//   if(!(prices.length >1))return "Need more than one stock price"

//   prices.forEach((price, i) => {
//     // check if lowest price
//     if (price < lowestPrice){
//       lowestPrice = price;
//       lowestPricePosition = i;
//     }
    
//     const nextDayPrice = prices[i+1];
//     if (nextDayPrice && nextDayPrice > price && nextDayPrice > highestPrice){
//       highestPrice = nextDayPrice;
//       highestPricePosition = i+1;
//       const profit = nextDayPrice - price;
//       if (profit > maxProfit){
//         maxProfit = profit;
//       }
//     }
    
//   });
//   return `buy on day ${lowestPricePosition +1}, sell on day ${highestPricePosition +1}`
// }

  // leet code solution
  function stockBuySell(prices) {
    let lowestPrice = Number.MAX_VALUE;
    let maxProfit = 0;
    let lowIndex = 0;
    let highIndex = 0;

    if (prices.length <2) return "Must be more than one price"

    prices.forEach((price,i) => {
      if (price < lowestPrice){
        lowestPrice = price;
        lowIndex = i;
      } else if (price - lowestPrice > maxProfit){
        maxProfit = price - lowestPrice;
        highIndex = i;
      }
    })
    return `Buy on day ${lowIndex +1}, sell on day ${highIndex +1}`
  }

console.log(stockBuySell([110]));

// console.log(stockBuySell([20, 10])) //Buy on day 1, sell on 2 -- this one is questionable

console.log(stockBuySell([20, 500, 50, 100])) //Buy on day 1, sell on 2  - max profit early on
console.log(stockBuySell([20, 100, 50, 500])) //Buy on day 1, sell on 4 - max profit throughout range


console.log(stockBuySell([20, 1000, 50, 500])) //Buy on day 1, sell on 2

console.log(stockBuySell([20, 100, 10, 50, 500])) //Buy on day 3, sell on 5

console.log(stockBuySell([20, 100, 0, 50, 500])) //Buy on day 3, sell on 5

console.log(stockBuySell([110, 180, 260, 40, 310, 535, 695])); //Buy on day 4, sell on 7
