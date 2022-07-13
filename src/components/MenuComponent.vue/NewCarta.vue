<template>
  <router-link to="/"> <div class="breadcrumb">Volver</div></router-link>

  <v-expansion-panels class="container-panel">
    <v-expansion-panel class="flex" v-for="item in items" :key="item">
      <v-list-item-title class="title"
        ><strong
          ><u> {{ item.title }}</u></strong
        ></v-list-item-title
      >
      <v-expansion-panel-header class="flex-2">
        <div class="item1">
          <strong>{{ item.name }}</strong>
        </div>
        <div class="item3">
          {{ item.price }}
          <v-icon @click="toggle(item)"
            ><strong>mdi-chevron-down</strong>
          </v-icon>
        </div>
      </v-expansion-panel-header>
      <v-expansion-panel-content class="desc" v-show="item.isActive">
        <p class="item-desc">{{ item.desc }}</p>
        <img class="food-pic" :src="item.pic" alt="" />
      </v-expansion-panel-content>
    </v-expansion-panel>
    <div class="igic"><strong>IGIC NO INCLUIDO</strong></div>
  </v-expansion-panels>
  <div class="container-alergenos">
    <div class="container-pics">
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/Soy_icon-icons.com_67593_ndopvc.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/IconoAlergenoMostaza-Mustard_icon-icons.com_67595_i3cd39.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/IconoAlergenoGranosSesamo-SesameGrains_icon-icons.com_67599_io72lb.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/IconoAlergenoLacteos-DairyProducts_icon-icons.com_67597_ksozrh.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/IconoAlergenoCacahuete-Peanuts_icon-icons.com_67604_uj5mer.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983601/IconoAlergenoGluten-Gluten_icon-icons.com_67600_db3ytt.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983600/IconoAlergenoDioxidoAzufreSulfitosSulfurDioxideSulphites_icon-icons.com_67602_ddy4av.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983600/IconoAlergenoApio-Celery_icon-icons.com_67605_wipv60.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983600/IconoAlergenoFrutosCascaraPeelFruits_icon-icons.com_67601_abdayz.png"
        alt=""
      />
      <img
        class="alergens"
        src="https://res.cloudinary.com/dleqykpqi/image/upload/v1655983600/IconoAlergenoAltramuces-Lupins_icon-icons.com_67606_zssgdg.png"
        alt=""
      />
    </div>
    <div class="info-alergenos">
      <p>
        En cumplimiento del Reglamento (UE) Nº 1169/2011 sobre la información
        alimentaria facilitada al consumidor, este establecimiento tiene
        disponible para su consulta la información relativa a la presencia de
        alérgenos de nuestros productos. Diríjase a nuestro personal para
        solicitar dicha información.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "Carta",
  data() {
    return {
      items: [
        { title: "SOPAS", name: "Sopa de Pollo", price: "4,50€" },
        { name: "Sopa de Tomate", price: "4,50€" },
        { name: "Sopa de Cebolla", price: "4,50€" },
        { name: "Consome", price: "4,25€" },
        { name: "Pan", desc: "Unidad", price: "0,95€" },
        {
          title: "ENSALADAS",
          name: "Tabule",
          desc: "Tomate, trigo y perejil",
          price: "7,95€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/4-Tabule-__gzpgnf.jpg",
        },
        {
          name: "Faitoch",
          desc: "Lechuga, tomate, pepino, rábano y pan frito",
          price: "8,50€",
        },
        {
          name: "Ensalada Árabe",
          desc: "Lechuga, tomate, pepino y rábano",
          price: "8,25€",
        },
        { name: "Ensalada de Col", price: "7,75€" },
        { name: "Kipe Banadura", desc: "Tomate con trigo", price: "7,95€" },
        {
          name: "Tomate Aliñado",
          desc: "Tomate con vinagreta y ajo",
          price: "6,95€",
        },
        { name: "Ensalada de Lechuga", price: "6,75€" },
        { name: "Yogurt con Pepino", price: "4,95€" },
        { name: "Servicio libanés", price: "7,50€" },
        {
          title: "CREMAS",
          name: "Mtabal",
          desc: "Berenjenas molidas con Tahine*",
          price: "7,25€",
        },
        {
          name: "Hommus",
          desc: "Garbanzas molidas con Tahine*",
          price: "7,25€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/1-Hommos-__fwqvad.jpg",
        },
        {
          name: "Hommus Blahem",
          desc: "Garbanzas molidas con carne",
          price: "7,95€",
        },
        { name: "Labne", desc: "Crema de yogurt con nueces", price: "7,25€" },
        {
          name: "Babaganush",
          desc: "Berenjena ahumada con verduras",
          price: "7,95€",
        },
        {
          title: "EMPANADAS",
          name: "Fatayer Esbeneg",
          desc: "Empanadas rellenas de espinacas",
          price: "8,25€",
        },
        {
          name: "Fatayer Blahem",
          desc: "Empanadas rellenas de carne",
          price: "8,25€",
        },
        {
          name: "Fatayer Yibne",
          desc: "Sambosik / empanadas rellenas de queso",
          price: "8,25€",
        },
        {
          name: "Lahmet Balling",
          desc: "Empanadas de carne y tomate al horno",
          price: "8,25€",
        },
        {
          name: "Kipe Michwiye",
          desc: "Carne con trigo frita rellena con carne",
          price: "8,25€",
        },
        {
          name: "Falafel",
          desc: "Molido frito de habas, garbanzas y verduras",
          price: "8,25€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Falafel-__jomsup.jpg",
        },
        {
          title: "VERDURAS",
          name: "Guarak Inab",
          desc: "Hojas de parra rellenas de arroz y verduras",
          price: "7,75€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Guarak-Inab-__obtgyp.jpg",
        },
        {
          name: "Celeg",
          desc: "Hojas de acelgas rellenas de arroz y verduras",
          price: "7,75€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Celeg-__xqx9qi.jpg",
        },
        {
          name: "Malfuf",
          desc: "Hojas de col rellenas de arroz y carne",
          price: "8,25€",
        },
        {
          name: "Arambit",
          desc: "Coliflor frita con salsa de sésamo",
          price: "8,95€",
        },
        { name: "Berenjenas Fritas", price: "8,50€" },
        {
          name: "Emsaha",
          desc: "Berenjena al horno con garbanzas y cebolla",
          price: "8,25€",
        },
        {
          name: "Shegue Elmehshe",
          desc: "Berenjena al horno con carne y tomate",
          price: "9,25€",
        },
        {
          name: "Kussa",
          desc: "Calabacín relleno de carne y piñones",
          price: "9,25€",
        },
        { name: "Beme", desc: "Verdura libanesa con arroz", price: "9,15€" },
        { name: "Plato del día (Yavaliye)", price: "12,75€" },
        { name: "Plato del día (Yes Mechen)", price: "12,75€" },
        { name: "Plato del día (Maluve)", price: "12,75€" },
        { name: "Plato del día (Strogonoff)", price: "12,75€" },
        {
          title: "CARNES",
          name: "Kipe Naye",
          desc: "Carne cruda con trigo y especias libanesas",
          price: "15,75€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907725/Kipe-Naye-__j6jeqo.jpg",
        },
        {
          name: "Aralles",
          desc: "Pan libanés relleno de carne",
          price: "9,75€",
        },
        {
          name: "Chawarma de pollo",
          desc: "Pollo a fuego lento con especias",
          price: "12,95€",
        },
        {
          name: "Chawarma de carne",
          desc: "Carne a fuego lento con especias",
          price: "15,25€",
        },
        {
          name: "Alas de pollo",
          desc: "Fritas con salsa de limón",
          price: "11,95€",
        },
        {
          name: "Jaruf Mehshe",
          desc: "Cordero al horno con arroz y frutos secos",
          price: "14,95€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/21-Jaruf-Mehshe-__zsqgqs.jpg",
        },
        {
          name: "Kafta Libanés",
          desc: "Carne molida con especias y salsa de tomate",
          price: "11,95€",
        },
        {
          name: "Pincho Libanés",
          desc: "Acompañado de guarnición",
          price: "15,95€",
        },
        {
          name: "Pincho de Pollo Libanés",
          desc: "Acompañado de guarnición",
          price: "13,95€",
        },
        {
          title: "GUARNICIONES",
          name: "Papas Jarra",
          desc: "papas fritas salteadas con ajo y limón",
          price: "3,75€",
        },
        { name: "Papas fritas", price: "4,50€" },
        { name: "Arroz con fideos", price: "3,75€" },
        { name: "Arroz de cordero", price: "3,95€" },
        {
          title: "POSTRES",
          name: "Baklawa",
          desc: "Hojaldre relleno de pistachos, nueces y miel",
          price: "1,95€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907725/Baklewe-__c49z3c.jpg",
        },
        {
          name: "Mahalaviye",
          desc: "Natillas con pistacho y miel",
          price: "3,45€",
        },
        {
          name: "Aysh Elsraya",
          desc: "Galleta molida con nata y pistacho",
          price: "3,45€",
          pic: "https://res.cloudinary.com/dleqykpqi/image/upload/v1655907724/Aysh-Elsraya-__adjgit.jpg",
        },
        { name: "Chayviye", desc: "Hojaldre relleno de nata", price: "4,50€" },
        {
          name: "Asmaliye",
          desc: "Fideos rellenos de natilla",
          price: "3,50€",
        },
        { name: "Knafe", desc: "Sémola de trigo con natilla", price: "3,95€" },
        { name: "Yogurt con miel", price: "3,50€" },
      ],
    };
  },
  methods: {
    toggle: function (item) {
      item.isActive = !item.isActive;
    },
  },
};
</script>
<style scoped>
.breadcrumb {
  text-decoration: underline;
  cursor: pointer;
  font-family: "Roboto Condensed", sans-serif;
}
.container-panel {
  font-family: "Roboto Condensed", sans-serif;
  font-size: 17px;
}
.flex {
  text-align: center;
}
.flex-2 {
  display: flex;
  justify-content: space-evenly;
}
.title {
  margin-top: 10px;
  letter-spacing: -1px;
  font-size: 18px;
}

.item1,
.item2,
.item3 {
  width: 15%;
}

.item1 {
  text-align: left;
}

.info-alergenos {
  width: 80%;
  margin: 30px auto;
  text-align: center;
}
.container-pics {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.alergens {
  width: 40px;
}
.desc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-desc {
  font-weight: 500;
  font-style: italic;
}
.container-alergenos {
  font-family: "Roboto Condensed", sans-serif;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(149, 100%, 33%, 1)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(4, 90%, 58%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.1'/></svg>");
}
p {
  margin-right: 10px;
}
.food-pic {
  width: 8%;
  padding-bottom: 3px;
}
.igic {
  margin-top: 10px;
}
@media (max-width: 600px) {
  .item1,
  .item2,
  .item3 {
    width: 90%;
  }
  .item1 {
    margin-left: 50px;
  }

  .alergens {
    width: 35px;
  }
  .desc {
    flex-direction: column;
  }
  .food-pic {
    width: 30%;
    margin: 10px 0;
  }
}
</style>
