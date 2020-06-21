<template>
  <div class="card mb-4 w-75 mx-auto">
    <div class="card-header d-flex justify-content-between">
      <div>Post by {{userCreatePost}} le {{jour}} à {{heure}}</div>
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
          <button class="dropdown-item" type="button">Action</button>
          <button class="dropdown-item" type="button">Another action</button>
          <button class="dropdown-item" type="button">Something else here</button>
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
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Post",
  data() {
    return {
      
    };
  },
  computed: {
    ...mapState(["user"])
  },
  props: {
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
  }
};
</script>

<style>
</style>