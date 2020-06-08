<template>
  <div class="interface-content">
    <h1>
      <i></i>Paramètres du compte
    </h1>
    <hr />
    <section class="user-info">
      <h2></h2>
      <div class="user-info__block">
        <p class="user-info__block__title">Email</p>
        <p class="user-info__block__output">{{$store.state.Email}}</p>
      </div>
      <div class="user-info__block">
        <p class="user-info__block__title">Username</p>
        <p class="user-info__block__output">{{$store.state.Username}}</p>
      </div>
      <div class="user-info__block user-info__block--flex">
        <div class="user-info__block">
          <p class="user-info__block__title">Password</p>
          <p class="user-info__block__output">
            Doit contenir au minimum 8 charactères dont une majuscule,
            et au minimum un charactère numérique et un charactère spécial
          </p>
        </div>
        <a class="btn btn--actu">Changer le mot de passe</a>
      </div>
      <a class="btn-action--alert">Supprimer le compte</a>
    </section>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      msg: "Email"
    };
  }
};
</script>

<style lang="scss">
//Palette color norme contrast WCAG
$colorBG: #fff;
$gris: #797676;

.user-info {
  &__block {
    &--flex {
      display: flex;
    }
    &__title {
      margin: 0;
    }
    &__output {
      margin-top: 0;
      font-size: 0.75rem;
      color: $gris;
    }
    &--flex {
      display: flex;
      justify-content: space-between;
    }
  }
}

.btn-action{
  color:blue
}
</style>