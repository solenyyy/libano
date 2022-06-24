<template>
  <nav class="navbar">
    <router-link to="/">
      <img class="icon" src="../assets/tree.png" alt="bandera del líbano" />
    </router-link>
  </nav>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.icon {
  width: 15px;
  margin-left: 15px;
}
.navbar {
  display: flex;
  align-items: center;
  position: fixed;

  box-sizing: border-box;
  top: 0;
  left: 0;
  width: 99.9%;
  height: 50px;
}
</style>
