<template>
  <container class="mx-auto overflow-hidden">
    <v-app-bar color="white" dark>
      <img class="icon" src="../../assets/liban.png" alt="" />
      <v-toolbar-title>El Líbano</v-toolbar-title>
    </v-app-bar>
  </container>
</template>
<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>
<style scoped>
.icon {
  width: 45px;
  margin-right: 15px;
}
</style>
