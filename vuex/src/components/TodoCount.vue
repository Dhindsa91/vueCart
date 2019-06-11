<template>
    
    <h1>the total amount of Todos is {{count}}</h1>

</template>
<script>
export default {
    props: ["todoCount"],
    computed:{

        count(){

            return this.$store.getters.todosCount;
        }

    }
}
</script>

