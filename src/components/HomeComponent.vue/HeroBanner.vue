<template>
  <div class="container parallax">
    <div class="aggettivi">
      <div class="text">
        <div class="text-animated-one">RESTAURANTE EL LÍBANO</div>
      </div>
      <div class="text">
        <div class="text-animated-two">مطعم لبنان</div>
      </div>
    </div>
    <div class="btn-container">
      <router-link class="menu-btn" to="/menu" @click="scrollToTop">
        CARTA ONLINE
      </router-link>
      <a href="#" v-scroll-to="'#anchor'" class="menu-btn-2"> RESERVA </a>
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
@import url("https://fonts.googleapis.com/css2?family=Unica+One&display=swap");
.parallax {
  background-image: url(../../assets/background-blacked.jpg);
  background-size: 100%;
  min-height: 500px;
  background-attachment: fixed;
  background-repeat: no-repeat;
}
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
  -webkit-animation: fade-in 5.5s 2;
  text-align: center;
  letter-spacing: -1px;
  font-size: 3rem;
  font-weight: 900;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.74);
}

.text-animated-two {
  display: inline;
  -webkit-animation: fade-in 5.5s 2;
  -webkit-animation-delay: 100ms;
  text-align: center;
  font-size: 3.3rem;
  transform: translateY(1px);
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.74);
}

.aggettivi {
  display: inline;
  font-weight: 700;
  text-align: center;
  margin-top: 10%;
}

.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;
  height: 540px;
  color: white;
}
.btn-container {
  margin-top: 40px;
  font-weight: 600;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.74);
}
.menu-btn {
  margin: 0px 5px;
  padding: 9px 100px;
  background-color: #b9935a;
  border: 2px solid #b9935a;
  color: white !important;
}
.menu-btn-2 {
  padding: 9px 122.5px;
  border: 2px solid #b9935a;
}

.menu-btn:hover {
  background-color: transparent;
  border: 2px solid #b9935a;
  color: black !important;
}
.menu-btn-2:hover {
  background-color: #b9935a;
  border: 2px solid #b9935a;
  color: white;
}

/* media queries */

@media (max-width: 600px) {
  .parallax {
    background-size: 500px;
    background-position: left;
  }
  .aggettivi {
    font-size: 3rem;
    margin: 100px 72px;
  }
  .container {
    display: flex;
    align-items: center;
    height: 750px;
  }
  .text-animated-two {
    justify-content: center;
    margin-right: 6px;
    transform: translateY(8px);
  }
  .menu-btn {
    margin: 0 auto 20px auto;
    border: 2px solid #b9935a;
    background-color: transparent;
    color: white !important;
    padding: 12px 122.5px;
  }
  .menu-btn-2 {
    display: inline-block;
    margin-top: 20px;
    padding: 9px 145px;
    background-color: #b9935a;
    border: 2px solid #b9935a;
    color: white !important;
  }
  .btn-container {
    margin-top: 30px;
    font-size: 19px;
  }
}

@media (min-width: 1100px) {
  .container {
    align-items: center;
  }
  .menu-btn {
    background-color: transparent;
    border: 2px solid #b9935a;
    color: black !important;
  }
  .menu-btn:hover {
    background-color: #b9935a;
    border: 2px solid #b9935a;
    color: white !important;
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
