
// відповідає за реагування на кліки користувача
class ListenerManager{
    constructor(app) {
        this.app = app
    }
    setListeners(){
        this.setChangeCurrencyListener();
        this.setSendCurrencyListener();
        this.setMnemonicListeners();
    }

    setChangeCurrencyListener(){
        let elements = document.getElementsByClassName("change-currency");
        for(let i = 0;i<elements.length; i++){
            let element = elements[i];
            element.addEventListener("click",(event)=>{
                console.log("change currency event fired");
                let element = event.currentTarget;
                console.log("currentTarget");
                let currency = element.getAttribute("data-value");
                this.app.changeCurrency(currency);
            });
        }
    }

    setSendCurrencyListener(){
        document.getElementById("send_button").addEventListener("click",
            async(event)=>{
            let _address = document.getElementById("transfer_address").value;
            let _amount=document.getElementById("transfer_amount").value;
            try{
                let result = await this.app.sendCurrency(_address,_amount);
                alert(result);
            }catch (e){
                alert(e.message);
            }

        })
    }

    setMnemonicListeners(){
        this.setGenerateMnemonicListener();
        this.setImportMnemonicOnInputListener();
    }

    setGenerateMnemonicListener(){
        document.getElementById("generate_mnemonic").addEventListener("click",async()=>{
            let mnemonic = await this.app.generateMnemonic();
            alert(mnemonic);
        })
    }

    setImportMnemonicOnInputListener(){
        document.getElementById("import_mnemonic").addEventListener("input",async()=>{
            let element = event.target || event.srcElement;
            let mnemonic = element.value;
            console.log(mnemonic);
            this.app.importMnemonic(mnemonic);
        })
    }

}

module.exports = ListenerManager;