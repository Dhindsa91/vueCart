<template>

<input v-model="todo" @keyup.enter="saveTodo" type="text" placeholder="">

</template>
<script>
export default {

    data: ()=>({
        todo: ''
    }),
    methods:{
        saveTodo(){
            
            // make a commit to the vuex store ONLY WAY TO CHANGE DATA (MUTATIONS)    
            // Takes: (mutation, payload)
            this.$store.commit('addTodo', this.todo)

        }

    }
}
</script>

