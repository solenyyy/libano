<template>
  <div class="container-grey">
    <div>
      <div class="h1">
        40 años de <strong>auténtica</strong> comida libanesa
      </div>
    </div>

    <div class="timeline">
      <div class="spacer query"></div>
      <img class="icon" src="../../assets/restaurant.png" alt="" />

      <div class="wrapper" data-aos="fade-down" data-aos-duration="1700">
        <h2>¿Quiénes somos?</h2>
        <p class="texto">
          Con 17 años, <strong> Alí Mohsen</strong>, propietario de El Líbano,
          llegó a Tenerife, donde un familiar le enseñó
          <em>todos los secretos de la cocina libanesa.</em> De este modo, fundó
          este establecimiento, <u> todo un referente</u> incluso, mucho más
          allá de las fronteras del Archipiélago.
        </p>
      </div>
    </div>

    <div class="timeline">
      <div class="spacer" data-aos="fade-up" data-aos-duration="1500">
        <h2>¿Cómo lo hacemos?</h2>
        <p class="middle">
          La clave del éxito del restaurante es
          <strong>mantener la materia prima de calidad</strong>, ofrecer el
          mejor servicio, <em>el cariño a los clientes</em> e intentar mejorar
          el día a día.
        </p>
      </div>

      <img class="icon" src="../../assets/vegetables-line.png" alt="" />
      <div class="wrapper query"></div>
    </div>
    <div class="timeline">
      <div class="spacer query"></div>
      <img class="icon" src="../../assets/fast-delivery.png" alt="" />

      <div class="wrapper" data-aos="fade-down" data-aos-duration="1500">
        <h2>Comida a domicilio</h2>
        <p class="texto">
          <u>Abierto todos los días,</u> domingos y festivos incluidos, se puede
          pedir comida para llevar y,
          <em><strong> ahora también lo llevamos a domicilio</strong></em> con
          la APP de Glovo.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@300;400;700&display=swap");
.container-grey {
  font-size: 18px;
  color: #3c3c3c;
  width: 100%;
  padding: 50px 20px;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(149, 100%, 33%, 1)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(4, 90%, 58%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.1'/></svg>");
}
.h1 {
  font-size: 39px;
  text-align: left;
  padding-bottom: 60px;
  font-style: italic;
  margin-left: 15px;
  letter-spacing: -1px;
}
.timeline {
  font-family: "Roboto Condensed", sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-bottom: 30px;
}
.icon {
  width: 75px;
}
h2 {
  font-weight: 600;
  margin-bottom: 10px;
}
p {
  text-align: justify;
}
.arrow {
  font-size: 75px;
  color: rgb(142, 2, 2);
}

.spacer,
.query,
.wrapper {
  width: 33%;
}

@media (max-width: 600px) {
  .container-grey {
    padding: 50px 2px 10px 2px;
  }
  .timeline {
    justify-content: space-around;
    text-align: center;
    margin-bottom: 60px;
  }
  .query {
    display: none;
  }
  .icon {
    width: 60px;
  }
  .wrapper,
  .spacer {
    width: 60%;
  }
  .arrow {
    display: none;
  }
}
</style>
