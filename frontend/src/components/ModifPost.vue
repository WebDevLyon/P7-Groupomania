<template>
  <div
    class="modal fade"
    id="modalEditPost"
    tabindex="-1"
    role="dialog"
    aria-labelledby="ModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <!--Modification est demandée-->
      <div class="modal-content" v-if="editOption=='modify'">
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Modifier le post (id: {{post.id}} )</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!--Si le demandeur clique sur modifier-->
            <form enctype="multipart/form-data" action="/create" method="post">
              <div class="input-group mb-3">
                <label for="input_text">Modifiez ou supprimer le text</label>
                <br />
                <textarea class="input-text" id="input_text" type="text" :value="post.content"></textarea>
              </div>
              <div class="input-group mb-3">
                <p for="input_text">Modifiez ou supprimer l'image</p>
                <br />
                <img class="img-thumbnail" :src="post.attachement" />
              </div>

              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputFileAddon">Upload New Image</span>
                </div>
                <div class="custom-file">
                  <input
                    name="inputFile"
                    type="file"
                    class="custom-file-input"
                    id="inputFile"
                    aria-describedby="inputFileAddon"
                  />
                  <label class="custom-file-label" for="inputFile">Choose file</label>
                </div>
              </div>
              <span id="msgReturnAPI" class="mx-3"></span>
            </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <button
            type="button"
            class="btn btn-primary"
          >Save changes</button>
        </div>
      </div>

      <!--Une suppression est demandée-->
      <div class="modal-content" v-else>
        <div class="modal-header">
          <h5 class="modal-title" id="ModalLabel">Supprimer ce post (id: {{post.id}})</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Etes vous sûr de vouloir supprimer ce post</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <button type="button" class="btn btn-danger" @click="deletePost">Delete post</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";

export default {
  name: "modalBoxModerate",
  data() {
    return {};
  },
  computed: {
    ...mapState(["user", "editOption"])
  },
  props: {
    post: {
      type: Object,
      default() {}
    }
  },
  methods: {
    /*
    chargeValuePost(postId, postContent, postImage) {
      this.post.id = postId;
      this.post.content = postContent;
      this.post.attachement = postImage;
    },*/
    deletePost() {
      console.log("Fonction de suppression du post " + this.post.id);
      console.log("user demandeur", this.user);
      axios
        .delete("http://localhost:3000/api/post/delete", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          },
          data: {
            postId: this.post.id,
            userIdOrder: this.user.userId
          }
        })
        .then(() => {
          window.location.reload();
        })
        .catch(error => console.log(error));
    },
    updatePost() {}
  }
};
</script>

<style>
</style>