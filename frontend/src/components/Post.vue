<template>
  <div>
      <div v-for='post in posts' :key='post'>
      <h3>
        Post by
        <span>{{ post.User.username }}</span> le
        <span>{{post.createdAt}}</span>
      </h3>
      <div>{{post.attachement}}</div>
      <p>{{post.content}}</p>
      <div class="post__bottom-bar">
        <div>{{post.like}}  <i class="fas fa-thumbs-up"></i> <i class="fas fa-thumbs-down"></i> <a href=#>Commentaire</a></div>
      </div>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Post",
  props:{
      posts:{
          type : Array,
          default: ()=>[]
      }
  },
  data() {
    return {
      affichePsts: true,
      afficheFrm: false,
      allPosts: [],
      allComments: [],
      postId: "",
      nbCom: []
    };
  },
  methods: {
    /* afficheCom(pId){
            this.postId=pId;
            //console.log(pId)
            axios.get("http://localhost:3000/api/posts/" + pId + "/comments")
                .then(response => {
                    //console.log(response);
                    this.allComments=response.data;
                })
                .catch(error => {
                console.log(error);
                });
        },
        countComments(pId){
            let nbCom = this.nbCom;
            console.log("dans countComments");
            nbCom.forEach((element) => {
                if (element.postId===pId){
                    console.log(element.nbComments);
                    this.com=element.nbComments;
                    
                    return element.nbComments;
                }else{
                    this.com=0;
                    
                    return 0 ;
                }
            })  
        },
        afficheForm(){
            this.affichePsts=false;
            this.afficheFrm=true;
        },*/
  },
  mounted() {
    //console.log("mounted");
    axios
      .get("http://localhost:3000/api/post", {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token")
        }
      })
      .then(response => {
        //console.log(response);
        this.allPosts = response.data;
      })
      .catch(error => {
        console.log(error); //affiche pas le message 'normalement' envoyé par le back
      });
    /*axios.get("http://localhost:3000/api/posts/comments")
                .then(response => {
                    this.nbCom=response.data;
                    console.log(this.nbCom);
                })
                .catch(error => {
                console.log(error);
                });*/
  }
};
</script>

<style>
</style>