<template>
  <div id="wall" class="wall">
    <!--<NewPost/>Components à créer
    <Post ????/>-->
    <CreatePost />
    <Post
      class="x"
      v-for="(post, index) in allPosts"
      v-bind:key="index"
      :user="post.User.username"
      :jour="post.createdAt.split(' ')[0]"
      :heure="post.createdAt.split(' ')[1]"
      :text="post.content"
      :attachment="post.attachement"
      :like="post.like"
    />

    <!-- <div class="row block-post" v-for="(post, index) in allPosts" v-bind:key="index">
      <h3>
        Post by
        <span>{{ post.User.username }}</span> le
        <span>{{post.createdAt.split(' ')[0]}} à {{post.createdAt.split(' ')[1]}}</span>
      </h3>
      <div>{{post.attachement}}</div>
      <p>{{post.content}}</p>
      <div class="post__bottom-bar">
        <div class="like-section">
          <div>{{post.like}}</div>
          <div>
            <i class="fas fa-thumbs-up"></i>
            <i class="fas fa-thumbs-down"></i>
          </div>
          <div>
            <a href="#">Commentaire</a>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import axios from "axios";
import CreatePost from "../components/CreatePost";
import Post from "../components/Post";

export default {
  name: "Mur",
  components: {
    CreatePost,
    Post
  },
  data() {
    return {
      //affichePsts: true,
      //afficheFrm: false,
      allPosts: []
      //allComments: [],
      //postId: "",
      //nbCom: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000/api/post", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      })
      //.get("http://localhost:3000/api/post",this.$store.state.headerParams)
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

<style lang="scss">
.wall {
  background-color: white;
  min-height: 100%;
  padding: 5rem 0 2rem 0;
}
.block-post {
  background-color: white;
  width: 75%;
  margin: auto;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.25);
  border-radius: 0.25rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  & h3 {
    color: grey;
    margin: 0.25rem 0;
    font-size: 0.75rem;
  }
  & .like-section {
    & div {
      display: inline-block;
      margin: 0 0.5rem;
      & i {
        margin: 0 0.2rem;
      }
      & a {
        text-decoration: none;
        color: grey;
      }
    }
    font-weight: 700;
    color: grey;
  }
}
</style>