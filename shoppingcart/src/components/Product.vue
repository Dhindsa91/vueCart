<template>
  <div class="card my-5">
    <div class="card-body">
      <h5 class="text-center card-title">{{product.title}}</h5>

      <p class="text-center text-muted car-text display-4">${{Number(product.price).toFixed()}}</p>
      <button :disabled="isInCart"  @click="$emit('add-to-cart', product)" class="btn btn-primary form-control"> <!-- which event to emit, then the payload BECAUSE product will be added in APP we need to send the data-->
         {{ isInCart ? 'Added To Cart' : 'Add to Cart' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
    props: ['product', 'isInCart']
    
}
</script>

