let default_balance = 999.9;
let default_address = "0x03170A61fA4546CEA276337470AdB5E8f6b52432";

// відповідає за отримання балансу, за отримання адреси і за надсилання транзакцій
class BlockchainService{
    constructor(app) {
        this.app = app
    }
    getBalance(){
        return default_balance;
    }

    getAddress(){
        return default_address;
    }
    //
    sendCurrency(){
        let _address = document.getElementById("transfer_address").value;
        console.log(_address);
        let _amount=document.getElementById("transfer_amount").value;
        let currency = this.app.getCurrency();
        console.log(currency)
        let result = "Sending "+_amount+" "+currency+" to "+_address;
        alert(result);
    }
}