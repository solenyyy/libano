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
  right: 0px;
  display: flex;
  justify-content: center;
  -webkit-animation: fade-in 5.5s 3;
  text-align: center;
  letter-spacing: -3px;
}

.text-animated-two {
  display: inline;
  position: relative;
  -webkit-animation: fade-in 5.5s 3;
  -webkit-animation-delay: 750ms;
  display: flex;
  justify-content: flex-start;
  text-align: center;
  transform: translateY(12px);
}

.aggettivi {
  display: inline;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 90px 60px 50px 60px;
}

.container {
  font-size: 18px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  text-align: center;
  top: 0;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.5'/></svg>");
  height: 540px;
  color: #3c3c3c;
}

.menu-btn {
  margin: 20px 70px;
  padding: 9px 100px;
  background-color: #b9935a;
  border: 2px solid #b9935a;
  color: white !important;
}

.menu-btn-2 {
  display: none;
}
.menu-btn:hover,
.menu-btn-2:hover {
  border: 3px solid #b9935a;
  font-weight: 600;
}

@media (max-width: 600px) {
  .aggettivi {
    font-size: 3rem;
    margin: 120px 72px 140px 72px;
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
    padding: 12px 106px;
    margin: 0 auto 20px auto;
    border: 2px solid #b9935a;
  }
  .menu-btn-2 {
    display: inline-block;
    margin-top: 20px;

    padding: 9px 132px;
    background-color: #b9935a;
    border: 2px solid #b9935a;
    color: white !important;
  }
  .btn-container {
    margin-top: 60px;
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
