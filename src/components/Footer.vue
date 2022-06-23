<template>
  <div class="container-footer">
    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-title class="teal">
          <strong class="subheading">Restaurante El Líbano</strong>

          <v-spacer></v-spacer>
          <v-btn class="mx-4" icon>
            <a href="mailto:restauranteellibano@gmail.com">
              <v-icon large color="#00a850">mdi-email</v-icon></a
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
              <v-icon large color="#00a850">mdi-facebook </v-icon></a
            ></v-btn
          >
        </v-card-title>

        <v-card-text class="py-2 white--text text-center">
          <strong
            >C/ Santiago Cuadrado, 36. Santa Cruz de Tenerife. Tlf: 922 28 59 14
            ©</strong
          >
          - {{ new Date().getFullYear() }}.
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
};
</script>
<style scoped>
.container-footer {
}
.v-footer {
  border-top: 0.5px solid rgba(128, 128, 128, 0.29);
  -webkit-box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 1px 3px rgba(50, 50, 50, 0.75);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

a:link,
a:visited,
a:active {
  text-decoration: none;
}
.glovo {
  margin: 4px 4px 0 0;
  width: 25px;
}
</style>
