import Vue from "vue";
import Vuex from "vuex";


Vue.use(Vuex);

export default new Vuex.Store({
  state: {

   
    
        products: [
          { name: "Banana Skin", price: 1 },
          { name: "Shiny Star", price: 2 },
          { name: "Green Shells", price: 3 },
          { name: "Red Shells", price: 4 },
        ]
        , 
      }
  ,
  getters:{
    saleProducts: state =>{
     
        var saleProducts = state.products.map(product =>
        {
            return {
                name:  product.name ,
                price: product.price
            }
        });
        return saleProducts;
    }
   
  },
  mutations: {
    reducePrice: state =>{
     state.products.forEach(prod=>
        {
            prod.price = prod.price - 1;
        })
    }
    }
  ,
  actions: {},
  
});
