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
@import url("https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap");
body {
  font-family: "Exo 2", sans-serif;
  color: #3c3c3c;
}
</style>
