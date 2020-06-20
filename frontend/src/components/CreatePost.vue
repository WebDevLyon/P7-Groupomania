<template>
  <div>
    <div class="block-post">
      <h3>Créer un post</h3>
      <form enctype="multipart/form-data" action="/create" method="post">
        <div class="input-group mb-3">
          <label for="input_text">Racontez nous une incroyable histoire:</label>
          <br />
          <input v-model="contentPost.content" class="input-text" id="input_text" type="text" />
        </div>

        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputFileAddon">Upload</span>
          </div>
          <div class="custom-file">
            <input
              name="inputFile"
              type="file"
              class="custom-file-input"
              id="inputFile"
              aria-describedby="inputFileAddon"
              @change="onFileChange"
            />
            <label class="custom-file-label" for="inputFile">Choose file</label>
          </div>
        </div>
        <input type="submit" class="btn btn-primary" @click.prevent="createPost" value="Submit" />
      </form>
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
        postImage: null
      }
    };
  },
  methods: {
    createPost() {
      console.log(this.contentPost);
      const fd = new FormData()
      fd.append('inputFile', this.contentPost.postImage);
      fd.append('content', this.contentPost.content);
      console.log(fd);
      axios
        .post("http://localhost:3000/api/post/create", fd, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token")
          }
        })
        .then(response => {
          //Si retour positif de l'API reload de la page pour affichage du dernier post
          if (response) {
            //window.location.reload();
          }
        })
        .catch(error => console.log(error));
    },
    onFileChange(e) {
      console.log(e);
      this.contentPost.postImage = e.target.files[0] || e.dataTransfer.files;
      console.log(this.contentPost.postImage);
      if (!this.contentPost.postImage.length) return;
      this.createImage(this.contentPost.postImage[0]);
    },
    createImage(file) {
      this.contentPost.postImage = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = e => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    } /*,
  removeImage: function(e) {
    this.image = "";
  }*/
  }
};
</script>

<style>
.input-text {
  width: 100%;
}
</style>