function calculate() {
    let capital = parseFloat(document.getElementById("capital").value);
    let leverage = parseFloat(document.getElementById("leverage").value);
    let stockPrice = parseFloat(document.getElementById("stockPrice").value);
    let profitTarget = parseFloat(document.getElementById("profitTarget").value);
    let stopLoss = parseFloat(document.getElementById("stopLoss").value);

    if (isNaN(capital) || isNaN(leverage) || isNaN(stockPrice) || isNaN(profitTarget) || isNaN(stopLoss)) {
        alert("Please enter valid numbers in all fields.");
        return;
    }

    // Total Buying Power with Leverage
    let totalFunds = capital * leverage;

    // Number of Stocks You Can Buy
    let quantity = Math.floor(totalFunds / stockPrice);
    document.getElementById("quantityResult").innerHTML = `📊 You can buy <strong>${quantity}</strong> shares`;

    // Profit Calculation
    let takeProfitPrice = stockPrice * (1 + profitTarget / 100);
    let profit = quantity * (takeProfitPrice - stockPrice);
    document.getElementById("profitBox").innerHTML = `💰 Potential Profit: <strong>₹${profit.toFixed(2)}</strong>`;

    // Loss Calculation
    let stopLossPrice = stockPrice * (1 - stopLoss / 100);
    let loss = quantity * (stockPrice - stopLossPrice);
    document.getElementById("lossBox").innerHTML = `⚠️ Potential Loss: <strong>₹${loss.toFixed(2)}</strong>`;

    // Display Take Profit & Stop Loss Prices
    document.getElementById("takeProfit").innerHTML = `🚀 Take Profit at: <strong>₹${takeProfitPrice.toFixed(2)}</strong>`;
    document.getElementById("stopLossValue").innerHTML = `📉 Stop Loss at: <strong>₹${stopLossPrice.toFixed(2)}</strong>`;
}
