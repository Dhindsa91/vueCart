new Vue({
    el: '#app',
    data: {

        currencies: {},
        amount: null,
        from: '',
        to: '',
    
    },

    mounted() {

     this.getCurrencies();
       

    },
    computed:{

        formattedCurrencies(){

            return Object.values(this.currencies);
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
                console.log(res.data);
              this.currencies = res.data.results;

              localStorage.setItem("currencies", JSON.stringify(res.data.results)); //this is so there arent many requests made to api 

            })
          

        }

    }



})