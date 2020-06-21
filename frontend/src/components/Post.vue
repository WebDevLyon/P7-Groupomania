<template>
  <div class="card mb-4 w-75 mx-auto">
    <div class="card-header d-flex justify-content-between">
      <div>Post by {{userCreatePost}} le {{jour}} à {{heure}} id {{idPost}}</div>
      <div class="dropdown" v-if="user.isAdmin==true || user.username == userCreatePost">
        <svg
          class="bi bi-three-dots dropdown-toggle"
          id="dropdownMenuPost"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
          />
        </svg>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuPost">
          <button
            class="dropdown-item modifPost"
            data-toggle="modal"
            data-target="#modalEditPost"
            type="button"
            @click="changeEditStyleForModif"
          >Modifier</button>
          <button
            class="dropdown-item deletePost"
            data-toggle="modal"
            data-target="#modalEditPost"
            type="button"
            @click="changeEditStyleForDelete"
          >Supprimer</button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <div class="card-img-top w-75 mx-auto" v-if="attachment">
        <img :src="attachment" alt="..." class="w-100" />
      </div>
      <div class="card-text" v-if="text!=='null'">
        <p class="mb-0">{{text}}</p>
      </div>
    </div>
    <div class="d-flex card-footer">
      <div class="mx-1">{{like}}</div>
      <div>
        <i class="fas fa-thumbs-up mx-1"></i>
        <i class="fas fa-thumbs-down mx-1"></i>
      </div>
      <div class="mx-1">
        <a href="#" class="text-reset">Commentaire</a>
      </div>
    </div>

    <!--Modal Box Edit/Delete Post-->
    <div
      class="modal fade"
      id="modalEditPost"
      tabindex="-1"
      role="dialog"
      aria-labelledby="ModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="ModalLabel" v-if="this.editOption=='modify'">Modifier le post</h5>
            <h5 class="modal-title" id="ModalLabel" v-else>Supprimer ce post</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body" >
            <modifPost  v-if="this.editOption=='modify'"/>
            <p v-else>Etes vous sûr de vouloir supprimer ce post</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
            <button type="button" class="btn btn-primary" v-if="this.editOption=='modify'">Save changes</button>
            <button type="button" class="btn btn-danger" v-else @click="deletePost">Delete post</button>
          </div>
        </div>
      </div>
    </div>
    <!--END Boite modal édit post-->
  </div>
</template>

<script>
import { mapState } from "vuex";
import modifPost from "../components/ModifPost";

export default {
  name: "Post",
  components: {
    modifPost
  },
  data() {
    return {
      editOption: "plop"
    };
  },
  computed: {
    ...mapState(["user"])
  },
  props: {
    idPost: {
      type: Number,
      required: true
    },
    userCreatePost: {
      type: String,
      default: "anonyme"
    },
    jour: {
      type: String,
      required: true
    },
    heure: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: null
    },
    like: {
      type: Number,
      default: 0
    },
    attachment: {
      type: String,
      default: ""
    }
  },
  methods: {
    changeEditStyleForDelete() {
      this.editOption = "delete";
    },
    changeEditStyleForModif(){
      this.editOption = "modify";
    },
    deletePost() {
      console.log("Fonction de suppression du post " + this.idPost);
    }
  }
};
</script>

<style>
</style>