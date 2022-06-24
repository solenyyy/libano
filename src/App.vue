<template>
  <v-app>
    <v-main>
      <NavBar />
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
@import url("https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap");
#app {
  color: #3c3c3c;
  font-family: "Lato", sans-serif;
  overflow-x: hidden;
}
</style>
