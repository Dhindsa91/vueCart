<template>

  <ul>
      <li v-for="(todo,index) in todos" :key="index">{{todo}}</li>
  </ul>

  
</template>

<script>

export default {
    props: {
        
        
    },
    computed:{

        todos(){
        return this.$store.state.todos    
    }
    }
}
</script>

