<template>
  <nav class="row navbar navbar-expand-lg navbar-light bg-light fixed-top px-4">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarToggle"
      aria-controls="navbarToggle"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Groupomania</a>

    <div class="collapse navbar-collapse justify-content-end" id="navbarToggle">
      <ul class="navbar-nav mt-2 mt-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/signup">Sign Up</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/login">Log In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/user">
            <i></i>
            <i class="user-icon fas fa-user"></i>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang='scss'>
nav {
  position: fixed;
  top: 0;
}
</style>