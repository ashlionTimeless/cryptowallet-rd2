const wallet_validator= require('wallet-address-validator');
const AbstractCurrencyValidator= require('./AbstractCurrencyValidator');
const BTC = "BTC";
class BtcValidator extends AbstractCurrencyValidator{
    validateAddress(address){
        if(!wallet_validator.validate(address,this.getSymbol(),"both")){
            throw new Error('Invalid Bitcoin Address');
        }
    }

    getSymbol(){
        return BTC;
    }
}

module.exports = BtcValidator;