<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="item in items" v-bind:key="item.id">
    {{item.title}} - $ {{item.price}}
      <button @click="$emit('remove-item', item)" class="btn badge badge-danger float-right">Remove From Cart</button>
    </li>
  </ul>
</template>
<script>
export default {
  props: ["items"]
};
</script>


