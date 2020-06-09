<template>
  <div class="form-signup">
    <img class="logo" src="../assets/icon.png" alt="Logo Groupomania" />
    <div class="form-group">
      <label for="email">
        Email Groupomania
        <span class="requis">*</span>
      </label>
      <input v-model="dataSignup.email" id="email" type="email" />
    </div>
    <div class="form-group">
      <label for="username">
        Pseudo
        <span class="requis">*</span>
      </label>
      <input v-model="dataSignup.username" id="username" type="text" />
    </div>
    <div class="form-group">
      <label for="password">
        Password
        <span class="requis">*</span>
      </label>
      <input v-model="dataSignup.password" id="password" type="password" />
    </div>
    <button @click.prevent="sendSignup" id="btn-connect">Se connecter</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      dataSignup: {
        username: null,
        email: null,
        password: null
      },
      msg: ""
    };
  },
  methods: {
    sendSignup() {
      if (
        this.dataSignup.email !== null ||
        this.dataSignup.username !== null ||
        this.dataSignup.password !== null
      ) {
        axios
          .post("http://localhost:3000/api/user/signup", this.dataSignup)
          .then(response => {
            console.log(response);
            //Réinitialisation
            this.dataSignup.email = null;
            this.dataSignup.username = null;
            this.dataSignup.password = null;
          })
          .catch(error => console.log(error));
      } else {
        console.log("oops !");
      }
    }
  }
};
</script>

<style lang="scss">
.logo{
  width:10px;
}
</style>