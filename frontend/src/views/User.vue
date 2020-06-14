<template>
  <main class="main">
    <div class="row p-2">
      <div class="col-12">
        <h1>
          <i class="fas fa-cog"></i>Paramètres du compte
        </h1>
        <hr />
      </div>
    </div>
    <section class="row user-info pl-5 pr-5">
      <div class="col-12">
        <h2>
          <u>Informations de l'utilisateur</u>
        </h2>
        <div class="user-info__block">
          <p class="user-info__block__title mb-0">Email</p>
          <p class="user-info__block__output">
            <small>{{$store.state.auth.userId}}</small>
          </p>
        </div>
        <div class="user-info__block">
          <p class="user-info__block__title mb-0">Username</p>
          <p class="user-info__block__output">
            <small>{{$store.state.Username}}</small>
          </p>
        </div>
        <div class="user-info__block d-flex justify-content-between user-info__block--flex">
          <div class="user-info__block">
            <p class="user-info__block__title mb-0">Password</p>
            <small class="user-info__block__output">
              Doit contenir au minimum 8 charactères dont une majuscule,
              et au minimum un charactère numérique et un caractère spécial
            </small>
          </div>
          <button type="button" class="btn btn-primary">Change</button>
        </div>
        <button
          type="button"
          class="btn btn-danger white d-block mx-auto mt-5 mb-2"
          @click="deleteAccount"
        >Delete account</button>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: "User",
  data() {
    return {
      msg: "Email"
    };
  },
  methods: {
    deleteAccount() {
      axios
        .delete("http://localhost:3000/api/user/delete", localStorage.getItem('token'))
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }
  }
};
</script>

<style lang="scss">
</style>