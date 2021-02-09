const proxyurl = "https://cors-anywhere.herokuapp.com/"//"http://localhost:8080/cors?method=GET&url="   //"http://localhost:8080/cors?method=GET&url="       //"https://crossorigin.me/"   //"https://cors-anywhere.herokuapp.com/"

// API'S BINANCE
const BTCBN= 'https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT'
const ETHBN= 'https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT'
const LTCBN= 'https://api.binance.com/api/v3/ticker/price?symbol=LTCUSDT'
const BCHBN= 'https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT'
const XRPBN= 'https://api.binance.com/api/v3/ticker/price?symbol=XRPUSDT'
// API'S BITCOIN TRADE
const BTCBT = 'https://api.bitcointrade.com.br/v3/public/BRLBTC/ticker'
const ETHBT = 'https://api.bitcointrade.com.br/v3/public/BRLETH/ticker'
const LTCBT = 'https://api.bitcointrade.com.br/v3/public/BRLLTC/ticker'
const BCHBT = 'https://api.bitcointrade.com.br/v3/public/BRLBCH/ticker'
const DAIBT = 'https://api.bitcointrade.com.br/v3/public/BRLDAI/ticker'
const XRPBT = 'https://api.bitcointrade.com.br/v3/public/BRLXRP/ticker'
//API COTACAO DO DOLAR
const USD_BRL = 'https://economia.awesomeapi.com.br/json/list/USD-BRL/1'
// API'S MERCADO BITCOIN
const BTCMB = 'https://www.mercadobitcoin.net/api/BTC/ticker'
const ETHMB = 'https://www.mercadobitcoin.net/api/ETH/ticker'
const LTCMB = 'https://www.mercadobitcoin.net/api/LTC/ticker'
const BCHMB = 'https://www.mercadobitcoin.net/api/BCH/ticker'
const XRPMB = 'https://www.mercadobitcoin.net/api/XRP/ticker'
const USDCMB = 'https://www.mercadobitcoin.com.br/api/USDC/ticker'
// MERCADO BITCOIN
const tdUSDCMB = document.querySelector('td#valorUSDCMB')
const tdUSDCMBV = document.querySelector('td#valorUSDCMBV')
const tdBTCMBC = document.querySelector('td#valorBTC_C')
const tdETHMBC = document.querySelector('td#valorETH_C')
const tdBCHMBC = document.querySelector('td#valorBCH_C')
const tdLTCMBC = document.querySelector('td#valorLTC_C')
const tdXRPMBC = document.querySelector('td#valorXRP_C') 
const tdBTCMBV = document.querySelector('td#valorBTC_V')
const tdETHMBV = document.querySelector('td#valorETH_V')
const tdBCHMBV = document.querySelector('td#valorBCH_V')
const tdLTCMBV = document.querySelector('td#valorLTC_V')  
const tdXRPMBV = document.querySelector('td#valorXRP_V') 


// BINANCE
const tdBTCBN = document.querySelector('td#valorBTCBN')
const tdLTCBN = document.querySelector('td#valorLTCBN')
const tdETHBN = document.querySelector('td#valorETHBN')
const tdBCHBN = document.querySelector('td#valorBCHBN')
const tdBTCBNV = document.querySelector('td#valorBTCBN_V')
const tdLTCBNV = document.querySelector('td#valorLTCBN_V')
const tdETHBNV = document.querySelector('td#valorETHBN_V')
const tdBCHBNV = document.querySelector('td#valorBCHBN_V')
// BITCOIN TRADE
const tdBTCBT = document.querySelector('td#valorBTCBT')
const tdLTCBT = document.querySelector('td#valorLTCBT')
const tdETHBT = document.querySelector('td#valorETHBT')
const tdBCHBT = document.querySelector('td#valorBCHBT')
const tdXRPBT = document.querySelector('td#valorXRPBT')
const tdBTCBTV = document.querySelector('td#valorBTCBT_V')
const tdLTCBTV = document.querySelector('td#valorLTCBT_V')
const tdETHBTV = document.querySelector('td#valorETHBT_V')
const tdBCHBTV = document.querySelector('td#valorBCHBT_V')
const tdXRPBTV = document.querySelector('td#valorXRPBT_V')
const tdDAIBT = document.querySelector('td#valorDAIMB')
const tdDAIBTV = document.querySelector('td#valorDAIMBV')
const tdUSD = document.querySelector('td#valorUSD')

let numeroRealtimeUSD,
    numeroRealtimeDAIBT,
    numeroRealtimeDAIBTV,
    numeroRealtimeUSDCMB,
    numeroRealtimeUSDCMBV,
    numeroRealtimeBTCMB, 
    numeroRealtimeETHMB, 
    numeroRealtimeLTCMB, 
    numeroRealtimeBCHMB,
    numeroRealtimeXRPMB, 
    numeroRealtimeBTCMBV, 
    numeroRealtimeETHMBV, 
    numeroRealtimeLTCMBV, 
    numeroRealtimeBCHMBV,
    numeroRealtimeXRPMBV, 
    numeroRealtimeBTCBN, 
    numeroRealtimeETHBN, 
    numeroRealtimeLTCBN, 
    numeroRealtimeBCHBN, 
    numeroRealtimeXRPBN,
    numeroRealtimeBTCBT, 
    numeroRealtimeETHBT, 
    numeroRealtimeLTCBT,
    numeroRealtimeBCHBT,
    numeroRealtimeXRPBT, 
    numeroRealtimeBTCBTV, 
    numeroRealtimeETHBTV, 
    numeroRealtimeLTCBTV, 
    numeroRealtimeBCHBTV, 
    numeroRealtimeXRPBTV = 0

let numeroStoredBTCMB, numeroStoredETHMB, numeroStoredLTCMB, numeroStoredBCHMB, numeroStoredXRPMB, numeroStoredBTCMBV, numeroStoredETHMBV, numeroStoredLTCMBV, numeroStoredBCHMBV, numeroStoredXRPMBV ,numeroStoredBTCBN, numeroStoredETHBN, numeroStoredLTCBN, numeroStoredBCHBN, numeroStoredBTCBT, numeroStoredETHBT, numeroStoredLTCBT, numeroStoredBCHBT, numeroStoredBTCBTV, numeroStoredETHBTV, numeroStoredLTCBTV, numeroStoredBCHBTV = 0


function calculoBT(exc,bi){
    return Number(exc / bi).toFixed(2)
} 


    function valorStored(){
    
        //Mercado BitCoin STORE COMPRA 
        fetch(BTCMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBTCMB = [Number(info.ticker.buy)]
        }) 

        fetch(ETHMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredETHMB = [Number(info.ticker.buy)]
        })

        fetch(BCHMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBCHMB = [Number(info.ticker.buy)]     
        }) 

        fetch(LTCMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredLTCMB = [Number(info.ticker.buy)]   
        }) 

        fetch(XRPMB).then( res => {
            return res.json()
        }).then( info => {
            numeroRealtimeXRPMB = [Number(info.ticker.buy)]
        })

        // VENDA

        fetch(BTCMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBTCMBV = [Number(info.ticker.sell)]
        }) 

        fetch(ETHMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredETHMBV = [Number(info.ticker.sell)]
        })

        fetch(BCHMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBCHMBV = [Number(info.ticker.sell)]     
        }) 

        fetch(LTCMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredLTCMBV = [Number(info.ticker.sell)]   
        })

        fetch(XRPMB).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredXRPMBV = [Number(info.ticker.sell)]
        })
        
        // BINANCE STORE

        fetch(BTCBN).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBTCBN = [Number(info.price)]
        }) 

        fetch(ETHBN).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredETHBN = [Number(info.price)]
        })

        fetch(BCHBN).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBCHBN = [Number(info.price)]     
        }) 

        fetch(LTCBN).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredLTCBN = [Number(info.price)]   
        }) 

        // BITCOIN TRADE STORE

        fetch(BTCBT).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBTCBT = [Number(info.data.buy)]
        }) 

        fetch(ETHBT).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredETHBT = [Number(info.data.buy)]
        })

        fetch(BCHBT).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredBCHBT= [Number(info.data.buy)]     
        }) 

        fetch(LTCBT).then( res => {
            return res.json()
        }).then( info => {
            numeroStoredLTCBT = [Number(info.data.buy)]   
        }) 
    }

function valorRealtime(){

                // VALOR DO DOLAR ECONOMIA
                fetch(USD_BRL).then( res => {
                    return res.json()
                }).then( info => {
                numeroRealtimeUSD = [Number(info[0].bid).toFixed(2)]
                    tdUSD.innerHTML = `<h1><strong>R$ ${numeroRealtimeUSD}`
                })
                // USDC MERCADO BITCOIN COMPRA
                
                fetch(USDCMB).then( res => {
                    return res.json()
                }).then( info => {
                    numeroRealtimeUSDCMB = [Number(info.ticker.buy).toFixed(2)]
                    tdUSDCMB.innerHTML =`<strong>${numeroRealtimeUSDCMB}`
                }) 
                // USDC MERCADO BITCOIN VENDA
                fetch(USDCMB).then( res => {
                    return res.json()
                }).then( info => {
                    numeroRealtimeUSDCMBV = [Number(info.ticker.sell).toFixed(2)]
                    tdUSDCMBV.innerHTML =`<strong>${numeroRealtimeUSDCMBV}`
                }) 

                // DAI BITCOIN TRADE COMPRA
                fetch(DAIBT).then( res => {
                    return res.json()
                }).then( info => {
                    numeroRealtimeDAIBT = [Number(info.data.buy).toFixed(2)]
                    tdDAIBT.innerHTML = `<strong>${numeroRealtimeDAIBT}`

                })
                // DAI BITCOIN TRADE VENDA
                fetch(DAIBT).then( res => {
                    return res.json()
                }).then( info => {
                    numeroRealtimeDAIBTV = [Number(info.data.sell).toFixed(2)]
                    tdDAIBTV.innerHTML = `<strong>${numeroRealtimeDAIBTV}`

                })

        //REALTIME MERCADO BITCOIN COMPRA
                    fetch(BTCMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeBTCMB = [Number(info.ticker.buy).toFixed(2)]
                        tdBTCMBC.innerHTML =`<strong>${numeroRealtimeBTCMB}`
                    }) 

                    fetch(ETHMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeETHMB = [Number(info.ticker.buy).toFixed(2)]//Number(info.ticker.buy).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                        tdETHMBC.innerHTML = `<strong>${numeroRealtimeETHMB}`
                        
                        // console.log(`ETH Mercado Bitcoin: R$${valor}`) //+ Number(info.ticker.buy).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}).replace(',','.'))
                    })
                    fetch(BCHMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeBCHMB = [Number(info.ticker.buy).toFixed(2)]//Number(data.ticker.last).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        tdBCHMBC.innerHTML = `<strong> ${numeroRealtimeBCHMB}` 
                    })

                    fetch(LTCMB)
                    .then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeLTCMB =[Number(info.ticker.buy).toFixed(2)]//Number(data.ticker.last).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                        tdLTCMBC.innerHTML = `<strong>${numeroRealtimeLTCMB}`
                    })

                    fetch(XRPMB).then( res => {
                        return res.json()
                    }).then(info => {
                        numeroRealtimeXRPMB = [Number(info.ticker.buy).toFixed(2)]
                        tdXRPMBC.innerHTML = `<strong> ${numeroRealtimeXRPMB}`
                    })
                    
                // VENDA MERCADO BITCOIN
                    fetch(BTCMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeBTCMBV = [Number(info.ticker.sell).toFixed(2)]
                        tdBTCMBV.innerHTML =`<strong>${numeroRealtimeBTCMBV}`
                    }) 

                    fetch(ETHMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeETHMBV = [Number(info.ticker.sell).toFixed(2)]//Number(info.ticker.buy).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                        tdETHMBV.innerHTML = `<strong>${numeroRealtimeETHMBV}`
                        
                        // console.log(`ETH Mercado Bitcoin: R$${valor}`) //+ Number(info.ticker.buy).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'}).replace(',','.'))
                    })
                    fetch(BCHMB).then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeBCHMBV = [Number(info.ticker.sell).toFixed(2)]//Number(data.ticker.last).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                        tdBCHMBV.innerHTML = `<strong> ${numeroRealtimeBCHMBV}`               
                    })

                    fetch(LTCMB)
                    .then( res => {
                        return res.json()
                    }).then( info => {
                        numeroRealtimeLTCMBV =[Number(info.ticker.sell).toFixed(2)]//Number(data.ticker.last).toLocaleString('pt-BR', {style: 'currency', currency:'BRL'})
                        tdLTCMBV.innerHTML = `<strong>${numeroRealtimeLTCMBV}`
                    })

                    fetch(XRPMB).then( res => {
                        return res.json()
                    }).then(info => {
                        numeroRealtimeXRPMBV = [Number(info.ticker.sell).toFixed(2)]
                        tdXRPMBV.innerHTML = `<strong> ${numeroRealtimeXRPMBV}`
                    })
        // BINANCE REALTIME
            fetch(BTCBN).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBTCBN = Number(info.price).toFixed(2)//Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency:'USD'})
                // tdBTCBN.innerHTML = `<strong>US$ ${numeroRealtimeBTCBN}`//`BTC USD Binance: ` + Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
                // console.log(`BTC USD Binance: ` + Number(info.price).toLocaleString('us-US', {style: 'currency', currency: 'USD', maximumSignificantDigits: 5}).replace(',','.'))
            })

            fetch(ETHBN).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeETHBN = Number(info.price).toFixed(2)//Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
                // tdETHBN.innerHTML = `<strong>${numeroRealtimeETHBN}`
            })

            fetch(LTCBN).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeLTCBN= Number(info.price).toFixed(2)//Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
                // tdLTCBN.innerHTML = `<strong>${numeroRealtimeLTCBN}`
            })

            fetch(BCHBN).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBCHBN = Number(info.price).toFixed(2) //Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
                // tdBCHBN.innerHTML = `<strong>${numeroRealtimeBCHBN}`
            })

            fetch(XRPBN).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeXRPBN = Number(info.price).toFixed(2) //Number(info.price).toLocaleString('pt-BR', {style: 'currency', currency: 'USD'})
                // tdBCHBN.innerHTML = `<strong>${numeroRealtimeBCHBN}`
            })

// BITCOIN TRADE REALTIME

            fetch(BTCBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBTCBT = [Number(info.data.buy).toFixed(2)]   
                tdBTCBT.innerHTML = `<strong>${numeroRealtimeBTCBT}` 
            }) 

            fetch(ETHBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeETHBT = [Number(info.data.buy).toFixed(2)]   
                tdETHBT.innerHTML = `<strong>${numeroRealtimeETHBT}` 
            })

            fetch(BCHBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBCHBT = [Number(info.data.buy).toFixed(2)]   
                tdBCHBT.innerHTML = `<strong>${numeroRealtimeBCHBT}` 
            }) 

            fetch(LTCBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeLTCBT = [Number(info.data.buy).toFixed(2)]   
                tdLTCBT.innerHTML = `<strong>${numeroRealtimeLTCBT}`   
            }) 

            fetch(XRPBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeXRPBT = [Number(info.data.buy).toFixed(2)]   
                tdXRPBT.innerHTML = `<strong>${numeroRealtimeXRPBT}`   
            }) 

            // VENDA

            fetch(BTCBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBTCBTV = [Number(info.data.sell).toFixed(2)]   
                tdBTCBTV.innerHTML = `<strong>${numeroRealtimeBTCBTV}` 
            }) 

            fetch(ETHBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeETHBTV = [Number(info.data.sell).toFixed(2)]   
                tdETHBTV.innerHTML = `<strong>${numeroRealtimeETHBTV}` 
            })

            fetch(BCHBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeBCHBTV = [Number(info.data.sell).toFixed(2)]   
                tdBCHBTV.innerHTML = `<strong>${numeroRealtimeBCHBTV}` 
            }) 

            fetch(LTCBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeLTCBTV = [Number(info.data.sell).toFixed(2)]   
                tdLTCBTV.innerHTML = `<strong>${numeroRealtimeLTCBTV}`   
            })  

            fetch(XRPBT).then( res => {
                return res.json()
            }).then( info => {
                numeroRealtimeXRPBTV = [Number(info.data.sell).toFixed(2)]   
                tdXRPBTV.innerHTML = `<strong>${numeroRealtimeXRPBTV}`   
            }) 
            
            // CALCULO USD COMPRA BTC MB
            function valorUSD(params) {
                
            }
            const valorUSDBTCMB_C = document.querySelector("td#valorUSDBTCMB_C")
            let valorUSDBTCMBView = Number(calculoBT (numeroRealtimeBTCMB , numeroRealtimeBTCBN)).toFixed(2)
            valorUSDBTCMB_C.innerHTML = `<strong>${valorUSDBTCMBView}`
            // CALCULO USD COMPRA ETH MB
            const valorUSDETHMB_C = document.querySelector("td#valorUSDETHMB_C")
            let valorUSDETHMBView = Number(calculoBT(numeroRealtimeETHMB,numeroRealtimeETHBN))
            valorUSDETHMB_C.innerHTML = `<strong>${valorUSDETHMBView}`
            // CALCULO USD COMPRA BCH MB
            const valorUSDBCHMB_C = document.querySelector("td#valorUSDBCHMB_C")
            let valorUSDBCHMBView = Number(calculoBT(numeroRealtimeBCHMB,numeroRealtimeBCHBN))
            valorUSDBCHMB_C.innerHTML = `<strong>${valorUSDBCHMBView}`
            // CALCULO USD COMPRA LTC MB
            const valorUSDLTCMB_C = document.querySelector("td#valorUSDLTCMB_C")
            let valorUSDLTCMBView = Number(calculoBT(numeroRealtimeLTCMB,numeroRealtimeLTCBN))
            valorUSDLTCMB_C.innerHTML = `<strong>${valorUSDLTCMBView}`
            // CALCULO USD COMPRA XRP MB
            const valorUSDXRPMB_C = document.querySelector("td#valorUSDXRPMB_C")
            let valorUSDXRPMBView = Number(calculoBT(numeroRealtimeXRPMB,numeroRealtimeXRPBN))
            valorUSDXRPMB_C.innerHTML = `<strong>${valorUSDXRPMBView}`

            // CALCULO USD VENDA BTC MB
            const valorUSDBTCMB_V = document.querySelector("td#valorUSDBTCMB_V")
            let valorUSDBTCMBView_V = Number(calculoBT(numeroRealtimeBTCMBV,numeroRealtimeBTCBN))
            valorUSDBTCMB_V.innerHTML =  `<strong>${valorUSDBTCMBView_V}`
            // CALCULO USD VENDA ETH MB
            const valorUSDETHMB_V = document.querySelector("td#valorUSDETHMB_V")
            let valorUSDETHMBView_V = Number(calculoBT(numeroRealtimeETHMBV,numeroRealtimeETHBN))
            valorUSDETHMB_V.innerHTML = `<strong>${valorUSDETHMBView_V}`
            // CALCULO USD VENDA BCH MB
            const valorUSDBCHMB_V = document.querySelector("td#valorUSDBCHMB_V")
            let valorUSDBCHMBView_V = Number(calculoBT(numeroRealtimeBCHMBV,numeroRealtimeBCHBN))
            valorUSDBCHMB_V.innerHTML = `<strong>${valorUSDBCHMBView_V}`
            // CALCULO USD VENDA LTC MB
            const valorUSDLTCMB_V = document.querySelector("td#valorUSDLTCMB_V")
            let valorUSDLTCMBView_V = Number(calculoBT(numeroRealtimeLTCMBV,numeroRealtimeLTCBN))
            valorUSDLTCMB_V.innerHTML = `<strong>${valorUSDLTCMBView_V}`
             // CALCULO USD VENDA XRP MB
             const valorUSDXRPMB_V = document.querySelector("td#valorUSDXRPMB_V")
             let valorUSDXRPMBView_V = Number(calculoBT(numeroRealtimeXRPMBV,numeroRealtimeXRPBN))
             valorUSDXRPMB_V.innerHTML = `<strong>${valorUSDXRPMBView_V}`

           //CALCULO USD COMPRA BTC BT
           const valorUSDBTCBT_C = document.querySelector("td#valorUSDBTCBT_C")
           let valorUSDBTCBTView = Number(calculoBT(numeroRealtimeBTCBT,numeroRealtimeBTCBN))
           valorUSDBTCBT_C.innerHTML = `<strong>${valorUSDBTCBTView}`
            // CALCULO USD COMPRA ETH BT
            const valorUSDETHBT_C = document.querySelector("td#valorUSDETHBT_C")
            let valorUSDETHBTView = Number(calculoBT(numeroRealtimeETHBT,numeroRealtimeETHBN))
            valorUSDETHBT_C.innerHTML = `<strong>${valorUSDETHBTView}`
            // CALCULO USD COMPRA BCH BT
            const valorUSDBCHBT_C = document.querySelector("td#valorUSDBCHBT_C")
            let valorUSDBCHBTView =  Number(calculoBT(numeroRealtimeBCHBT,numeroRealtimeBCHBN))
            valorUSDBCHBT_C.innerHTML = `<strong>${valorUSDBCHBTView}`
            // CALCULO USD COMPRA LTC BT
            const valorUSDLTCBT_C = document.querySelector("td#valorUSDLTCBT_C")
            let valorUSDLTCBTView = Number(calculoBT(numeroRealtimeLTCBT,numeroRealtimeLTCBN))
            valorUSDLTCBT_C.innerHTML = `<strong>${valorUSDLTCBTView}`
            
            // CALCULO USD COMPRA XRP BT
            const valorUSDXRPBT_C = document.querySelector("td#valorUSDXRPBT_C")
            let valorUSDXRPBTView = Number(calculoBT(numeroRealtimeXRPBT,numeroRealtimeXRPBN))
            valorUSDXRPBT_C.innerHTML = `<strong>${valorUSDXRPBTView}`

             // CALCULO USD VENDA BTC BT
            const valorUSDBTCBT_V = document.querySelector("td#valorUSDBTCBT_V")
            let valorUSDBTCBTView_V = Number(calculoBT(numeroRealtimeBTCBTV,numeroRealtimeBTCBN))
            valorUSDBTCBT_V.innerHTML = `<strong>${valorUSDBTCBTView_V}`
              // CALCULO USD VENDA ETH BT
            const valorUSDETHBT_V = document.querySelector("td#valorUSDETHBT_V")
            let valorUSDETHBTView_V = Number(calculoBT(numeroRealtimeETHBTV,numeroRealtimeETHBN))
            valorUSDETHBT_V.innerHTML = `<strong>${valorUSDETHBTView_V}`
            // CALCULO USD VENDA BCH BT
            const valorUSDBCHBT_V = document.querySelector("td#valorUSDBCHBT_V")
            let valorUSDBCHBTView_V = Number(calculoBT(numeroRealtimeBCHBTV,numeroRealtimeBCHBN))
            valorUSDBCHBT_V.innerHTML = `<strong>${valorUSDBCHBTView_V}`
            // CALCULO USD VENDA LTC BT
            const valorUSDLTCBT_V = document.querySelector("td#valorUSDLTCBT_V")
            let valorUSDLTCBTView_V = Number(calculoBT(numeroRealtimeLTCBTV,numeroRealtimeLTCBN))
            valorUSDLTCBT_V.innerHTML = `<strong>${valorUSDLTCBTView_V}`
             // CALCULO USD VENDA XRP BT
             const valorUSDXRPBT_V = document.querySelector("td#valorUSDXRPBT_V")
             let valorUSDXRPBTView_V = Number(calculoBT(numeroRealtimeXRPBTV,numeroRealtimeXRPBN))
             valorUSDXRPBT_V.innerHTML = `<strong>${valorUSDXRPBTView_V}`

// **************** CONDICOES ****************

        //USD COMPRA BTC
            if (valorUSDBTCMBView < valorUSDBTCBTView){
                mudaVerd(valorUSDBTCMB_C) , mudaVerm(valorUSDBTCBT_C)
            }else if (valorUSDBTCMBView > valorUSDBTCBTView){
                mudaVerm(valorUSDBTCMB_C) , mudaVerd(valorUSDBTCBT_C)
            }else{
                mudaAmar(valorUSDBTCBT_C), mudaAmar(valorUSDBTCMB_C)
            }

        //USD COMPRA ETH
            if (valorUSDETHMBView < valorUSDETHBTView){
                mudaVerd(valorUSDETHMB_C) , mudaVerm(valorUSDETHBT_C)
            }else if (valorUSDETHMBView > valorUSDETHBTView){
                mudaVerm(valorUSDETHMB_C) , mudaVerd(valorUSDETHBT_C)
            }else{
                mudaAmar(valorUSDETHBT_C) , mudaAmar(valorUSDETHMB_C)
            } 

        //USD COMPRA BCH
            if (valorUSDBCHMBView < valorUSDBCHBTView){
                mudaVerd(valorUSDBCHMB_C) , mudaVerm(valorUSDBCHBT_C)
            } else if (valorUSDBCHMBView > valorUSDBCHBTView){
                mudaVerm(valorUSDBCHMB_C) , mudaVerd(valorUSDBCHBT_C)
            } else {
                mudaAmar(valorUSDBCHBT_C), mudaAmar(valorUSDBCHMB_C)
            }
 
        //USD COMPRA LTC

            if (valorUSDLTCMBView < valorUSDLTCBTView){
                mudaVerd(valorUSDLTCMB_C) , mudaVerm(valorUSDLTCBT_C)
            }else if (valorUSDLTCMBView > valorUSDLTCBTView){
                mudaVerm(valorUSDLTCMB_C) , mudaVerd(valorUSDLTCBT_C)
            }else {
                mudaAmar(valorUSDLTCMB_C), mudaAmar(valorUSDLTCBT_C)
            }

        //USD COMPRA XRP

            if (valorUSDXRPMBView < valorUSDXRPBTView){
                mudaVerd(valorUSDXRPMB_C) , mudaVerm(valorUSDXRPBT_C)
            }else if (valorUSDXRPMBView > valorUSDXRPBTView){
                mudaVerm(valorUSDXRPMB_C) , mudaVerd(valorUSDXRPBT_C)
            }else {
                mudaAmar(valorUSDXRPMB_C), mudaAmar(valorUSDXRPBT_C)
            }

        // VENDA USD BTC

            if(valorUSDBTCMBView_V > valorUSDBTCBTView_V){
                mudaVerd(valorUSDBTCMB_V) , mudaVerm(valorUSDBTCBT_V)
            }else if(valorUSDBTCMBView_V < valorUSDBTCBTView_V){
                mudaVerm(valorUSDBTCMB_V) , mudaVerd(valorUSDBTCBT_V)
            }else{
                mudaAmar(valorUSDBTCBT_V), mudaAmar(valorUSDBTCMB_V)
            }
           // VENDA USD ETH
           if(valorUSDETHMBView_V > valorUSDETHBTView_V){
                mudaVerd(valorUSDETHMB_V) , mudaVerm(valorUSDETHBT_V)
            } else if(valorUSDETHMBView_V < valorUSDETHBTView_V){
                mudaVerm(valorUSDETHMB_V) , mudaVerd(valorUSDETHBT_V)
            }  else{
                mudaAmar(valorUSDETHBT_V), mudaAmar(valorUSDETHMB_V)
            }

            // VENDA USD BCH
            if(valorUSDBCHMBView_V > valorUSDBCHBTView_V){
                mudaVerd(valorUSDBCHMB_V) , mudaVerm(valorUSDBCHBT_V)
            } else if(valorUSDBCHMBView_V < valorUSDBCHBTView_V){
                mudaVerm(valorUSDBCHMB_V) , mudaVerd(valorUSDBCHBT_V)
            } else{
                mudaAmar(valorUSDBCHMB_V), mudaAmar(valorUSDBCHBT_V)
            }


            // VENDA USD LTC
            if(valorUSDLTCMBView_V > valorUSDLTCBTView_V){
                mudaVerd(valorUSDLTCMB_V) , mudaVerm(valorUSDLTCBT_V)
            }else if(valorUSDLTCMBView_V < valorUSDLTCBTView_V){
                mudaVerm(valorUSDLTCMB_V) , mudaVerd(valorUSDLTCBT_V)
            }else{
                mudaAmar(valorUSDLTCBT_V) , mudaAmar(valorUSDLTCMB_V)
            }

               // VENDA USD XRP
               if(valorUSDXRPMBView_V > valorUSDXRPBTView_V){
                mudaVerd(valorUSDXRPMB_V) , mudaVerm(valorUSDXRPBT_V)
            }else if(valorUSDXRPMBView_V < valorUSDXRPBTView_V){
                mudaVerm(valorUSDXRPMB_V) , mudaVerd(valorUSDXRPBT_V)
            }else{
                mudaAmar(valorUSDXRPBT_V) , mudaAmar(valorUSDXRPMB_V)
            }
        }

function mudaVerm(td){
    td.style.backgroundColor = '#ff0000';
}
function mudaVerd(td){
    td.style.backgroundColor = '#00ca10';
}
function mudaAmar(td){
    td.style.backgroundColor = '#ffbb00';
}

// function mercadobitcoinConditions(){
//                 function comparaBTCMB(){ //BTC COMPRA MB
//                         if ( numeroStoredBTCMB < numeroRealtimeBTCMB){
//                             mudaVerd(tdBTCMBC)
//                         }else if(numeroStoredBTCMB > numeroRealtimeBTCMB ){
//                             mudaVerm(tdBTCMBC)
//                         }else{
//                             mudaAmar(tdBTCMBC)
//                         }
//                 }

//                 function comparaBTCMBV(){ //BTC VENDA MB
//                     if ( numeroStoredBTCMBV < numeroRealtimeBTCMBV){
//                         mudaVerd(tdBTCMBV)
//                     }else if(numeroStoredBTCMBV > numeroRealtimeBTCMBV){
//                         mudaVerm(tdBTCMBV)
//                     }else{
//                         mudaAmar(tdBTCMBV)
//                     }
//             }

//                 function comparaETHMB(){ //ETH COMPRA MB
//                     if ( numeroStoredETHMB < numeroRealtimeETHMB){
//                         mudaVerd(tdETHMBC)
//                     }else if(numeroStoredETHMB > numeroRealtimeETHMB){
//                         mudaVerm(tdETHMBC)
//                     }else{
//                         mudaAmar(tdETHMBC)
//                     }
//             }

//             function comparaETHMBV(){ //ETH VENDA MB
//                 if ( numeroStoredETHMBV < numeroRealtimeETHMBV){
//                     mudaVerd(tdETHMBV)
//                 }else if(numeroStoredETHMBV > numeroRealtimeETHMBV){
//                     mudaVerm(tdETHMBV)
//                 }else{
//                     mudaAmar(tdETHMBV)
//                 }
//         }
//                 function comparaBCHMB(){ //BCH COMPRA MB
//                     if ( numeroStoredBCHMB < numeroRealtimeBCHMB){
//                         mudaVerd(tdBCHMBC)
//                     }else if(numeroStoredBCHMB > numeroRealtimeBCHMB){
//                         mudaVerm(tdBCHMBC)
//                     }else{
//                         mudaAmar(tdBCHMBC)
//                     }
//                 }

//                 function comparaBCHMBV(){ //BCH VENDA MB
//                     if ( numeroStoredBCHMBV < numeroRealtimeBCHMBV){
//                         mudaVerd(tdBCHMBV)
//                     }else if(numeroStoredBCHMBV > numeroRealtimeBCHMBV){
//                         mudaVerm(tdBCHMBV)
//                     }else{
//                         mudaAmar(tdBCHMBV)
//                     }
//                 }

//             function comparaLTCMB(){ //LTC COMPRA MB
//                 if ( numeroStoredLTCMB < numeroRealtimeLTCMB){
//                     mudaVerd(tdLTCMBC)
//                 }else if(numeroStoredLTCMB > numeroRealtimeLTCMB){
//                     mudaVerm(tdLTCMBC)
//                 }else{
//                     mudaAmar(tdLTCMBC)
//                 }
//             }

//             function comparaLTCMBV(){ //LTC VENDA MB
//                 if ( numeroStoredLTCMBV < numeroRealtimeLTCMBV){
//                     mudaVerd(tdLTCMBV)
//                 }else if(numeroStoredLTCMBV > numeroRealtimeLTCMBV){
//                     mudaVerm(tdLTCMBV)
//                 }else{
//                     mudaAmar(tdLTCMBV)
//                 }
//             }
//             comparaBTCMB(), comparaBTCMBV(), 
//             comparaETHMB(), comparaETHMBV(), 
//             comparaBCHMB(), comparaBCHMBV(), 
//             comparaLTCMB(), comparaLTCMBV()
// }

// function binanceConditions(){
//         function comparaBTCBN(){
//             if ( numeroStoredBTCBN < numeroRealtimeBTCBN){
//                 mudaVerd(tdBTCBN)
//             }else if(numeroStoredBTCBN > numeroRealtimeBTCBN ){
//                 mudaVerm(tdBTCBN)
//             }else{
//                 mudaAmar(tdBTCBN)
//             }
//         }

//         function comparaETHBN(){
//             if ( numeroStoredETHBN < numeroRealtimeETHBN){
//                 mudaVerd(tdETHBN)
//             }else if(numeroStoredETHBN > numeroRealtimeETHBN){
//                 mudaVerm(tdETHBN)
//             }else{
//                 mudaAmar(tdETHBN)
//             }
//         }
//         function comparaBCHBN(){
//             if ( numeroStoredBCHBN < numeroRealtimeBCHBN){
//             mudaVerd(tdBCHBN)
//             }else if(numeroStoredBCHBN > numeroRealtimeBCHBN){
//             mudaVerm(tdBCHBN)
//             }else{
//             mudaAmar(tdBCHBN)
//             }
//         }

//         function comparaLTCBN(){
//             if ( numeroStoredLTCBN < numeroRealtimeLTCBN){
//             mudaVerd(tdLTCBN)
//             }else if(numeroStoredLTCBN > numeroRealtimeLTCBN){
//             mudaVerm(tdLTCBN)
//             }else{
//             mudaAmar(tdLTCBN)
//             }
//         }
//         comparaBTCBN(), comparaETHBN(), comparaBCHBN(), comparaLTCBN()
// }

// function bitcointradeConditions(){

//     // COMPRA BITCOIN TRADE
//     function comparaBTCBT(){
//         if ( numeroStoredBTCBT < numeroRealtimeBTCBT){
//             mudaVerd(tdBTCBN)
//         }else if(numeroStoredBTCBT > numeroRealtimeBTCBT ){
//             mudaVerm(tdBTCBT)
//         }else{
//             mudaAmar(tdBTCBT)
//         }
//     }

//     function comparaETHBT(){
//         if ( numeroStoredETHBT < numeroRealtimeETHBT){
//             mudaVerd(tdETHBT)
//         }else if(numeroStoredETHBT> numeroRealtimeETHBT){
//             mudaVerm(tdETHBT)
//         }else{
//             mudaAmar(tdETHBT)
//         }
//     }
//     function comparaBCHBT(){
//         if ( numeroStoredBCHBT < numeroRealtimeBCHBT){
//         mudaVerd(tdBCHBT)
//         }else if(numeroStoredBCHBT > numeroRealtimeBCHBT){
//         mudaVerm(tdBCHBT)
//         }else{
//         mudaAmar(tdBCHBT)
//         }
//     }

//     function comparaLTCBT(){
//         if ( numeroStoredLTCBT < numeroRealtimeLTCBT){
//         mudaVerd(tdLTCBT)
//         }else if(numeroStoredLTCBT > numeroRealtimeLTCBT){
//         mudaVerm(tdLTCBT)
//         }else{
//         mudaAmar(tdLTCBT)
//         }
//     }

//     // VENDA BITCOIN TRADE

//     function comparaBTCBTV(){
//         if ( numeroStoredBTCBTV < numeroRealtimeBTCBTV){
//             mudaVerd(tdBTCBNV)
//         }else if(numeroStoredBTCBTV > numeroRealtimeBTCBTV ){
//             mudaVerm(tdBTCBTV)
//         }else{
//             mudaAmar(tdBTCBTV)
//         }
//     }

//     function comparaETHBTV(){
//         if ( numeroStoredETHBTV < numeroRealtimeETHBTV){
//             mudaVerd(tdETHBTV)
//         }else if(numeroStoredETHBTV> numeroRealtimeETHBTV){
//             mudaVerm(tdETHBTV)
//         }else{
//             mudaAmar(tdETHBTV)
//         }
//     }
//     function comparaBCHBTV(){
//         if ( numeroStoredBCHBTV < numeroRealtimeBCHBTV){
//         mudaVerd(tdBCHBTV)
//         }else if(numeroStoredBCHBTV > numeroRealtimeBCHBTV){
//         mudaVerm(tdBCHBTV)
//         }else{
//         mudaAmar(tdBCHBTV)
//         }
//     }
//     function comparaLTCBTV(){
//         if ( numeroStoredLTCBTV < numeroRealtimeLTCBTV){
//         mudaVerd(tdLTCBTV)
//         }else if(numeroStoredLTCBTV > numeroRealtimeLTCBTV){
//         mudaVerm(tdLTCBTV)
//         }else{
//         mudaAmar(tdLTCBTV)
//         }
//     }
//     comparaBTCBT(), comparaBTCBTV(),
//     comparaETHBT(), comparaETHBTV(),
//     comparaBCHBT(), comparaBCHBTV(), 
//     comparaLTCBT(), comparaLTCBTV()
// }

function callStore(){
    valorStored()//, mercadobitcoinConditions(), binanceConditions(), bitcointradeConditions()
}

        valorRealtime()
        setInterval(callStore,10000)
        setInterval(valorRealtime, 10999)   