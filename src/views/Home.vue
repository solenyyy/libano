<template>
  <v-app>
    <v-main>
      <NavBar />
      <HeroBanner />
      <WhoWeAre />
      <Menu />
      <Booking />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "../components/HomeComponent.vue/NavBar.vue";
import HeroBanner from "../components/HomeComponent.vue/HeroBanner.vue";
import WhoWeAre from "../components/HomeComponent.vue/WhoWeAre.vue";
import Menu from "../components/HomeComponent.vue/Menu.vue";
import Booking from "../components/HomeComponent.vue/Booking.vue";

export default {
  name: "App",

  components: {
    NavBar,
    HeroBanner,
    WhoWeAre,
    Menu,
    Booking,
  },

  data: () => ({
    //
  }),
};
</script>
<style></style>
