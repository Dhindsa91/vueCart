<template>
  <div class="new-employee">
    <form @submit.prevent="saveEmployee" class="col s12">
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
  name: "new-employee",
  data() {
    return {
      employee_id: null, //this is what we're pulling from the url
      name: null,
      dept: null,
      position: null
    };
  },
  methods: {
    saveEmployee() {
      db.collection("employees")
        .add({
          employee_id: this.employee_id,
          name: this.name,
          dept: this.dept,
          position: this.position
        })
        .then(docReference => {
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

