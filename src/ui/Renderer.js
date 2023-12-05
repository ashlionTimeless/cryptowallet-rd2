// відповідає за рендер елементів в додатку

class Renderer{

    constructor(app) {
        this.app = app
    }
    renderUI(){
        console.log("renderer renderUi")
        this.renderCurrency();
        this.renderBalance();
        this.renderAddress();
    }
    renderCurrency(){
        console.log("renderer renderCurrency")
        let currency = this.app.getCurrency();
        let elements = document.getElementsByClassName("currency_symbol");
        //for loop
        for(let i=0; i<elements.length;i++){
            let element = elements[i];
            element.innerHTML=currency;
        }
    }

    renderBalance(){
        this.app.getCurrentBalance().then((balance)=>{
            let element = document.getElementById("balance");
            element.innerHTML=balance;
        }).catch((e)=>{
            console.error(e);
        });
    }

    renderAddress(){
        this.app.getAddress().then((address)=>{
            console.log("Renderer.renderAddress",address);
            let element = document.getElementById("address");
            element.innerHTML=address;
        }).catch((e)=>{
            console.error(e);
        });
    }
}

module.exports = Renderer;