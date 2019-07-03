<template>
<div>
  
                <h2 class="text-light">#SLACK#</h2>
                <hr style="border 1px solid #333;">


                <span>
                    <img class="rounded-circle mr-2" :src="currentUser.photoURL"  height="100" width="100" alt="">
                    <br>
                    <span class="text-light">{{currentUser.displayName}}</span>
                </span>
                    <br>


                <button class="btn btn-outline-light" @click="logout">Logout</button>

                <Channels/>
       
           
</div>
</template>
<script>
/* eslint-disable */
import auth from 'firebase/auth'
import {MapGetters, mapGetters} from 'vuex'
import Channels from './Channels'


export default {
  name: "Sidebar",
  computed:{
      ...mapGetters(['currentUser'])

  },
  components:{
      Channels
  },
  methods:{
      logout(){

          firebase.auth().signOut()
          this.$store.dispatch('setUser', null)
          this.$router.push('/login')

      }
  }
};
</script>
<style scoped>
.sidebar{
    width: 20%;
    display: block;
    background-color: black;
    float: left;
    position: fixed;
    padding-top: 2em;
    height: 100%;
   

}
.content{
    width: 80%;
    display: block;
    float: left;
    margin-left: 20%;
    height: 100%;
    color: blue;
}
</style>

