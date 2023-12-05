const DEFAULT_CURRENCY = "ETH";
const Renderer = require("./ui/Renderer");
const ListenerManager = require("./ui/ListenerManager");
const WalletUI = require("./ui/WalletUI");
const BlockchainService = require('./blockchain/BlockchainService');

class Application{

    constructor() {
        console.log("Application is being constructed")
        this.currency = DEFAULT_CURRENCY;
        let renderer = new Renderer(this);
        let listenerManager = new ListenerManager(this);
        let walletUi = new WalletUI(this,listenerManager,renderer);
        this.walletUi = walletUi;
        let blockchainService = new BlockchainService(this);
        this.blockchainService = blockchainService;
        console.log("Application is ready")
    }

    setWalletUI(walletUi){
        this.walletUi = walletUi;
    }

    getWalletUi(){
        return this.walletUi;
    }

    prepareUI(){
        console.log("app prepareUI")
        this.walletUi.prepareUI();
    }
    getCurrency(){
        return this.currency;
    }

    changeCurrency(currency){
        this.setCurrency(currency);
        this.getWalletUi().renderUI();
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
                console.log("Application.getAddress",result);
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