<template>
  <div class="test" id="anchor">
    <h2 class="h2">CONTACTO</h2>
    <div class="info-booking-test">
      <div class="flex-item">
        <p class="title"><strong>HORARIO</strong></p>
        <p>
          <strong> Lunes a Domingo</strong> <br />
          13:00 a 16:30 y de 20:00 a 23:30
        </p>
      </div>
      <div class="flex-item">
        <p class="title"><strong>DIRECCIÓN</strong></p>
        <p>Calle de Santiago Cuadrado, 36.</p>
        <p>Santa Cruz de Tenerife.</p>
        <p><strong>Disponemos de parking privado</strong></p>
      </div>
      <div class="flex-item">
        <p class="title"><strong>TELÉFONO / EMAIL</strong></p>
        <div class="bottom">
          <p>
            <a href="tel:+34922285914">+34 <strong> 922 28 59 14</strong></a>
          </p>
          <p>
            <a href="tel:+34922282542">+34 <strong> 922 28 25 42</strong></a>
          </p>
          <p>
            <a href="mailto:restauranteellibano@gmail.com">
              restauranteellibano@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
    <div class="maps-test">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1042.7531178740512!2d-16.26385304440926!3d28.46781633664787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cc860b861375%3A0xe930acdb61803a26!2sRestaurante%20El%20L%C3%ADbano!5e0!3m2!1ses!2ses!4v1655909725334!5m2!1ses!2ses"
        width="100%"
        height="300"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>
<script></script>
<style scoped>
/* test */
.info-booking-test {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 20px 0 50px 0;
}
.flex-item {
  width: 33.3%;
}
.test {
  color: #3f331e;
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='80' height='80' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,1)'/><path d='M69.84 0l-7.86 7.86L54.1 0l7.87-7.86zm18.02 18.02L80 25.88l-7.86-7.86L80 10.16zm-80 43.96L0 69.84l-7.86-7.86L0 54.1zM25.88 80l-7.86 7.86L10.16 80l7.86-7.86zm36.1-7.86L69.84 80l-7.86 7.86L54.1 80zM80 54.1l7.86 7.87L80 69.84l-7.86-7.86zM0 10.16l7.86 7.86L0 25.88l-7.86-7.86zM18.02-7.86L25.88 0l-7.86 7.86L10.16 0z'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/><path d='M48.1 80c0 4.47-3.63 8.1-8.1 8.09A8.1 8.1 0 1148.1 80zm6.26-40H71.6M40 71.9V54.38m0-28.74V8.09m5.24 12.3a20.3 20.3 0 0114.37 14.37m0 10.48a20.3 20.3 0 01-14.38 14.37m-10.48 0A20.3 20.3 0 0120.4 45.24m0-10.48a20.3 20.3 0 0114.37-14.37M5.72 45.72A8.1 8.1 0 11-6.22 34.78 8.1 8.1 0 015.72 45.72zm80 0a8.1 8.1 0 11-11.94-10.94 8.1 8.1 0 0111.94 10.94zM48.09 0c0 4.47-3.62 8.1-8.09 8.09A8.07 8.07 0 0131.9 0 8.1 8.1 0 0148.1 0zM40 25.63L54.37 40 40 54.37 25.63 40zm5.72-19.91l28.1 29.02m.22 11.22L45.72 74.28m-11.44 0L5.72 45.72M5.24 34.3L34.28 5.72M8.08 40h17.55'  stroke-linecap='square' stroke-width='0.5' stroke='	hsla(36, 40%, 54%)' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)' opacity='0.1'/></svg>");
}
.info-booking {
  width: 41%;
}
.h2 {
  font-size: 40px;
  text-align: center;
  padding-top: 40px;
  letter-spacing: -4px;
  color: #3f331e;
}
.title {
  font-size: 20px;
  padding: 5px;
  font-weight: 900;
  color: #b9935a;
  letter-spacing: -1.5px;
}
p {
  font-size: 19px;
  text-align: center;
}

.maps-test {
  margin-bottom: 20px;
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
  .info-booking-test {
    flex-direction: column;
    align-items: center;
  }
  .flex-item {
    width: 100%;
  }
}
</style>
