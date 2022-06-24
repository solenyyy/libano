<template>
  <div class="container">
    <div class="aggettivi">
      <div class="text">
        <div class="text-animated-one">Restaurante El Líbano</div>
      </div>
      <div class="text">
        <div class="text-animated-two">مطعم لبنان</div>
      </div>
    </div>
    <div class="btn-container">
      <router-link class="menu-btn" to="/menu" @click="scrollToTop">
        CARTA ONLINE
      </router-link>
    </div>
    <div class="btn-container-2">
      <router-link class="menu-btn-2" to="/menu" @click="scrollToTop">
        RESERVA
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HeroBanner",
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
@-webkit-keyframes fade-in {
  0%,
  20% {
    transform: translateY(100%);
  }
  30%,
  70% {
    transform: translateY(0);
  }
  80%,
  100% {
    transform: translateY(-100%);
  }
}

.text {
  overflow: hidden;
  margin: 15px 0;
}

.text-animated-one {
  display: inline;
  position: relative;
  top: 0px;
  display: flex;
  justify-content: center;
  -webkit-animation: fade-in 5.5s 3;
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.text-animated-two {
  display: inline;
  position: relative;
  -webkit-animation: fade-in 5.5s 3;
  -webkit-animation-delay: 750ms;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  transform: translateY(15px);
}

.aggettivi {
  display: inline;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 90px 60px 50px 60px;
}

.container {
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  background-image: url(../../assets/background.jpeg);
  background-size: cover;
  height: 520px;
  color: #3c3c3c;
}

.menu-btn,
.menu-btn-2 {
  border: 2px solid #3c3c3c;

  padding: 5px 10px;
  margin: 0 240px;
}
.menu-btn:hover,
.menu-btn-2:hover {
  border: 2px solid #ee161f;
  font-weight: 600;
}

@media (max-width: 600px) {
  .aggettivi {
    font-size: 3rem;
    margin: 80px 60px 140px 60px;
  }
  .container {
    display: flex;
    align-items: center;
    height: 600px;
  }
  .text-animated-two {
    justify-content: center;
    margin-right: 18px;
  }
  .menu-btn {
    padding: 12px 115px;
    margin: 0 auto 20px auto;
  }
  .menu-btn-2 {
    padding: 12px 138px;
    background-color: #00a850;
    border: 2px solid #018440;
    color: white !important;
  }

  .btn-container-2 {
    margin-top: 30px;
  }
}

@media (min-width: 1450px) {
  .container {
    height: 650px;
  }
}
a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}
</style>
