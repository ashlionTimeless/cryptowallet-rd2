const EthLib = require('/src/blockchain/eth/EthLib');
const PROVIDER_URL = require("/src/isProduction")?process.env.PROD_BNB_PROVIDER_URL:process.env.DEV_BNB_PROVIDER_URL;
const buildProvider = require('/src/blockchain/eth/ProviderBuilder');
const BnbNetworkHelper = require("../bnb/BnbNetworkHelper");
class BnbLib extends EthLib{
    constructor(app) {
        super(app);
        this.provider = buildProvider(PROVIDER_URL);
    }

    _getChainId(){
        return BnbNetworkHelper.getNetwork();
    }
}
module.exports = BnbLib;