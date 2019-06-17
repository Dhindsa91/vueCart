<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
    </div>
  

    <router-view />
  </div>
</template>
<script>
// import ProductListOne from './components/ProductListOne';
// import ProductListTwo from './components/ProductListTwo';

export default {
   components: {


  },
  name: 'app',
  
 
  
}
</script>


<style>
nav{
  height: 100px;
}

body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
