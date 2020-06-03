<template>
  <header class="topbar">
    <div class="topbar__logo">
      <p>LOGO</p>
    </div>
    <div class="topbar__nav">
      <div class="topbar__nav__link">
        <a class="btn-nav btn-nav--actu" href>Actualité</a>
        <a class="btn-nav btn-nav--signup" href>Sign Up</a>
        <a class="btn-nav btn-nav--login" href>Log In</a>
      </div>
      <div class="topbar__nav__profil">ICON USER</div>
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