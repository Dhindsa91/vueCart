Vue.component('Card', {

    props: ['title', 'content'],

    data:{},

    template: `<div class="card">
                        
    <div class="card-body">

        <h3 class="card-title">{{title}}</h3>

        <div class="card-text">{{content}} </div>


        <button @click="deleteArticle()" class="btn btn-sm btn-danger">Delete Me </button>

    </div>
</div>`,
methods:{
    deleteArticle(){
     this.$emit('delete-article', this.title); //emits custom event for us 
    }
 },


})





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
    }
}



})