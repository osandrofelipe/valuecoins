const apiUrls = {
  binance: {
    BTC: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT",
    ETH: "https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT",
    BCH: "https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT",
    SOL: "https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT",
    ADA: "https://api.binance.com/api/v3/ticker/price?symbol=ADAUSDT",
    LTC: "https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT",
    XRP: "https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT",
  },
  mercadoBitcoin: {
    BTC: "https://www.mercadobitcoin.net/api/BTC/ticker",
    ETH: "https://www.mercadobitcoin.net/api/ETH/ticker",
    BCH: "https://www.mercadobitcoin.net/api/BCH/ticker",
    SOL: "https://www.mercadobitcoin.net/api/SOL/ticker",
    ADA: "https://www.mercadobitcoin.net/api/ADA/ticker",
    LTC: "https://www.mercadobitcoin.net/api/LTC/ticker",
    XRP: "https://www.mercadobitcoin.net/api/XRP/ticker",
  },
  economia: {
    USD_BRL: "https://economia.awesomeapi.com.br/json/list/USD-BRL/1",
  },
};

// // Apenas BTC e ETH serão exibidos no gráfico
// const chartCoins = ['BTC'];
const allCoins = ["BTC", "ETH", "BCH", "SOL", "ADA", "LTC", "XRP"]; // Moedas para as tabelas

// Configurações globais
let selectedCoin = "BTC";
let priceChart = null;
const maxDataPoints = 15;
const coinColors = {
  BTC: "#FF6384",
  ETH: "#36A2EB",
  BCH: "#FFCE56",
  SOL: "#FF8C00",
  ADA: "#00FF00",
  LTC: "#4BC0C0",
  XRP: "#9966FF",
};

// Elementos DOM
const coinFilters = document.querySelectorAll(".coin-filter");

// Funções Gerais
const fetchJson = async (url) => {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    console.error("Erro ao buscar dados:", error);
  }
};

const formatNumber = (value) => parseFloat(value).toFixed(2);

const calculoUSD = (valorBRL, valorUSD) => formatNumber(valorBRL / valorUSD);

// Atualização das Tabelas
const updateTable = (data, tableBodyId, usdValue, isBinance = false) => {
  const tableBody = document.getElementById(tableBodyId);
  tableBody.innerHTML = "";

  allCoins.forEach((coin) => {
    if (data[coin]) {
      const compraBRL = isBinance
        ? formatNumber(data[coin].price * usdValue)
        : formatNumber(data[coin].compra);
      const vendaBRL = isBinance
        ? formatNumber(data[coin].price * usdValue)
        : formatNumber(data[coin].venda);
      const compraUSD = isBinance
        ? formatNumber(data[coin].price)
        : calculoUSD(data[coin].compra, usdValue);
      const vendaUSD = isBinance
        ? formatNumber(data[coin].price)
        : calculoUSD(data[coin].venda, usdValue);

      const row = document.createElement("tr");
      row.innerHTML = `
                <td>${coin}</td>
                <td>${compraBRL}</td>
                <td>${vendaBRL}</td>
                <td>${compraUSD}</td>
                <td>${vendaUSD}</td>
            `;
      tableBody.appendChild(row);
    }
  });
};

// Função para inicializar/atualizar o gráfico
const initChart = (coin) => {
  // Destrói o gráfico anterior se existir
  if (priceChart) priceChart.destroy();

  const ctx = document.getElementById("priceChart").getContext("2d");
  priceChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: [],
      datasets: [
        {
          label: ``,
          data: [],
          borderColor: coinColors[coin],
          fill: false,
          tension: 0.01,
          borderWidth: 2.0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: `Variação - ${coin}`,
        },
      },
      scales: {
        x: { title: { display: false, text: "Horário" } },
        y: {
          title: {
            display: true,
            text: "BRL",
            padding: 1,
          },
          beginAtZero: false,
        },
      },
    },
  });
};

// Função para atualizar o gráfico
const updateChart = (price) => {
  const formattedTime = new Date().toLocaleTimeString();

  // Adiciona novo ponto
  priceChart.data.labels.push(formattedTime);
  priceChart.data.datasets[0].data.push(price);

  // Mantém máximo de 15 pontos
  if (priceChart.data.labels.length > 15) {
    priceChart.data.labels.shift();
    priceChart.data.datasets[0].data.shift();
  }

  priceChart.update();
};
// Dados históricos
const fetchHistoricalData = async (coin) => {
  try {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=brl&days=1&interval=hourly`
    );
    const data = await response.json();
    return data.prices.map(([timestamp, price]) => ({
      x: new Date(timestamp).toLocaleTimeString(),
      y: price,
    }));
  } catch (error) {
    console.error("Erro ao buscar histórico:", error);
    return [];
  }
};

const loadHistoricalData = async () => {
  const historicalData = await fetchHistoricalData(selectedCoin.toLowerCase());
  if (historicalData.length > 0) {
    priceChart.data.datasets[0].data = historicalData.map((p) => p.y);
    priceChart.data.labels = historicalData.map((p) => p.x);
    priceChart.update();
  }
};

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) return await response.json();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1)));
    }
  }
};

const populateChartWithHistoricalData = async () => {
  for (const coin of chartCoins) {
    const historicalData = await fetchHistoricalData(coin.toLowerCase());
    if (historicalData.length > 0) {
      priceChart.data.datasets.push({
        label: coin,
        data: historicalData.slice(-maxDataPoints),
        borderColor: coinColors[coin],
        fill: false,
      });
      priceChart.data.labels = historicalData
        .slice(-maxDataPoints)
        .map((point) => point.x);
    }
  }
  priceChart.update();
};

// Atualização de Dados
const updateUSD = async () => {
  const usdData = await fetchJson(apiUrls.economia.USD_BRL);
  if (usdData && usdData[0]) {
    const usdValue = Number(usdData[0].bid);
    document.getElementById("valorUSD").innerHTML = `R$ ${usdValue.toFixed(2)}`;
    return usdValue;
  }
  return 0;
};

const updateTables = async (usdValue) => {
  // Mercado Bitcoin
  const mbData = {};
  for (const coin of allCoins) {
    const data = await fetchJson(apiUrls.mercadoBitcoin[coin]);
    if (data?.ticker) {
      mbData[coin] = {
        compra: formatNumber(data.ticker.buy),
        venda: formatNumber(data.ticker.sell),
      };
    }
  }
  renderTable(mbData, "mb-body", usdValue);

  // Binance
  const binanceData = {};
  for (const coin of allCoins) {
    const data = await fetchJson(apiUrls.binance[coin]);
    if (data?.price) {
      const priceBRL = formatNumber(data.price * usdValue);
      binanceData[coin] = {
        compra: priceBRL,
        venda: priceBRL,
      };
    }
  }
  renderTable(binanceData, "binance-body", usdValue, true);
};

const renderTable = (data, tableId, usdValue, isBinance = false) => {
  const tbody = document.getElementById(tableId);
  tbody.innerHTML = allCoins
    .map(
      (coin) => `
        <tr>
            <td>${coin}</td>
            <td>${data[coin]?.compra || "N/A"}</td>
            <td>${data[coin]?.venda || "N/A"}</td>
            <td>${
              isBinance
                ? data[coin]?.compra
                : calculoUSD(data[coin]?.compra, usdValue)
            }</td>
            <td>${
              isBinance
                ? data[coin]?.venda
                : calculoUSD(data[coin]?.venda, usdValue)
            }</td>
        </tr>
    `
    )
    .join("");
};

// Event Listeners
coinFilters.forEach((btn) => {
  btn.addEventListener("click", async () => {
    selectedCoin = btn.dataset.coin;
    document
      .querySelectorAll(".coin-filter")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    initChart(selectedCoin);
    await loadHistoricalData();
  });
});

// Inicialização
document.addEventListener("DOMContentLoaded", async () => {
  initChart(selectedCoin);
  const usdValue = await updateUSD();
  await loadHistoricalData();
  await updateTables(usdValue);

  setInterval(async () => {
    const usd = await updateUSD();
    const data = await fetchJson(apiUrls.mercadoBitcoin[selectedCoin]);
    if (data?.ticker) updateChart(data.ticker.buy);
    await updateTables(usd);
  }, 10000);

  // Atualiza ano do rodapé
  document.getElementById("currentYear").textContent = new Date().getFullYear();
});
