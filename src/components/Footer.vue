<template>
  <div class="container-footer">
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-btn class="mx-2" icon>
          <a :href="glovo" target="_blank">
            <img
              class="glovo"
              src="../assets/logo_yellow_small.svg"
              alt="" /></a
        ></v-btn>
        <v-btn class="mx-2" icon>
          <a :href="path" target="_blank">
            <v-icon large color="#1877f2">mdi-facebook </v-icon></a
          ></v-btn
        >
        <v-card-title @click="scrollToTop()" class="teal"
          ><router-link to="/"
            ><strong class="subheading"
              >© {{ new Date().getFullYear() }} | Restaurante El Líbano.</strong
            ></router-link
          >

          <v-spacer></v-spacer>
        </v-card-title>
        <v-card-text class="py-2 white--text develop">
          <p class="designed">
            Desarrollo:
            <a target="_blank" href="https://www.linkedin.com/in/soleny-yumare/"
              >Soleny Yumare.</a
            >
          </p>
        </v-card-text>
      </v-card>
    </v-footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      path: "https://es-es.facebook.com/restauranteellibano/",
      glovo: "https://glovoapp.com/es/es/tenerife/el-libano-tenerife/",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
.container-footer {
}
.v-footer {
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  color: #3f331e;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #3c3c3c;
}
.glovo {
  margin: 4px 3px 0 0;
  width: 22px;
}
.designed {
  font-size: 10px;
  margin-left: 140px;
}
</style>
