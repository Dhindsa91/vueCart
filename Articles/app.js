Vue.component('Card', {

    props: ['title', 'content'],


    // for component data you shou8ld always use a function that returns value
    data(){
        return {
            claps:0

        }
    },


    template: `<div class="card">
                        
    <div class="card-body">

        <h3 class="card-title">{{title}}</h3>

        <div class="card-text">{{content}} </div>

        <div class="text-center" text-muted display-4>{{claps}}</div>

        <button @click="increaseClap()" class="btn btn-sm btn-danger">Clap</button>
        <button @click="deleteArticle()" class="btn btn-sm btn-danger">Delete Me </button>

    </div>
</div>`,
methods:{
    deleteArticle(){
     this.$emit('delete-article', this.title); //emits custom event for us, sends title to the child
    },
    //each cards data is unique to itself
    increaseClap(){
        this.claps++;
    }
 },


})




//this data is used once 
new Vue({

el: '#app',
data: {
    articles: [{
        title:'ARTICLE 1',
        content:'ARTUICLE ONE CONTENT'
    },{
    title:'ARTICLE 2',
        content:'ARTUICLE ONE CONTENT'
    },{
    title:'ARTICLE 3',
        content:'ARTUICLE ONE CONTENT'
    },{
    title:'ARTICLE 4',
        content:'ARTUICLE ONE CONTENT'
    },],
    
},
methods: {
    removeArticle(event){
      
       this.articles =  this.articles.filter(article => article.title != event);
    },

}



})