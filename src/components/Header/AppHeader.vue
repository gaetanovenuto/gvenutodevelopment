<script>
import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      navbarLinks: [
        { name: "Home", href: "/" },
        { name: "About me", href: "#about-me" },
        { name: "Il mio percorso", href: "#timeline" },
        // { name: "Skills", href: "#skills" },
        // { name: "Progetti", href: "#projects" },
      ],
      animateLinks: ref(false),
    };
  },
  mounted() {
    this.animateLinks = true;
  },
  methods: {
    closeOffcanvasAndNavigate(href) {
        // Prima chiudo l'offcanvas
        const offcanvasElement = document.getElementById('offcanvasNavbar');
        const offcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
        offcanvas.hide();
        
        // Aspettiamo che l'animazione di chiusura sia completa
        offcanvasElement.addEventListener('hidden.bs.offcanvas', () => {
            // Poi navighiamo alla sezione
            if (href.startsWith('#')) {
                const element = document.querySelector(href);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                window.location.href = href;
            }
        }, { once: true });
    }
  }
};
</script>

<template>
  <header>
      <nav class="navbar navbar-expand-lg" id="navbar">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <!-- Logo -->
          <div class="open-to-work">
              <span class="green-point"></span> 
              Open to work
          </div>
          <!-- Hamburger Menu -->
          <button
            class="navbar-toggler d-lg-none border-white p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <i class="fa-solid fa-bars fa-xl border-none"></i>
          </button>
          <!-- Links Navbar -->
          <div class="collapse navbar-collapse d-none d-lg-flex justify-content-center">
                <ul class="navbar-nav nav-links">
                    <li 
                        v-for="(link, index) in navbarLinks" 
                        :key="index" 
                        class="nav-item fade-in"
                        :style="{ animationDelay: index * 0.2 + 's' }"
                    >
                        <a :href="link.href" class="nav-link single-nav-link">
                          {{ link.name }}
                        </a>
                    </li>
                </ul>

            </div>
            <!-- Contact Button -->
            <a href="#contact" class="contact-button d-none d-lg-flex">
                <button class="btn btn-contact bg-primary py-3 px-4 border-0 me-4">
                    <span class="tooltip-text">Contattami!</span>
                    <i class="fa-regular fa-comment fa-lg text-white"></i>
                </button>
            </a>
        </div>
      </nav>
      <!-- Offcanvas -->
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasNavbarLabel">GVDEVELOPMENT</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <!-- Links posizionati all'inizio -->
          <ul class="navbar-nav flex-grow-1" :class="{ 'fade-in': animateLinks }">
            <li v-for="(link, index) in navbarLinks" :key="index" class="nav-item">
              <a 
                :href="link.href" 
                class="nav-link" 
                data-bs-dismiss="offcanvas"
                @click.prevent="closeOffcanvasAndNavigate(link.href)"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

header {
  .open-to-work {
    color: #111111;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .8px;

    .green-point {
      width: 10px;
      height: 10px;
      background-color: green;
      border-radius: 50%;
      display: inline-block;
      margin: 0 5px;
      animation: pulse 1.5s infinite ease-in-out;
    }

    @keyframes pulse {
      0% { transform: scale(1); opacity: 1; }
      50% { transform: scale(1.5); opacity: 0.6; }
      100% { transform: scale(1); opacity: 1; }
    }
  }

  .nav-link {
    color: #111111;
    font-size: 1.2rem;
    font-weight: 700;
    letter-spacing: .8px;
    margin: 0 5px;
    text-decoration: none;
    transition: color 0.3s ease, transform 0.3s ease-out;
  }

  .nav-link:hover {
    transform: translateY(-5px);
  }

  /* Effetto fade-in progressivo */
  .fade-in {
    opacity: 0;
    transform: translateY(15px);
    animation: fadeIn 1s ease-out forwards;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Animazione in entrata per il pulsante dei contatti */
  .fade-in-btn {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInBtn 1s ease-out 0.8s forwards;
  }

  @keyframes fadeInBtn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Effetto hover sul pulsante dei contatti */
  .btn-contact {
    position: relative;
    transition: transform 0.3s ease-out, background-color 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background-color: darken(#0d6efd, 10%);
      
      .tooltip-text {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  /* Tooltip (fumetto) */
  .tooltip-text {
    position: absolute;
    bottom: 25%;
    right: 125%;
    background-color: #007a10;
    color: #fff;
    font-size: 14px;
    padding: 6px 10px;
    border-radius: 6px;
    white-space: nowrap;
    opacity: 0;
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
    
    &::after {
      content: "";
      position: absolute;
      top: 40%;
      left: 99%;
      transform: translateX(-50%);
      transform: rotate(270deg);
      border-width: 6px;
      border-style: solid;
      border-color: #007a10 transparent transparent transparent;
    }
  }
}


</style>
