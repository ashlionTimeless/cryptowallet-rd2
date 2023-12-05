const DEFAULT_CURRENCY = "ETH";
const Renderer = require("./ui/Renderer");
const ListenerManager = require("./ui/ListenerManager");
const WalletUI = require("./ui/WalletUI");
const BlockchainService = require('./blockchain/BlockchainService');

class Application{

    constructor() {
        this.currency = DEFAULT_CURRENCY;
        let renderer = new Renderer(this);
        let listenerManager = new ListenerManager(this);
        let walletUi = new WalletUI(this,listenerManager,renderer);
        this.setWalletUI(walletUi);
        let blockchainService = new BlockchainService(this);
        this.blockchainService = blockchainService;
    }

    setWalletUI(walletUi){
        this.walletUi = walletUi;
    }

    getWalletUi(){
        return this.walletUi;
    }

    prepareUI(){
        this.walletUi.prepareUI();
    }
    getCurrency(){
        return this.currency;
    }

    changeCurrency(currency){
        this.setCurrency(currency);
        this.getWalletUi().prepareUI();
    }

    setCurrency(currency){
        this.currency = currency;
    }

    sendCurrency(receiver,amount){
        return this.blockchainService.sendCurrency(receiver,amount);
    }


    getAddress(){
        return new Promise(async(resolve,reject)=>{
            try{
                let result = await this.blockchainService.getAddress();
                return resolve(result);
            }catch (e){
                console.error(e);
                return reject(e);
            }
        })
    }

    getCurrentBalance(){
        return new Promise(async(resolve,reject)=>{
            try{
                let result = await this.blockchainService.getCurrentBalance();
                return resolve(result);
            }catch (e){
                return reject(e);
            }
        })
    }
}

module.exports = Application;