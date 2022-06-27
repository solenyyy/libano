<template>
  <nav class="navbar">
    <div class="below-nav">
      <router-link to="/">
        <img class="icon" src="../assets/tree.png" alt="bandera del líbano" />
      </router-link>
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
.icon {
  width: 20px;
  margin-left: 15px;
}
.navbar {
  display: flex;
  align-items: center;
  position: absolute;
  background-color: transparent;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
}
.below-nav {
  padding: 3em 0 3em;
}
</style>
