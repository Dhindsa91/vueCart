<template>

  <ul>
      <li v-for="(todo,index) in todos" :key="index">{{todo}}
          <button v-on:click="deleteTodo">DELETE</button>
      </li>
  </ul>

  
</template>

<script>

export default {
    props: {
        
        
    },
    //re calulates it property when state changes 
    computed:{

        todos(){
        return this.$store.state.todos    
    }
    },
    methods:{
        deleteTodo(){
            this.$store.commit('deleteTodo', this.todos)
        }
    }
}
</script>
<style>
button {

padding: 5px;
float: right;


}

</style>


