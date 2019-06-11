import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({


  state: {

    todos:[]

  },
  //changes data
  mutations: {

     addTodo(state, payload){

        state.todos = [

        ...state.todos,

        payload
        ]
        
     },
     deleteTodo(state, payload){
       console.log(payload);
      state.todos = state.todos.filter(item => item != payload);


     }

  },
  //get data 
  getters:{

    todosCount(state){
      return state.todos.length
    }


  },
  //syncronous actions 
  actions: {}
});
