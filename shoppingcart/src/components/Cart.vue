<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in items" v-bind:key="item.id">
      Product Name - $235
      <button class="btn badge badge-danger float-right">Remove From Cart</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["items"]
};
</script>


