<template>
  <div class="container-booking">
    <div class="maps">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042.7531178740512!2d-16.26385304440926!3d28.46781633664787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc860b861375%3A0xe930acdb61803a26!2sRestaurante%20El%20L%C3%ADbano!5e0!3m2!1ses!2ses!4v1655909725334!5m2!1ses!2ses"
        width="380"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <div class="info-booking">
      <h2>Contacto y Reservas</h2>
      <p><strong> Dirección:</strong></p>
      <p>Calle de Santiago Cuadrado, 36. 38006.</p>
      <p>Santa Cruz de Tenerife.</p>
      <p><strong> Teléfonos:</strong></p>
      <p>
        <a href="tel:+34922285914">922 28 59 14</a> <br />
        <a href="tel:+34922282542">922 28 25 42</a>
      </p>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.container-booking {
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  color: 3c3c3c;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(4, 90%, 58%, 1)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='hsla(149, 100%, 33%, 1)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.1'/></svg>");
}
.info-booking {
  width: 41%;
}
h2 {
  font-size: 40px;
  text-align: center;
  padding-bottom: 30px;
}
p {
  text-align: center;
}
a {
  margin: 0 auto;
}
a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #3c3c3c;
}
@media (max-width: 600px) {
  .container-booking {
    flex-direction: column-reverse;
    justify-content: space-evenly;
    height: 43rem;
  }
  .info-booking {
    width: 100%;
  }
}
</style>
