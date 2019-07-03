
<template>

  <div>
    <div class="jumbotron bg-primary text-white">
      <h2 class="lead display-3">#SLACK#</h2>
      <p>Realtime communication App</p>
    </div>

    <div class="alert alert-info" v-if="loading">Processing...</div>

       <div class="alert alert-danger" v-if="hasErrors">
         <div v-for="error in errors">{{error}}</div>
       </div>



    <div class="container-fluid">
      <div class="row mt-5">
        <div class="col text-center">
          <button class="btn-primary" @click="loginWithGoogle">Login With Google</button>
        </div>
      </div>
       <div class="row mt-5">
        <div class="col text-center">
          <button class="btn-primary" @click="loginWithTwitter">Login With Twitter </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

import auth from 'firebase/auth';
import database from 'firebase/database';


export default {
  name: "login",
  data(){
    return {
      loading: false,
      errors:[],
      userRef: firebase.database().ref('users')
    
    }
  },
  computed:{
    hasErrors(){
      return this.errors.length > 0;
    }
  },
  methods:{
    saveUserstoUsersRef(user){

      return this.userRef.child(user.uid).set({
        name: user.displayName,
        avatar: user.photoURL
      })

    },
    
    loginWithGoogle(){

      this.loading = true

      this.errors = [];

      firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((res)=>{
        console.log(res.user);

        //dispatch action to setUser action

        this.$store.dispatch('setUser', res.user)
        this.$router.push('/')

      })
      .catch(err=>{
        this.errors.push(err);

        this.loading = false;
      })

    },
      loginWithTwitter(){

      this.loading = true

      this.errors = [];
        console.log('hi1');

      firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider()).then((res)=>{
   
        this.saveUserstoUsersRef(res.user)
        //dispatch action to setUser action
     
        this.$store.dispatch('setUser', res.user)
          console.log('hi2');
        this.$router.push('/')

      })
      .catch(err=>{
          console.log('hi3');
        this.errors.push(err);

        this.loading = false;
      })

    }
  }
};
</script>
<style scoped>
.btn-primary, .jumbotron{
    border-radius: 0px;
}
</style>
