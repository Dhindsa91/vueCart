<template>
  <div class="edit-employee">
    <form @submit.prevent="updateEmployee" class="col s12">
      <div class="input-field col s12">
        <div class="row">
          <input type="text" v-model="employee_id" required>
          <label>Employee ID#</label>
        </div>
      </div>
      <div class="input-field col s12">
        <div class="row">
          <input type="text" v-model="name" required>
          <label>Name</label>
        </div>
      </div>
      <div class="input-field col s12">
        <div class="row">
          <input type="text" v-model="dept" required>
          <label>Department</label>
        </div>
      </div>
      <div class="input-field col s12">
        <div class="row">
          <input type="text" v-model="position" required>
          <label>Position</label>
        </div>
      </div>

      <button type="submit" class="btn">Submit</button>
      <router-link to="/" class="btn red">Cancel</router-link>
    </form>
  </div>
</template>
<script>
import db from "./firebaseinit";
export default {
  name: "edit-employee",
  data() {
    return {
      employee_id: null, //this is what we're pulling from the url
      name: null,
      dept: null,
      position: null
    }
    },
    beforeRouteEnter(to,from,next){
        db.collection('employees').where('employee_id', '==', to.params.employee_id).get() //the param is coming from our router
        .then(querySnapshot =>{ querySnapshot.forEach(doc=>{
            next(vm=> {
               vm.employee_id = doc.data().employee_id;
               vm.name = doc.data().name;
                vm.dept = doc.data().dept;
                 vm.position = doc.data().position;

            })


        })
        
        })

    }
    
    
  ,
   watch:{
        "$route":'fetchData'
    },
     methods:{
        fetchData(){
            db.collection('employees').where('employee_id','==', this.$route.params.employee_id).get() //I THINK THIS IS JUST ANOTHER WAY TO DO THIS 
            .then(querySnapshot =>{
                querySnapshot.forEach(doc=>{
                      this.employee_id = doc.data().employee_id;
               this.name = doc.data().name;
                this.dept = doc.data().dept;
                 this.position = doc.data().position;
                })
            })
        },
          updateEmployee(){
            db.collection('employees').where('employee_id','==', this.$route.params.employee_id).get() //I THINK THIS IS JUST ANOTHER WAY TO DO THIS 
            .then(querySnapshot =>{
                querySnapshot.forEach(doc=>{
                    doc.ref.update({
                        employee_id: this.employee_id,
                         name: this.name,
                          dept: this.dept,
                           position: this.position

                    }).then(()=>{
                        this.$router.push('/')
                    })
                })
            })
        }
     }
};
</script>

