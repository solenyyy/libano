<template>
  <div class="section-menu">
    <div class="background">
      <div class="container-carousel">
        <v-carousel hide-delimiters cycle style="height: auto">
          <v-carousel-item
            v-for="(item, i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </div>
      <div class="container-info">
        <h2>NUESTRA CARTA</h2>
        <p>
          Una carta tradicional aunque sujeta a la innovación permanente es la
          característica principal de la cocina libanesa que puede degustarse en
          este establecimiento, situado en la calle Santiago Cuadrado.
        </p>
        <div class="btn-container">
          <router-link class="menu-btn" to="/menu" @click="scrollToTop">
            VER LA CARTA
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/08-Restaurante_El_Libano-Nuestro-Restaurante-_rrqjt5.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907725/Kipe-Naye-__j6jeqo.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Falafel-__jomsup.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/21-Jaruf-Mehshe-__zsqgqs.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Guarak-Inab-__obtgyp.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Celeg-__xqx9qi.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/4-Tabule-__gzpgnf.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/06-Restaurante_El_Libano-Nuestro-Restaurante-_myyzql.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/03-Restaurante_El_Libano-Nuestro-Restaurante-_rqlwjc.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/1-Hommos-__fwqvad.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Aysh-Elsraya-__adjgit.jpg",
        },
        {
          src: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907725/Baklewe-__c49z3c.jpg",
        },
      ],
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
<style scoped>
a:link,
a:visited,
a:active {
  color: black;
  text-decoration: none;
}
.background {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.section-menu {
  color: #3c3c3c;
  display: flex;

  margin: 0 60px;
  height: 450px;
  font-size: 18px;
}
.container-carousel {
  width: 50%;
}
.container-info {
  width: 41%;
  text-align: center;
}
h2 {
  font-size: 40px;
  text-align: center;
  padding-bottom: 20px;
  margin: 0;
  letter-spacing: -4px;
}
p {
  text-align: left;
  font-family: "Roboto Condensed", sans-serif;
}
.btn-container {
  margin-top: 30px;
}
.menu-btn {
  border: 2px solid #3c3c3c;

  padding: 5px 10px;
}
.menu-btn:hover {
  border: 3px solid #3c3c3c;
  font-weight: 600;
}
@media (max-width: 600px) {
  .section-menu {
    margin: 0;
    padding: 5px;
    color: black;
    height: 48.5rem;
    background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.5'/></svg>");
  }
  .background {
    margin: 55px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* From https://css.glass */
    background: rgba(255, 255, 255, 0);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(3.7px);
    -webkit-backdrop-filter: blur(3.1px);
    padding: 20px;
  }
  .container-carousel,
  .container-info {
    width: 100%;
    margin-bottom: 20px;
  }
  .menu-btn {
    padding: 12px 119px;
    border: 2px solid #b9935a;
    background-color: #b9935a;
    color: white !important;
  }
}
</style>
