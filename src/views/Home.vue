<template>
  <HeroBanner />
  <WhoWeAre />
  <Gallery />
  <Booking />
</template>

<script>
import HeroBanner from "../components/HomeComponent.vue/HeroBanner.vue";
import WhoWeAre from "../components/HomeComponent.vue/WhoWeAre.vue";
import Booking from "../components/HomeComponent.vue/Booking.vue";
import Gallery from "../components/HomeComponent.vue/Gallery.vue";

export default {
  name: "Home",

  components: {
    HeroBanner,
    WhoWeAre,
    Booking,
    Gallery,
  },

  data: () => ({
    //
  }),
};
</script>
<style></style>
