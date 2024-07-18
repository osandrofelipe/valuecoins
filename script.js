const proxyurl = "https://cors-anywhere.herokuapp.com/";

// API URLs
const APIs = {
    binance: {
        BTC: 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT',
        ETH: 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT',
        LTC: 'https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT',
        BCH: 'https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT',
        XRP: 'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT'
    },
    bitcoinTrade: {
        BTC: 'https://api.bitcointrade.com.br/v3/public/BRLBTC/ticker',
        ETH: 'https://api.bitcointrade.com.br/v3/public/BRLETH/ticker',
        LTC: 'https://api.bitcointrade.com.br/v3/public/BRLLTC/ticker',
        BCH: 'https://api.bitcointrade.com.br/v3/public/BRLBCH/ticker',
        DAI: 'https://api.bitcointrade.com.br/v3/public/BRLDAI/ticker',
        XRP: 'https://api.bitcointrade.com.br/v3/public/BRLXRP/ticker'
    },
    dolar: 'https://economia.awesomeapi.com.br/json/list/USD-BRL/1',
    mercadoBitcoin: {
        BTC: 'https://www.mercadobitcoin.net/api/BTC/ticker',
        ETH: 'https://www.mercadobitcoin.net/api/ETH/ticker',
        LTC: 'https://www.mercadobitcoin.net/api/LTC/ticker',
        BCH: 'https://www.mercadobitcoin.net/api/BCH/ticker',
        XRP: 'https://www.mercadobitcoin.net/api/XRP/ticker',
        USDC: 'https://www.mercadobitcoin.com.br/api/USDC/ticker'
    }
};

// Element Selectors
const elements = {
    mercadoBitcoin: {
        compra: {
            BTC: document.querySelector('td#valorBTC_C'),
            ETH: document.querySelector('td#valorETH_C'),
            LTC: document.querySelector('td#valorLTC_C'),
            BCH: document.querySelector('td#valorBCH_C'),
            XRP: document.querySelector('td#valorXRP_C'),
            USDC: document.querySelector('td#valorUSDCMB')
        },
        venda: {
            BTC: document.querySelector('td#valorBTC_V'),
            ETH: document.querySelector('td#valorETH_V'),
            LTC: document.querySelector('td#valorLTC_V'),
            BCH: document.querySelector('td#valorBCH_V'),
            XRP: document.querySelector('td#valorXRP_V'),
            USDC: document.querySelector('td#valorUSDCMBV')
        }
    },
    binance: {
        BTC: document.querySelector('td#valorBTCBN'),
        ETH: document.querySelector('td#valorETHBN'),
        LTC: document.querySelector('td#valorLTCBN'),
        BCH: document.querySelector('td#valorBCHBN'),
        XRP: document.querySelector('td#valorXRPBN')
    },
    bitcoinTrade: {
        compra: {
            BTC: document.querySelector('td#valorBTCBT'),
            ETH: document.querySelector('td#valorETHBT'),
            LTC: document.querySelector('td#valorLTCBT'),
            BCH: document.querySelector('td#valorBCHBT'),
            XRP: document.querySelector('td#valorXRPBT'),
            DAI: document.querySelector('td#valorDAIMB')
        },
        venda: {
            BTC: document.querySelector('td#valorBTCBT_V'),
            ETH: document.querySelector('td#valorETHBT_V'),
            LTC: document.querySelector('td#valorLTCBT_V'),
            BCH: document.querySelector('td#valorBCHBT_V'),
            XRP: document.querySelector('td#valorXRPBT_V'),
            DAI: document.querySelector('td#valorDAIMBV')
        }
    },
    dolar: document.querySelector('div#valorUSD')
};

// Functions
const fetchJSON = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Fetch error: ${error.message}`);
        return null;
    }
};

const fetchAndSet = async (url, element, key) => {
    const data = await fetchJSON(url);
    if (data) {
        const value = key ? data[key] : data;
        element.innerHTML = `<strong>${Number(value).toFixed(2)}</strong>`;
    } else {
        element.innerHTML = 'Error fetching data';
    }
};

const fetchAllAndSet = (urls, elements, key) => {
    Object.keys(urls).forEach(async (symbol) => {
        await fetchAndSet(urls[symbol], elements[symbol], key);
    });
};

const setBackground = (td, color) => {
    td.style.backgroundColor = color;
};

const compareAndSetColor = (value1, value2, element1, element2) => {
    if (value1 < value2) {
        setBackground(element1, '#00ca10');
        setBackground(element2, '#ff0000');
    } else if (value1 > value2) {
        setBackground(element1, '#ff0000');
        setBackground(element2, '#00ca10');
    } else {
        setBackground(element1, '#ffbb00');
        setBackground(element2, '#ffbb00');
    }
};

// Fetch and set values
const valorStored = () => {
    fetchAllAndSet(APIs.mercadoBitcoin, elements.mercadoBitcoin.compra, 'ticker.buy');
    fetchAllAndSet(APIs.mercadoBitcoin, elements.mercadoBitcoin.venda, 'ticker.sell');
    fetchAllAndSet(APIs.binance, elements.binance, 'price');
    fetchAllAndSet(APIs.bitcoinTrade.compra, elements.bitcoinTrade.compra, 'data.buy');
    fetchAllAndSet(APIs.bitcoinTrade.venda, elements.bitcoinTrade.venda, 'data.sell');
};

const valorRealtime = async () => {
    await fetchAndSet(APIs.dolar, elements.dolar, '0.bid');
    fetchAllAndSet(APIs.mercadoBitcoin, elements.mercadoBitcoin.compra, 'ticker.buy');
    fetchAllAndSet(APIs.mercadoBitcoin, elements.mercadoBitcoin.venda, 'ticker.sell');
    fetchAllAndSet(APIs.bitcoinTrade.compra, elements.bitcoinTrade.compra, 'data.buy');
    fetchAllAndSet(APIs.bitcoinTrade.venda, elements.bitcoinTrade.venda, 'data.sell');
};

// Initial fetch
valorStored();
valorRealtime();

// Interval fetch
setInterval(valorStored, 10000);
setInterval(valorRealtime, 10999);