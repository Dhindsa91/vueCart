/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import auth from 'firebase/auth'

Vue.config.productionTip = false



var firebaseConfig = {
  apiKey: "AIzaSyACmjofFAs41bWBeXY0ONzbHEA50r18w9U",
  authDomain: "vuexslack-f245e.firebaseapp.com",
  databaseURL: "https://vuexslack-f245e.firebaseio.com",
  projectId: "vuexslack-f245e",
  storageBucket: "",
  messagingSenderId: "903767378926",
  appId: "1:903767378926:web:fc9c63961b9e3012"
};

firebase.initializeApp(firebaseConfig);

window.firebase = firebase;

const unsubscribe = firebase.auth().onAuthStateChanged(user => {

  store.dispatch('setUser', user);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

unsubscribe();


})




