<template>
  <div class="container">
    <div class="aggettivi">
      <div class="text">
        <div class="text-animated-one">Rest. El Líbano</div>
      </div>
      <div class="text">
        <div class="text-animated-two">مطعم لبنان</div>
      </div>
    </div>
    <div class="btn-container">
      <button class="menu-btn">NUESTRA CARTA</button>
    </div>
  </div>
</template>
<script></script>
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
  -webkit-animation: fade-in 5.5s 3;
  text-align: center;
  margin: 0 auto;
  width: 100%;
}

.text-animated-two {
  display: inline;
  position: relative;
  margin-left: -56px;
  -webkit-animation: fade-in 5.5s 3;
  -webkit-animation-delay: 750ms;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  transform: translateY(15px);
}

.aggettivi {
  display: inline;
  font-size: 4rem;
  font-weight: 700;
  text-align: center;
  margin: 60px 60px 50px 60px;
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

.menu-btn {
  border: 2px solid #3c3c3c;
  border-radius: 8px;
  padding: 5px 10px;
  margin: 0 215px;
}
.menu-btn:hover {
  border: 2px solid #ee161f;
  font-weight: 600;
}

@media (max-width: 600px) {
  .container {
    display: flex;
    align-items: center;
    height: 600px;
  }
  .menu-btn {
    width: 100%;
    margin: 0 auto;
  }
}

@media (min-width: 1450px) {
  .container {
    height: 650px;
  }
}
</style>
