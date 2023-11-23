const DEFAULT_CURRENCY = "ETH";

class Application{

    constructor() {
        this.currency = DEFAULT_CURRENCY;
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

    sendCurrency(){
        return this.blockchainService.sendCurrency();
    }

    getAddress(){
        return this.blockchainService.getAddress();
    }

    getBalance(){
        return this.blockchainService.getBalance();
    }
}