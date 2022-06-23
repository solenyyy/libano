<template>
  <div class="section-menu">
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
      <h2>Nuestra Carta</h2>
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
.section-menu {
  color: #3c3c3c;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 60px;
  height: 450px;
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
}
p {
  text-align: left;
}
.btn-container {
  margin-top: 30px;
}
.menu-btn {
  border: 2px solid #3c3c3c;
  border-radius: 8px;
  padding: 5px 10px;
}
.menu-btn:hover {
  border: 2px solid #ee161f;
  font-weight: 600;
}
@media (max-width: 600px) {
  .section-menu {
    flex-direction: column;
    margin: 20px 30px;
    height: 550px;
  }
  .container-carousel,
  .container-info {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
