<template>
  <div class="container-footer">
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title @click="scrollToTop()" class="teal"
          ><router-link to="/"
            ><strong class="subheading"
              >Restaurante El Líbano</strong
            ></router-link
          >

          <v-spacer></v-spacer>
          <v-btn class="mx-4" icon>
            <a href="mailto:restauranteellibano@gmail.com">
              <v-icon large color="#b9935a">mdi-email</v-icon></a
            ></v-btn
          >
          <v-btn class="mx-4" icon>
            <a :href="glovo" target="_blank">
              <img
                class="glovo"
                src="../assets/logo_yellow_small.svg"
                alt="" /></a
          ></v-btn>
          <v-btn class="mx-4" icon>
            <a :href="path" target="_blank">
              <v-icon large color="#b9935a">mdi-facebook </v-icon></a
            ></v-btn
          >
        </v-card-title>

        <v-card-text class="py-2 white--text develop">
          <strong
            >C/ Santiago Cuadrado, 36. Santa Cruz de Tenerife. Tlf: 922 28 59 14
          </strong>

          © {{ new Date().getFullYear() }}. <br />
          <p class="designed">
            Diseño y Desarrollo:
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
  border-top: 0px solid rgba(128, 128, 128, 0.29);
  -webkit-box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #3c3c3c;
}
.glovo {
  margin: 4px 4px 0 0;
  width: 25px;
}
.designed {
  font-size: 10px;
}
</style>
