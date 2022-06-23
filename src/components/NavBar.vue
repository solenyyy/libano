<template>
  <container class="mx-auto overflow-hidden">
    <v-app-bar color="white" dark>
      <router-link to="/">
        <img class="icon" src="../assets/liban.png" alt="bandera del líbano" />
      </router-link>
      <v-toolbar-title>El Líbano</v-toolbar-title>
    </v-app-bar>
  </container>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.icon {
  width: 45px;
  margin-right: 15px;
}
.v-app-bar {
  width: 99.9% !important;
}
</style>
