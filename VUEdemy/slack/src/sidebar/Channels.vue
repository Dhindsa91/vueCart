<template>
<div>
    <button class="btn btn-outline-primary" @click="openModal">Add Channel</button>
<div class="modal" tabindex="-1" role="dialog" id="channel-modal">
  <div class="modal-dialog modal-dialog-center" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-darl" id="">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      <div class="form-group">
          <input v-model="new_channel" type="text" id="new-channel" name="new-channel" class="form-control">
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button @click="addChannel" type="button" class="btn btn-primary">Add Channel</button>
      </div>
    </div>
  </div>
</div>

  </div>
</template>
<script>
import database from 'firebase/database';

export default {
    name: "Channels",
    data(){
            return{
                new_channel: '',
                errors: [],
                channelsRef: firebase.database().ref('channels')
            }
        }
    ,
    methods:{
        openModal(){
            $('#channel-modal').appendTo("body").modal('show')
        },
        addChannel(){

        }
        
    },
    
}
</script>
