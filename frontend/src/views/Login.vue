<template>
  <div class="row block-content">
    <form class="w-75 align-items-center form-block d-flex m-auto shadow rounded">
      <div
        class="form-block--left d-flex flex-column justify-content-center block-demi-container p-3 text-right align-self-stretch"
      >
        <img class="logo align-self-end" src="../assets/icon.svg" alt="Logo Groupomania" />
        <p>
          <small>
            Vous n'avez pas encore de compte,
            <router-link class="redirection-singup" to="/signup">enregistrez-vous</router-link>
          </small>
        </p>
      </div>
      <div class="block-demi-container p-3">
        <div class="form-group">
          <label for="inputUsername">Username</label>
          <input type="text" class="form-control" id="inputUsername" v-model="dataLogin.username" />
        </div>
        <div class="form-group">
          <label for="inputPassword">Password</label>
          <input
            type="password"
            class="form-control"
            id="inputPassword"
            v-model="dataLogin.password"
          />
        </div>
        <button @click.prevent="logIn" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      dataLogin: {
        username: null,
        password: null
      },
      msg: ""
    };
  },
  methods: {
    logIn() {
      if (
        //TO DO : Vérifier par Regex
        this.dataLogin.username !== null ||
        this.dataLogin.password !== null
      ) {
        axios
          .post("http://localhost:3000/api/user/login", this.dataLogin)
          .then(response => {
            let token = response.data.token;
            console.log(token);
            localStorage.setItem("token", token);
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
.block-content {
  background-image: url("../assets/bg-login-signup.jpg");
  background-size: cover;
  height: 100vh;
}
.block-demi-container {
  flex: 1;
}
.form-block {
  background-color: rgba(255, 255, 255, 0.75);
  &--left {
    background-color: rgba(118, 118, 118, 0.75);
  }
  @media screen and (max-width: 425px) {
    width: 100%;
    margin: 0;
  }
  .logo {
    width: 80%;
  }
}
.redirection-singup {
  color: rgba(0, 40, 45, 1);
  border: 1px solid black;
  border-radius: 3px;
  padding: 0.2rem;
  &:hover {
    background-color: green;
    color: white;
  }
}
</style>