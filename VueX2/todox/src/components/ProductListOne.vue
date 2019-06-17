<template>
  <div class="product-list-one">
    <h2>Product List one</h2>

    <ul>
      <li v-for="product in products" v-bind:key="product.id">{{product.name}} || {{product.price}}</li>
    </ul>
    <button v-on:click="reducePrice">BUTTON</button>
   
    <ProductListTwo/>
  </div>
</template>
<script>
import ProductListTwo from "./ProductListTwo";
import Vuex from "vuex";

export default {
  computed: {
    products() {
      return this.$store.state.products;
     
    },
   
  },
  name: "ProductListOne",
  components: {
    ProductListTwo
  },
  methods:{
      reducePrice: function(){
           this.$store.commit("reducePrice");
    
},
}
}
</script>


<style>
</style>