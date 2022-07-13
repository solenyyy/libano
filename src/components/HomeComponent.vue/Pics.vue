<template>
  <div class="container">
    <h1 class="title">NUESTRA CARTA</h1>
    <p class="text">
      <em>Una carta tradicional</em> aunque sujeta a la
      <u>innovación permanente</u> es la característica principal de la cocina
      libanesa.
    </p>
    <div class="img">
      <img class="hummus" src="../../assets/new-pics/hummusbien.png" alt="" />
      <p class="position">
        El Líbano es uno de los <strong>clásicos de la comida árabe</strong> en
        Santa Cruz de Tenerife.
      </p>
    </div>
    <div class="img-2">
      <img class="tabule" src="../../assets/new-pics/tabulebien.png" alt="" />
    </div>
    <p class="position-kipe">
      La más <u>exquisita, sana y exclusiva</u> cocina mediterránea.
    </p>
    <div class="img">
      <img class="falafel" src="../../assets/new-pics/falafelbien.png" alt="" />
    </div>
    <div class="img-2">
      <p class="position-tabule">
        <em>Disponemos de dos plantas</em>, capaces de reunir a casi un centenar
        de comensales.
      </p>
      <img class="kipenaye" src="../../assets/new-pics/guarakbien.png" alt="" />
      <p class="final-text">
        <strong>Esto y mucho más</strong> es lo que pueden hallar quienes acudan
        a nuestro restaurante, en la <em>capital tinerfeña.</em>
      </p>
    </div>
    <hr />
  </div>
  <!--   <div class="test" :scroll="handleScroll()">
    <svg
      class="margin"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      version="1.1"
      width="640"
      height="640"
      viewBox="0 0 640 640"
      xml:space="preserve"
    >
      <g
        transform="matrix(1 0 0 1.58 320 321.25)"
        id="XSPP5eLlYOYuz13aKPBsw"
        fill="transparent"
        stroke=" #b9935a"
        stroke-miterlimit="10"
        stroke-width="3"
      >
        <path
          class="path"
          vector-effect="non-scaling-stroke"
          transform=" translate(0, 0)"
          d="M -3.37434 -158.03163 C -4.49912 -97.29349 -3.37434 -79.29701 -3.37434 -79.29701 L 4.49912 -69.17399 L -22.49561 -69.17399 L 12.37258 -63.550090000000004 L -26.994730000000004 -63.550090000000004 L 19.121259999999992 -57.926190000000005 L -33.743410000000004 -57.926190000000005 L 29.244289999999992 -52.302290000000006 L -41.616870000000006 -52.302290000000006 L 38.24252999999999 -46.67839000000001 L -49.490330000000014 -46.67839000000001 L 44.991219999999984 -39.92971000000001 L -56.23901000000002 -39.92971000000001 L 53.98945999999998 -34.30581000000001 L -62.987690000000015 -34.30581000000001 L 61.86292999999999 -28.68191000000001 L -70.86115 -28.68191000000001 L 69.73639000000001 -21.93323000000001 L -77.60982999999997 -21.93323000000001 L 76.48507000000002 -16.30933000000001 L -85.48329999999997 -16.30933000000001 L 83.23375000000003 -9.56065000000001 L -92.23197999999998 -9.56065000000001 L 83.23375000000003 -2.8119700000000094 L -92.23197999999998 -2.8119700000000094 L 89.98243000000001 1.6871499999999902 L -97.85588 1.6871499999999902 L -97.85588 9.56060999999999 L 89.98243000000001 9.56060999999999 L -92.23197999999998 1.6871499999999902 L -97.85587999999998 15.18450999999999 L 96.73111 15.18450999999999 L -103.47979000000001 20.80840999999999 L 103.47978999999998 20.80840999999999 L -110.22847000000002 25.869919999999993 L 111.35324999999997 25.869919999999993 L -116.97715000000002 32.05620999999999 L 116.97715999999997 32.05620999999999 L -123.72583000000003 39.929669999999994 L 123.72583999999998 39.929669999999994 L -130.47451 47.803129999999996 L 131.59929999999997 47.803129999999996 L -138.34798 53.427029999999995 L 131.59929999999997 53.427029999999995 L -143.97188000000006 60.175709999999995 L 141.72231999999997 60.175709999999995 L -150.72056000000003 66.92438999999999 L 150.72055999999998 66.92438999999999 L -41.616870000000034 75.92262999999998 L 19.121269999999967 75.92262999999998 L -41.616870000000034 84.92086999999998 L 12.372589999999967 84.92086999999998 L -41.616870000000034 97.29344999999998 L 19.121269999999967 97.29344999999998 L -41.616870000000034 108.54124999999998 L 19.121269999999967 108.54124999999998 L -13.497360000000036 116.41470999999997 L -13.497360000000036 158.03157999999996 L -13.497360000000036 158.03157999999996"
          pathLength="1"
        />
      </g>
    </svg>
  </div> -->
</template>
<script>
export default {
  name: "Pics",
  data() {
    return {};
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      let reveals = document.querySelectorAll(".path");
      for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    },
  },
};
</script>
<style scoped>
.container {
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.1'/></svg>");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.path.active {
  stroke-dasharray: 1;
  stroke-dashoffset: 1;
  animation: dash 10s ease alternate forwards;
  animation-delay: 1s;
  animation-iteration-count: 1;
}

.test {
  display: flex;
  justify-content: center;
  margin-top: -180px;
  margin-bottom: -120px;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1;
  }
  to {
    stroke-dashoffset: 0;
  }
}
hr {
  background-color: #3f331e;
  width: 80%;
  height: 3px;
  margin: 0 auto;
}
.title {
  padding-top: 40px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  letter-spacing: -4px;
  color: #3f331e;
}
.text {
  padding: 20px;
  margin-bottom: -30px;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19.5px;
  color: #3f331e;
}
.text-2 {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19.5px;
  color: #3f331e;
  margin-top: -120px;
  padding: 0 20px 50px 20px;
}
.position {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19.5px;
  color: #3f331e;
  text-align: right;
  padding: 10px 20px;
}
.position-kipe {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19.5px;
  color: #3f331e;
  text-align: left;
  padding: 10px 120px 10px 20px;
}
.position-tabule {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 19.5px;
  color: #3f331e;
  text-align: right;
  padding: 10px 20px 0px 50px;
}
.final-text {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 21px;
  color: #3f331e;
  text-align: center;
  padding: 50px 20px 20px 20px;
  margin-bottom: 50px;
}
.hummus {
  width: 450px;
  position: relative;
  left: 23%;
  filter: drop-shadow(0 0 0.25rem grey);
}
.tabule {
  margin-top: -20px;
  width: 450px;
  right: 0%;
  position: relative;
  filter: drop-shadow(0 0 0.25rem grey);
}
.kipenaye {
  width: 450px;
  position: relative;
  filter: drop-shadow(0 0 0.25rem grey);
}
.falafel {
  width: 450px;
  position: relative;
  right: 7%;
  margin-top: -50px;
  filter: drop-shadow(0 0 0.25rem grey);
}

@media (min-width: 601px) and (max-width: 999px) {
  .title {
    padding-top: 40px;
    margin-bottom: 60px;
    letter-spacing: -2px;
  }
  .position {
    padding: 35px;
  }
  .text {
    padding: 20px 90px 20px 20px;
  }
  .text,
  .position,
  .position-kipe,
  .position-tabule {
    font-size: 20px;
  }
  .hummus {
    left: 62%;
    margin-top: -60px;
  }
  .falafel {
    left: 45%;
    margin-top: -100px;
  }
  .tabule {
    margin-top: -70px;
  }
  .kipenaye {
    margin-top: -30px;
  }
}

@media (min-width: 1000px) {
  .title {
    padding-top: 40px;
    margin-bottom: 60px;
    letter-spacing: -2px;
  }
  .position {
    padding: 25px;
  }
  .text,
  .position,
  .position-kipe,
  .position-tabule {
    font-size: 20px;
  }
  .hummus {
    left: 72%;
    margin-top: -50px;
  }
  .falafel {
    left: 61%;
    margin-top: -100px;
  }
  .tabule {
    margin-top: -90px;
  }
  .kipenaye {
    margin-top: -70px;
  }
  hr {
    width: 60%;
  }
  .final-text {
    padding-bottom: 50px;
  }
}
</style>
