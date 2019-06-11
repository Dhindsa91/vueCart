<template>
  <div id="app">

    <CreateTodo />
    <TodoCount />
  
    <ListTodos />
  
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import TodoCount from './components/TodoCount';
import CreateTodo from './components/CreateTodo';
import ListTodos from './components/ListTodos';

export default {
  name: "app",

  components: {

    TodoCount,
    ListTodos,
    CreateTodo



    // HelloWorld
  },
  methods:{

    }
  }

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {

border: 2px solid black;
padding: 20px;
font-size: 22px;


}
li{
margin: 10px;
list-style-type: none;
background-color: grey;
padding: 20px;
font-size: 20px;
  border-radius: 25px;
}
</style>
