<template>
  <div id="container">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col-md-6" v-for="product in products" v-bind:key="product.id">
            <Product
              :isInCart="isInCart(product)"
              v-on:add-to-cart="addToCart(product)"
              :product="product"
            ></Product>
            <!-- event listener vs prop-->
          </div>
        </div>
      </div>
      <div class="col-md-5 my-5" >
        <Cart v-on:remove-item="removeItem($event)" :items="cart"></Cart>  <!-- Use $event unless you are in a loop -->
      </div>
    </div>
  </div>
</template>

<script>
import products from "./products.json";
import Product from "./components/Product";
import Cart from "./components/Cart";

export default {
  name: "app",

  components: {
    Product,
    Cart
  },
  data: function() {
    return {
      products,
      cart: []
    };
  },
  methods: {
    addToCart(product) {
      //THIS IS RECEIVING THE PAYLOAD from the emit

      this.cart.push(product);
    },
    isInCart(product) {
      const item = this.cart.find(item => item.id === product.id);

      if (item) {
        return true;
      }
    },
    removeItem($event){
    this.cart = this.cart.filter(item => item.id != $event.id);

    }
  }
};

//Style scoped will only display on that component
</script>

<style>
body {
  background-color: #fbf8f3;
}
</style>


