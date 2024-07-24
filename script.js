const proxyurl = "https://cors-anywhere.herokuapp.com/"; 

// URLs das APIs
const apiUrls = {
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
    economia: {
        USD_BRL: 'https://economia.awesomeapi.com.br/json/list/USD-BRL/1'
    },
    mercadoBitcoin: {
        BTC: 'https://www.mercadobitcoin.net/api/BTC/ticker',
        ETH: 'https://www.mercadobitcoin.net/api/ETH/ticker',
        LTC: 'https://www.mercadobitcoin.net/api/LTC/ticker',
        BCH: 'https://www.mercadobitcoin.net/api/BCH/ticker',
        XRP: 'https://www.mercadobitcoin.net/api/XRP/ticker',
        USDC: 'https://www.mercadobitcoin.com.br/api/USDC/ticker'
    }
};

// Seleção de elementos DOM
const elements = {
    mercadoBitcoin: {
        USDCCompra: document.querySelector('td#valorUSDCMB'),
        USDCVenda: document.querySelector('td#valorUSDCMBV'),
        BTCCompra: document.querySelector('td#valorBTC_C'),
        ETHCompra: document.querySelector('td#valorETH_C'),
        BCHCompra: document.querySelector('td#valorBCH_C'),
        LTCCompra: document.querySelector('td#valorLTC_C'),
        XRPCompra: document.querySelector('td#valorXRP_C'),
        BTCVenda: document.querySelector('td#valorBTC_V'),
        ETHVenda: document.querySelector('td#valorETH_V'),
        BCHVenda: document.querySelector('td#valorBCH_V'),
        LTCVenda: document.querySelector('td#valorLTC_V'),
        XRPVenda: document.querySelector('td#valorXRP_V')
    },
    bitcoinTrade: {
        BTCCompra: document.querySelector('td#valorBTCBT'),
        ETHCompra: document.querySelector('td#valorETHBT'),
        BCHCompra: document.querySelector('td#valorBCHBT'),
        LTCCompra: document.querySelector('td#valorLTCBT'),
        XRPCompra: document.querySelector('td#valorXRPBT'),
        DAICompra: document.querySelector('td#valorDAIMB'),
        DAIVenda: document.querySelector('td#valorDAIMBV'),
        BTCVenda: document.querySelector('td#valorBTCBT_V'),
        ETHVenda: document.querySelector('td#valorETHBT_V'),
        BCHVenda: document.querySelector('td#valorBCHBT_V'),
        LTCVenda: document.querySelector('td#valorLTCBT_V'),
        XRPVenda: document.querySelector('td#valorXRPBT_V')
    },
    economia: {
        USD: document.querySelector('div#valorUSD')
    }
};

// Variáveis de valores
let realTimeValues = {
    USD: 0,
    DAI: { compra: 0, venda: 0 },
    USDC: { compra: 0, venda: 0 },
    BTC: { compra: 0, venda: 0 },
    ETH: { compra: 0, venda: 0 },
    BCH: { compra: 0, venda: 0 },
    LTC: { compra: 0, venda: 0 },
    XRP: { compra: 0, venda: 0 }
};

let storedValues = {
    mercadoBitcoin: {
        BTC: { compra: 0, venda: 0 },
        ETH: { compra: 0, venda: 0 },
        BCH: { compra: 0, venda: 0 },
        LTC: { compra: 0, venda: 0 },
        XRP: { compra: 0, venda: 0 }
    },
    binance: {
        BTC: 0,
        ETH: 0,
        BCH: 0,
        LTC: 0
    },
    bitcoinTrade: {
        BTC: { compra: 0, venda: 0 },
        ETH: { compra: 0, venda: 0 },
        BCH: { compra: 0, venda: 0 },
        LTC: { compra: 0, venda: 0 }
    }
};

function calculoBT(exchangeRate, binanceRate) {
    return (exchangeRate / binanceRate).toFixed(2);
}

function fetchJson(url) {
    return fetch(url).then(res => res.json());
}

function updateStoredValues() {
    const fetchers = [
        // Mercado Bitcoin Compra
        fetchJson(apiUrls.mercadoBitcoin.BTC).then(info => storedValues.mercadoBitcoin.BTC.compra = Number(info.ticker.buy)),
        fetchJson(apiUrls.mercadoBitcoin.ETH).then(info => storedValues.mercadoBitcoin.ETH.compra = Number(info.ticker.buy)),
        fetchJson(apiUrls.mercadoBitcoin.BCH).then(info => storedValues.mercadoBitcoin.BCH.compra = Number(info.ticker.buy)),
        fetchJson(apiUrls.mercadoBitcoin.LTC).then(info => storedValues.mercadoBitcoin.LTC.compra = Number(info.ticker.buy)),
        fetchJson(apiUrls.mercadoBitcoin.XRP).then(info => storedValues.mercadoBitcoin.XRP.compra = Number(info.ticker.buy)),

        // Mercado Bitcoin Venda
        fetchJson(apiUrls.mercadoBitcoin.BTC).then(info => storedValues.mercadoBitcoin.BTC.venda = Number(info.ticker.sell)),
        fetchJson(apiUrls.mercadoBitcoin.ETH).then(info => storedValues.mercadoBitcoin.ETH.venda = Number(info.ticker.sell)),
        fetchJson(apiUrls.mercadoBitcoin.BCH).then(info => storedValues.mercadoBitcoin.BCH.venda = Number(info.ticker.sell)),
        fetchJson(apiUrls.mercadoBitcoin.LTC).then(info => storedValues.mercadoBitcoin.LTC.venda = Number(info.ticker.sell)),
        fetchJson(apiUrls.mercadoBitcoin.XRP).then(info => storedValues.mercadoBitcoin.XRP.venda = Number(info.ticker.sell)),

        // Binance
        fetchJson(apiUrls.binance.BTC).then(info => storedValues.binance.BTC = Number(info.price)),
        fetchJson(apiUrls.binance.ETH).then(info => storedValues.binance.ETH = Number(info.price)),
        fetchJson(apiUrls.binance.BCH).then(info => storedValues.binance.BCH = Number(info.price)),
        fetchJson(apiUrls.binance.LTC).then(info => storedValues.binance.LTC = Number(info.price)),

        // Bitcoin Trade Compra
        fetchJson(apiUrls.bitcoinTrade.BTC).then(info => storedValues.bitcoinTrade.BTC.compra = Number(info.data.buy)),
        fetchJson(apiUrls.bitcoinTrade.ETH).then(info => storedValues.bitcoinTrade.ETH.compra = Number(info.data.buy)),
        fetchJson(apiUrls.bitcoinTrade.BCH).then(info => storedValues.bitcoinTrade.BCH.compra = Number(info.data.buy)),
        fetchJson(apiUrls.bitcoinTrade.LTC).then(info => storedValues.bitcoinTrade.LTC.compra = Number(info.data.buy))
    ];

    Promise.all(fetchers).catch(console.error);
}

function updateRealTimeValues() {
    const fetchers = [
        // Economia USD
        fetchJson(apiUrls.economia.USD_BRL).then(info => {
            realTimeValues.USD = Number(info[0].bid).toFixed(2);
            elements.economia.USD.innerHTML = `<h1><strong>R$ ${realTimeValues.USD}`;
        }),

        // USDC Mercado Bitcoin
        fetchJson(apiUrls.mercadoBitcoin.USDC).then(info => {
            realTimeValues.USDC.compra = Number(info.ticker.buy).toFixed(2);
            realTimeValues.USDC.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.USDCCompra.innerHTML = `<strong>${realTimeValues.USDC.compra}`;
            elements.mercadoBitcoin.USDCVenda.innerHTML = `<strong>${realTimeValues.USDC.venda}`;
        }),

        // DAI Bitcoin Trade
        fetchJson(apiUrls.bitcoinTrade.DAI).then(info => {
            realTimeValues.DAI.compra = Number(info.data.buy).toFixed(2);
            realTimeValues.DAI.venda = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.DAICompra.innerHTML = `<strong>${realTimeValues.DAI.compra}`;
            elements.bitcoinTrade.DAIVenda.innerHTML = `<strong>${realTimeValues.DAI.venda}`;
        }),

        // Mercado Bitcoin Compra
        fetchJson(apiUrls.mercadoBitcoin.BTC).then(info => {
            realTimeValues.BTC.compra = Number(info.ticker.buy).toFixed(2);
            elements.mercadoBitcoin.BTCCompra.innerHTML = `<strong>${realTimeValues.BTC.compra}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.ETH).then(info => {
            realTimeValues.ETH.compra = Number(info.ticker.buy).toFixed(2);
            elements.mercadoBitcoin.ETHCompra.innerHTML = `<strong>${realTimeValues.ETH.compra}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.BCH).then(info => {
            realTimeValues.BCH.compra = Number(info.ticker.buy).toFixed(2);
            elements.mercadoBitcoin.BCHCompra.innerHTML = `<strong>${realTimeValues.BCH.compra}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.LTC).then(info => {
            realTimeValues.LTC.compra = Number(info.ticker.buy).toFixed(2);
            elements.mercadoBitcoin.LTCCompra.innerHTML = `<strong>${realTimeValues.LTC.compra}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.XRP).then(info => {
            realTimeValues.XRP.compra = Number(info.ticker.buy).toFixed(2);
            elements.mercadoBitcoin.XRPCompra.innerHTML = `<strong>${realTimeValues.XRP.compra}`;
        }),

        // Mercado Bitcoin Venda
        fetchJson(apiUrls.mercadoBitcoin.BTC).then(info => {
            realTimeValues.BTC.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.BTCVenda.innerHTML = `<strong>${realTimeValues.BTC.venda}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.ETH).then(info => {
            realTimeValues.ETH.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.ETHVenda.innerHTML = `<strong>${realTimeValues.ETH.venda}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.BCH).then(info => {
            realTimeValues.BCH.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.BCHVenda.innerHTML = `<strong>${realTimeValues.BCH.venda}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.LTC).then(info => {
            realTimeValues.LTC.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.LTCVenda.innerHTML = `<strong>${realTimeValues.LTC.venda}`;
        }),
        fetchJson(apiUrls.mercadoBitcoin.XRP).then(info => {
            realTimeValues.XRP.venda = Number(info.ticker.sell).toFixed(2);
            elements.mercadoBitcoin.XRPVenda.innerHTML = `<strong>${realTimeValues.XRP.venda}`;
        }),

        // Binance Real Time
        fetchJson(apiUrls.binance.BTC).then(info => {
            realTimeValues.BTC.binance = Number(info.price).toFixed(2);
        }),
        fetchJson(apiUrls.binance.ETH).then(info => {
            realTimeValues.ETH.binance = Number(info.price).toFixed(2);
        }),
        fetchJson(apiUrls.binance.LTC).then(info => {
            realTimeValues.LTC.binance = Number(info.price).toFixed(2);
        }),
        fetchJson(apiUrls.binance.BCH).then(info => {
            realTimeValues.BCH.binance = Number(info.price).toFixed(2);
        }),
        fetchJson(apiUrls.binance.XRP).then(info => {
            realTimeValues.XRP.binance = Number(info.price).toFixed(2);
        }),

        // Bitcoin Trade Compra
        fetchJson(apiUrls.bitcoinTrade.BTC).then(info => {
            realTimeValues.BTC.compraTrade = Number(info.data.buy).toFixed(2);
            elements.bitcoinTrade.BTCCompra.innerHTML = `<strong>${realTimeValues.BTC.compraTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.ETH).then(info => {
            realTimeValues.ETH.compraTrade = Number(info.data.buy).toFixed(2);
            elements.bitcoinTrade.ETHCompra.innerHTML = `<strong>${realTimeValues.ETH.compraTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.BCH).then(info => {
            realTimeValues.BCH.compraTrade = Number(info.data.buy).toFixed(2);
            elements.bitcoinTrade.BCHCompra.innerHTML = `<strong>${realTimeValues.BCH.compraTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.LTC).then(info => {
            realTimeValues.LTC.compraTrade = Number(info.data.buy).toFixed(2);
            elements.bitcoinTrade.LTCCompra.innerHTML = `<strong>${realTimeValues.LTC.compraTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.XRP).then(info => {
            realTimeValues.XRP.compraTrade = Number(info.data.buy).toFixed(2);
            elements.bitcoinTrade.XRPCompra.innerHTML = `<strong>${realTimeValues.XRP.compraTrade}`;
        }),

        // Bitcoin Trade Venda
        fetchJson(apiUrls.bitcoinTrade.BTC).then(info => {
            realTimeValues.BTC.vendaTrade = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.BTCVenda.innerHTML = `<strong>${realTimeValues.BTC.vendaTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.ETH).then(info => {
            realTimeValues.ETH.vendaTrade = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.ETHVenda.innerHTML = `<strong>${realTimeValues.ETH.vendaTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.BCH).then(info => {
            realTimeValues.BCH.vendaTrade = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.BCHVenda.innerHTML = `<strong>${realTimeValues.BCH.vendaTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.LTC).then(info => {
            realTimeValues.LTC.vendaTrade = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.LTCVenda.innerHTML = `<strong>${realTimeValues.LTC.vendaTrade}`;
        }),
        fetchJson(apiUrls.bitcoinTrade.XRP).then(info => {
            realTimeValues.XRP.vendaTrade = Number(info.data.sell).toFixed(2);
            elements.bitcoinTrade.XRPVenda.innerHTML = `<strong>${realTimeValues.XRP.vendaTrade}`;
        })
    ];

    Promise.all(fetchers)
        .then(() => {
            // Cálculo USD Compra e Venda para Mercado Bitcoin
            const valorUSDBTCMB_C = document.querySelector("td#valorUSDBTCMB_C");
            const valorUSDETHMB_C = document.querySelector("td#valorUSDETHMB_C");
            const valorUSDBCHMB_C = document.querySelector("td#valorUSDBCHMB_C");
            const valorUSDLTCMB_C = document.querySelector("td#valorUSDLTCMB_C");
            const valorUSDXRPMB_C = document.querySelector("td#valorUSDXRPMB_C");

            const valorUSDBTCMB_V = document.querySelector("td#valorUSDBTCMB_V");
            const valorUSDETHMB_V = document.querySelector("td#valorUSDETHMB_V");
            const valorUSDBCHMB_V = document.querySelector("td#valorUSDBCHMB_V");
            const valorUSDLTCMB_V = document.querySelector("td#valorUSDLTCMB_V");
            const valorUSDXRPMB_V = document.querySelector("td#valorUSDXRPMB_V");

            // Compra
            valorUSDBTCMB_C.innerHTML = `<strong>${calculoBT(realTimeValues.BTC.compra, realTimeValues.BTC.binance)}`;
            valorUSDETHMB_C.innerHTML = `<strong>${calculoBT(realTimeValues.ETH.compra, realTimeValues.ETH.binance)}`;
            valorUSDBCHMB_C.innerHTML = `<strong>${calculoBT(realTimeValues.BCH.compra, realTimeValues.BCH.binance)}`;
            valorUSDLTCMB_C.innerHTML = `<strong>${calculoBT(realTimeValues.LTC.compra, realTimeValues.LTC.binance)}`;
            valorUSDXRPMB_C.innerHTML = `<strong>${calculoBT(realTimeValues.XRP.compra, realTimeValues.XRP.binance)}`;

            // Venda
            valorUSDBTCMB_V.innerHTML = `<strong>${calculoBT(realTimeValues.BTC.venda, realTimeValues.BTC.binance)}`;
            valorUSDETHMB_V.innerHTML = `<strong>${calculoBT(realTimeValues.ETH.venda, realTimeValues.ETH.binance)}`;
            valorUSDBCHMB_V.innerHTML = `<strong>${calculoBT(realTimeValues.BCH.venda, realTimeValues.BCH.binance)}`;
            valorUSDLTCMB_V.innerHTML = `<strong>${calculoBT(realTimeValues.LTC.venda, realTimeValues.LTC.binance)}`;
            valorUSDXRPMB_V.innerHTML = `<strong>${calculoBT(realTimeValues.XRP.venda, realTimeValues.XRP.binance)}`;

            // Cálculo USD Compra e Venda para Bitcoin Trade
            const valorUSDBTCBT_C = document.querySelector("td#valorUSDBTCBT_C");
            const valorUSDETHBT_C = document.querySelector("td#valorUSDETHBT_C");
            const valorUSDBCHBT_C = document.querySelector("td#valorUSDBCHBT_C");
            const valorUSDLTCBT_C = document.querySelector("td#valorUSDLTCBT_C");
            const valorUSDXRPBT_C = document.querySelector("td#valorUSDXRPBT_C");

            const valorUSDBTCBT_V = document.querySelector("td#valorUSDBTCBT_V");
            const valorUSDETHBT_V = document.querySelector("td#valorUSDETHBT_V");
            const valorUSDBCHBT_V = document.querySelector("td#valorUSDBCHBT_V");
            const valorUSDLTCBT_V = document.querySelector("td#valorUSDLTCBT_V");
            const valorUSDXRPBT_V = document.querySelector("td#valorUSDXRPBT_V");

            // Compra
            valorUSDBTCBT_C.innerHTML = `<strong>${calculoBT(realTimeValues.BTC.compraTrade, realTimeValues.BTC.binance)}`;
            valorUSDETHBT_C.innerHTML = `<strong>${calculoBT(realTimeValues.ETH.compraTrade, realTimeValues.ETH.binance)}`;
            valorUSDBCHBT_C.innerHTML = `<strong>${calculoBT(realTimeValues.BCH.compraTrade, realTimeValues.BCH.binance)}`;
            valorUSDLTCBT_C.innerHTML = `<strong>${calculoBT(realTimeValues.LTC.compraTrade, realTimeValues.LTC.binance)}`;
            valorUSDXRPBT_C.innerHTML = `<strong>${calculoBT(realTimeValues.XRP.compraTrade, realTimeValues.XRP.binance)}`;

            // Venda
            valorUSDBTCBT_V.innerHTML = `<strong>${calculoBT(realTimeValues.BTC.vendaTrade, realTimeValues.BTC.binance)}`;
            valorUSDETHBT_V.innerHTML = `<strong>${calculoBT(realTimeValues.ETH.vendaTrade, realTimeValues.ETH.binance)}`;
            valorUSDBCHBT_V.innerHTML = `<strong>${calculoBT(realTimeValues.BCH.vendaTrade, realTimeValues.BCH.binance)}`;
            valorUSDLTCBT_V.innerHTML = `<strong>${calculoBT(realTimeValues.LTC.vendaTrade, realTimeValues.LTC.binance)}`;
            valorUSDXRPBT_V.innerHTML = `<strong>${calculoBT(realTimeValues.XRP.vendaTrade, realTimeValues.XRP.binance)}`;

            applyConditions();
        })
        .catch(console.error);
}

function applyConditions() {
    const conditionList = [
        { compra: "valorUSDBTCMB_C", tradeCompra: "valorUSDBTCBT_C", venda: "valorUSDBTCMB_V", tradeVenda: "valorUSDBTCBT_V" },
        { compra: "valorUSDETHMB_C", tradeCompra: "valorUSDETHBT_C", venda: "valorUSDETHMB_V", tradeVenda: "valorUSDETHBT_V" },
        { compra: "valorUSDBCHMB_C", tradeCompra: "valorUSDBCHBT_C", venda: "valorUSDBCHMB_V", tradeVenda: "valorUSDBCHBT_V" },
        { compra: "valorUSDLTCMB_C", tradeCompra: "valorUSDLTCBT_C", venda: "valorUSDLTCMB_V", tradeVenda: "valorUSDLTCBT_V" },
        { compra: "valorUSDXRPMB_C", tradeCompra: "valorUSDXRPBT_C", venda: "valorUSDXRPMB_V", tradeVenda: "valorUSDXRPBT_V" }
    ];

    conditionList.forEach(({ compra, tradeCompra, venda, tradeVenda }) => {
        applyCondition(
            document.querySelector(`td#${compra}`),
            document.querySelector(`td#${tradeCompra}`),
            document.querySelector(`td#${venda}`),
            document.querySelector(`td#${tradeVenda}`)
        );
    });
}

function applyCondition(compraElement, tradeCompraElement, vendaElement, tradeVendaElement) {
    const compraValue = parseFloat(compraElement.textContent);
    const tradeCompraValue = parseFloat(tradeCompraElement.textContent);
    const vendaValue = parseFloat(vendaElement.textContent);
    const tradeVendaValue = parseFloat(tradeVendaElement.textContent);

    // Compra
    if (compraValue < tradeCompraValue) {
        mudaVerd(compraElement);
        mudaVerm(tradeCompraElement);
    } else if (compraValue > tradeCompraValue) {
        mudaVerm(compraElement);
        mudaVerd(tradeCompraElement);
    } else {
        mudaAmar(compraElement);
        mudaAmar(tradeCompraElement);
    }

    // Venda
    if (vendaValue > tradeVendaValue) {
        mudaVerd(vendaElement);
        mudaVerm(tradeVendaElement);
    } else if (vendaValue < tradeVendaValue) {
        mudaVerm(vendaElement);
        mudaVerd(tradeVendaElement);
    } else {
        mudaAmar(vendaElement);
        mudaAmar(tradeVendaElement);
    }
}

function mudaVerm(td) {
    td.style.backgroundColor = '#ff0000';
}

function mudaVerd(td) {
    td.style.backgroundColor = '#00ca10';
}

function mudaAmar(td) {
    td.style.backgroundColor = '#ffbb00';
}

function callStore() {
    updateStoredValues();
}

updateRealTimeValues();
setInterval(callStore, 10000);
setInterval(updateRealTimeValues, 10999);

