<template>
  <nav>
    <div class="nav-links">
      <a href="#" v-scroll-to="'#whoweare'">SOBRE NOSOTROS</a>
      <a href="#" v-scroll-to="'#anchor2'">NUESTRA CARTA</a>
      <a href="#" v-scroll-to="'#anchor'">RESERVAS</a>
    </div>

    <div v-on:click="openMobileNav()" id="burger">
      <div class="line1"></div>
      <div class="line2"></div>
      <div class="line3"></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",

  methods: {
    openMobileNav() {
      const burger = document.getElementById("burger");
      const nav = document.querySelector(".nav-links");
      const navLinks = document.querySelectorAll(".nav-links li");
      // Toggle navigation on mobile
      nav.classList.toggle("nav-active");
      // Burger toggler
      burger.classList.toggle("toggle");
      // Animate navigation links
      navLinks.forEach((link, index) => {
        if (link.style.animation || link.style.webkitAnimation) {
          link.style.animation = "";
          link.style.webkitAnimation = "";
        } else {
          link.style.webkitAnimation = `navLinkFade 0.5s ease forwards ${
            index / 7
          }s`;
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7}s`;
        }
      });
    },
    openDropdownNav() {
      const dropdownLink = document.querySelectorAll(".dropdown-link");
      dropdownLink.forEach((dropdown) => {
        dropdown.addEventListener("mouseover", () => {
          dropdown.children[1].style.display = "block";
        });
        dropdown.addEventListener("mouseleave", () => {
          dropdown.children[1].style.display = "none";
        });
      });
    },

    countClicksOnMobileDropdown() {
      const dropdownLink = document.querySelectorAll(".dropdown-link");
      dropdownLink.forEach((dropdown) => {
        let counts = dropdown.clicks || 0;
        dropdown.addEventListener("click", () => {
          counts++;
          if (counts % 2 == 0) {
            window.location.href = dropdown.children[0].getAttribute("href");
          } else {
            event.preventDefault();
            dropdown.children[1].style.display = "block";
            setTimeout(() => {
              dropdown.children[1].style.display = "none";
            }, 5000);
          }
        });
        setTimeout(() => {
          counts = 0;
        }, 8000);
      });
    },
  },
  mounted() {
    this.openDropdownNav();
    if (window.innerWidth < 768) {
      this.countClicksOnMobileDropdown();
    }
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 7vh;
  font-family: "Roboto Condensed", sans-serif;
  margin-right: 20px;
}
.nav-links {
  display: flex;
  justify-content: space-between;
  width: 40%;
  line-height: 75px;
}

#burger {
  display: none;
  cursor: pointer;
}
#burger div {
  width: 30px;
  height: 3px;
  margin: 8px;
  background-color: #3f331e;
  transition: all 0.3s ease-in;
}

a:link,
a:visited,
a:active {
  color: #3f331e;
  text-decoration: none;
}

/* Tablet */
@media screen and (max-width: 1024px) {
  .nav-links {
    width: 50%;
  }
}
/* Mobile */
@media screen and (max-width: 768px) {
  nav {
    font-size: 25px;
    justify-content: flex-start;
    min-height: 8vh;
  }
  .nav-links {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 92vh;
    top: 8vh;
    right: 0;
    padding: 100px;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }
  div#burger {
    display: block;
  }
}
.nav-active {
  transform: translateX(0) !important;
}
@keyframes navLinkFade {
  from {
    opacity: 0;
    transform: translateX(-60px);
  }
  to {
    opacity: 1;
    transform: translateX(0px);
  }
}
.toggle .line1 {
  transform: rotate(-45deg) translate(-9px, 10px);
}
.toggle .line2 {
  opacity: 0;
}
.toggle .line3 {
  transform: rotate(45deg) translate(-5px, -6px);
}
</style>
