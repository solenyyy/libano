<template>
  <div class="container" id="anchor2">
    <div class="test" :scroll="handleScroll">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="250px"
        viewBox="0 0 08190.100060 1084.000000"
      >
        <g
          transform="translate(0.000000,1984.000000) scale(0.100000,-0.100000)"
          class="path"
          fill="transparent"
          stroke="black"
          stroke-width="60"
        >
          <path
            d="M79805 19634 c-518 -340 -1324 -844 -1839 -1148 -1986 -1175 -3791
-2037 -5591 -2669 -3102 -1089 -6407 -1520 -11188 -1458 -1157 15 -1659 28
-3747 96 -1110 36 -1765 56 -2575 77 -649 17 -3113 17 -3645 0 -1736 -56
-3092 -142 -4610 -293 -6970 -692 -13745 -2500 -19924 -5319 -446 -203 -889
-413 -1491 -705 -601 -292 -899 -433 -1172 -554 -993 -440 -1744 -661 -2543
-748 -230 -25 -817 -25 -1035 0 -551 64 -1004 183 -1480 389 -1532 662 -2841
2126 -3615 4042 -39 98 -70 184 -68 191 2 7 77 80 168 162 1197 1075 2212
2293 2974 3572 294 493 619 1131 791 1556 276 678 285 1160 30 1550 -58 89
-207 234 -307 299 -239 155 -511 228 -863 229 -265 1 -488 -31 -760 -110 -703
-204 -1415 -756 -1878 -1455 -425 -641 -661 -1350 -754 -2268 -25 -246 -25
-943 0 -1210 69 -739 211 -1411 438 -2070 39 -113 73 -212 76 -221 5 -17 -114
-124 -437 -390 -2470 -2037 -5797 -3725 -9665 -4904 -1594 -486 -3181 -859
-5062 -1190 -29 -5 -33 -10 -33 -35 0 -19 5 -30 14 -30 28 0 795 142 1171 216
5640 1119 10517 3263 13835 6084 100 85 189 155 197 155 10 0 33 -45 67 -130
628 -1559 1621 -2846 2801 -3630 664 -441 1388 -725 2125 -835 356 -52 830
-69 1155 -41 706 62 1380 235 2205 566 434 174 821 352 1670 765 4263 2077
8582 3599 13295 4685 4843 1116 9883 1669 14875 1631 1234 -9 1832 -24 4505
-111 2114 -69 2642 -79 4055 -80 1209 0 1541 5 2265 35 4117 172 7131 847
10375 2323 1620 737 3387 1726 5183 2904 103 67 192 123 198 123 5 0 9 18 9
40 0 22 -1 40 -2 39 -2 0 -88 -56 -193 -125z m-61402 -818 c329 -62 578 -200
749 -415 204 -255 262 -607 172 -1034 -64 -305 -223 -696 -519 -1282 -752
-1486 -1798 -2855 -3150 -4121 -248 -233 -376 -344 -395 -344 -30 0 -193 507
-294 918 -217 878 -292 1810 -210 2602 69 669 235 1258 499 1775 190 371 403
664 700 961 530 531 1083 832 1716 933 178 29 182 29 424 26 151 -2 247 -8
308 -19z"
            pathLength="1"
          />
        </g>
      </svg>
    </div>
    <h1 class="title">NUESTRA CARTA</h1>
    <p class="text">
      <em>Una carta tradicional</em> aunque sujeta a la
      <u>innovación permanente</u>
      es la característica <br />
      principal de la cocina libanesa.
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
    <div class="container-btn">
      <router-link class="menu-btn" to="/menu" @click="scrollToTop">
        Carta Online
      </router-link>
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
    scrollToTop() {
      window.scrollTo(0, 0);
    },
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
.container-btn {
  display: flex;
  justify-content: center;
  margin-bottom: 60px;
  font-family: "Unica One", cursive;
  font-size: 19px;
  font-weight: 600;
}
.menu-btn {
  margin: 0px 5px;
  padding: 9px 120px;
  background-color: transparent;
  border: 2px solid #b9935a;
  color: black !important;
}
.menu-btn:hover {
  background-color: #b9935a;
  border: 2px solid #b9935a;
  color: white !important;
}
.test {
  margin-top: -120px;
  margin-bottom: -50px;
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
  border: 1px solid #3f331e;
  width: 70%;
  height: 1px;
  margin: 0 auto;
}
.title {
  padding-top: 30px;
  margin-bottom: 20px;
  text-align: center;
  font-size: 40px;
  letter-spacing: -4px;
  color: #3f331e;
  font-family: "Unica One", cursive;
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
  font-size: 19.5px;
  color: #3f331e;
  text-align: right;
  padding: 10px 20px;
}
.position-kipe {
  font-size: 19.5px;
  color: #3f331e;
  text-align: left;
  padding: 10px 120px 10px 20px;
}
.position-tabule {
  font-size: 19.5px;
  color: #3f331e;
  text-align: right;
  padding: 10px 20px 0px 50px;
}
.final-text {
  font-size: 21px;
  color: #3f331e;
  text-align: center;
  padding: 50px 20px 20px 20px;
  margin-bottom: 30px;
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

@media (min-width: 500px) and (max-width: 1050px) {
  .title {
    padding-top: 60px;
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

@media (min-width: 1051px) {
  .test {
  }
  .title {
    padding-top: 90px;
    margin-bottom: 70px;
    letter-spacing: -2px;
  }
  .position {
    padding: 25px;
  }

  .text,
  .position,
  .position-tabule,
  .position-kipe {
    text-align: center;
    padding: 0;
  }

  .hummus {
    left: 71%;
    margin-top: -100px;
  }
  .falafel {
    left: 60%;
    margin-top: -220px;
  }
  .tabule {
    margin-top: -200px;
  }
  .kipenaye {
    margin-top: -200px;
  }
  hr {
    width: 60%;
  }
  .final-text {
    padding-bottom: 50px;
  }
}
</style>
