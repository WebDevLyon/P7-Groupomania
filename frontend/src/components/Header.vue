<template>
  <header class="topbar">
    <div class="topbar__logo">
      <p>LOGO</p>
    </div>
    <div class="topbar__nav">
      <div class="topbar__nav__link">
        <router-link class="btn-nav btn-nav--actu" to='/'>Actualité</router-link>
        <router-link class="btn-nav btn-nav--signup" to="/signup">Sign Up</router-link>
        <router-link class="btn-nav btn-nav--login" to="/login">Log In</router-link>
      </div>
      <div class="topbar__nav__profil"><router-link to="/user"><i class="fas fa-user"></i></router-link></div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang='scss'>
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  &__logo {
    height: 100%;
  }
  &__nav {
    display: flex;
    & .btn-nav {
      text-decoration: none;
      color: inherit;
      border: 1px solid;
      border-radius: 0.3rem;
      padding: 0.3rem 0.8rem;
      margin: 0.3rem;
      &--login {
        color: green;
      }
      &--signup {
        color: red;
      }
      &--actu {
        color: blue;
      }
      &:hover,
      &:focus {
        color: pink;
      }
    }
  }
}
</style>