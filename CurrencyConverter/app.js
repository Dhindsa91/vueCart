new Vue({
    el: '#app',
    data: {

        currencies: {},
        amount: 0,
        from: '',
        to: '',
        result: 0,
        loading: false,
    
    },

    mounted() {

     this.getCurrencies();
       

    },

    // computed properties always refresh themselves when the value changes 
    computed:{

        formattedCurrencies(){

            return Object.values(this.currencies);
        },
        calculatedResult(){

            return (this.amount * this.result).toFixed(3);

        },
        disabled(){
            return this.amount ===0 || this.loading ;
        }

    },
    methods:{
        getCurrencies(){

            const currencies = localStorage.getItem('currencies');

            // if(currencies){

            //     this.currencies = JSON.parse(currencies);

            //     return;
            // }

            axios.get("https://free.currconv.com/api/v7/currencies?apiKey=do-not-use")
            .then(res => {
                
              this.currencies = res.data.results;

              localStorage.setItem("currencies", JSON.stringify(res.data.results)); //this is so there arent many requests made to api 

            })
          

        },
        convertCurrency(){
           
            const key = `${this.from}_${this.to}`;
            this.loading ==true;

            axios.get(`https://free.currconv.com/api/v7/convert?q=${this.from}_${this.to}&compact=ultra&apiKey=7d5f873a52e3b2b40127`)
            .then(res =>{
                console.log(res.data)
                this.result = res.data[key];
                this.loading ==false;
            })



        }

    }



})