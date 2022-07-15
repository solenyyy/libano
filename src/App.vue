<template>
  <v-app>
    <v-main>
      <NavBar v-if="!$route.meta.hideNavbar" />
      <router-view />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "App",
  data: () => ({
    //
  }),
  components: { NavBar, Footer },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");

#app {
  font-family: "Roboto Condensed", sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
