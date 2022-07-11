<template>
  <HeroBanner />
  <WhoWeAre />
  <Gallery />
  <Pics />
  <Booking id="anchor" />
</template>

<script>
import HeroBanner from "../components/HomeComponent.vue/HeroBanner.vue";
import WhoWeAre from "../components/HomeComponent.vue/WhoWeAre.vue";
import Booking from "../components/HomeComponent.vue/Booking.vue";
import Gallery from "../components/HomeComponent.vue/Gallery.vue";
import Pics from "../components/HomeComponent.vue/Pics.vue";

export default {
  name: "Home",

  components: {
    HeroBanner,
    WhoWeAre,
    Booking,
    Gallery,
    Pics,
  },

  data: () => ({
    //
  }),
};
</script>
<style></style>
