<template>
  <div>
    <div class="block-post">
      <h3>Créer un post</h3>
      <fieldset>
        <label for="input_text">Racontez nous une incroyable histoire:</label>
        <br />
        <input v-model="contentPost.content" class="input-text" id="input_text" type="text" />
        <label for="input_attachment">Déposer une image (jpg/png/gif):</label>
        <br />
        <input class="input_attachment" type="text" />
        <button @click.prevent="createPost">Poster sur le mur</button>
      </fieldset>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",
  data() {
    return {
      contentPost: {
        content: null,
        attachment: null
      }
    };
  },
  methods: {
    createPost() {
      axios
        .post("http://localhost:3000/api/post/create", this.contentPost, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token")
          }
        })
        .then(response => {
          //Si retour positif de l'API reload de la page pour affichage du dernier post
          if (response) {
            window.location.reload();
          }
        })
        .catch(error => console.log(error));
    }
  }
};
</script>

<style>
.input-text {
  width: 100%;
}
</style>