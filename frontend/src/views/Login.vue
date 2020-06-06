<template>
  <div class="form-signup">
    <img src="../assets/logo.png" alt="Logo Groupomania" />
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
    <button @click.prevent="logIn" id="btn-connect">Se connecter</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      dataSignup: {
        email: null,
        password: null
      },
      msg: ""
    };
  },
  methods: {
    logIn() {
      if (
        this.dataSignup.username !== null ||
        this.dataSignup.password !== null
      ) {
        axios
          .post("http://localhost:3000/api/user/login", this.dataSignup)
          .then(response => {
            let token = response.data.token;
            console.log(token)
            localStorage.setItem('token', token)

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
.form-signup {
  text-align: center;
  padding: 2rem;
}
.form-group {
  margin: 1rem;
  & label {
    flex: 1;
    text-align: end;
  }
  & input {
    display: block;
    margin: auto;
  }
  & .requis {
    color: red;
    font-size: 0.8rem;
  }
}
</style>