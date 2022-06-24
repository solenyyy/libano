<template>
  <container class="mx-auto overflow-hidden">
    <v-app-bar color="white" dark>
      <router-link to="/">
        <img class="icon" src="../assets/tree.png" alt="bandera del líbano" />
      </router-link>
      <v-toolbar-title></v-toolbar-title>
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
  width: 15px;
  margin-right: 15px;
}
.v-app-bar {
  width: 99.9% !important;

  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.091),
    0px 3px 2px 0px rgba(48, 48, 48, 0.011),
    0px 1px 10px 0px rgba(0, 0, 0, 0.062) !important;
}
</style>
