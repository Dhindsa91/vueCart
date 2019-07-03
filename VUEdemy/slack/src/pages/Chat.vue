<template>
<div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-4 sidebar">
               <Sidebar/>
            </div>
       
            <div class="col-md-8 content" >
            Content
            </div>
         </div>
    </div>
</div>
</template>
<script>
/* eslint-disable */
import auth from 'firebase/auth'
import Sidebar from '../sidebar/Sidebar'



export default {
  name: "chat",
  components: {Sidebar},
  methods:{
 
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

