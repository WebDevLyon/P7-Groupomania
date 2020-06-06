<template>
  <div id="app">
    <Header />
    <main class="block-content">
      <router-view />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
.block-content {
  position: absolute;
  top: 55px;
  bottom: 0;
  left: 0;
  right: 0;
}
.interface-content {
  width: 80%;
  margin: auto;
}
</style>
