
// відповідає за реагування на кліки користувача
class ListenerManager{
    constructor(app) {
        this.app = app
    }
    setListeners(){
        this.setChangeCurrencyListener();
        this.setSendCurrencyListener();
    }

    setChangeCurrencyListener(){
        let elements = document.getElementsByClassName("currency_container");
        for(let i = 0;i<elements.length; i++){
            let element = elements[i];
            element.addEventListener("click",(event)=>{
                let element = event.target.parentNode;
                let currency = element.getAttribute("data-value");
                this.app.changeCurrency(currency);
            });
        }
    }

    setSendCurrencyListener(){
        document.getElementById("send_button").addEventListener("click",(event)=>{
            this.app.sendCurrency();
        })
    }

}
