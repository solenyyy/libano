<template>
  <div class="container">
    <div class="nav-menu">
      <img
        class="icon"
        src="../assets/bars-solid.svg"
        alt="bars"
        @click="showMenu()"
      />

      <div
        class="nav-content"
        :class="this.showMobileMenu ? 'open-menu' : 'closed-menu'"
      >
        <ul class="nav-items">
          <li>Sobre Nosotros</li>
          <li>Nuestra Carta</li>
          <li>Reservas</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobileMenu: false,
    };
  },
  methods: {
    showMenu() {
      this.showMobileMenu = !this.showMobileMenu;
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 35px;
}
.icon {
  width: 20px;
  margin-left: 15px;
}
.nav-content {
  padding: 5px 30px;
}
.nav-items {
  display: flex;
  align-items: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;

  li {
    padding: 0 10px;
  }
}

.nav-menu {
  position: absolute;
  width: 100%;
  background-color: white;
  box-shadow: 1px 2px 10px rgb(171, 171, 171);
}
.open-menu {
  opacity: 1;
  height: 190px;
}
.closed-menu {
  opacity: 0;
  height: 0;
  padding: 0;
}
.nav-content {
  flex-direction: column;
  z-index: 100;
  position: relative;
  transition: all 0.2s ease-out;
}
.nav-items {
  flex-direction: column;
}

@media (min-width: 769px) {
}
</style>
