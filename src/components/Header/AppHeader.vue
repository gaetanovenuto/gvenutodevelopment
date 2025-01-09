<script>
import { onMounted, ref } from 'vue';

export default {
  data() {
    return {
      navbarLinks: [
        { name: "Home", href: "/" },
        { name: "Chi sono", href: "/about" },
        { name: "I miei progetti", href: "/projects" },
      ],
    };
  },
};
</script>


<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid d-flex justify-content-between align-items-center">
          <!-- Logo -->
          <router-link to="/" class="navbar-brand">
            <img src="/img/GVDevelopment Logo zoom.png" alt="Logo" height="75" class="logo-img" />
          </router-link>
          <!-- Hamburger Menu -->
          <button
            class="navbar-toggler d-lg-none border-white p-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <img src="/icons/hamburgerMenu.svg" width="28" alt="Menu">
          </button>
          <!-- Links Navbar -->
          <div class="collapse navbar-collapse d-none d-lg-flex justify-content-center">
            <ul class="navbar-nav nav-links">
              <li v-for="(link, index) in navbarLinks" :key="index" class="nav-item">
                <router-link :to="link.href" class="nav-link single-nav-link">{{ link.name }}</router-link>
              </li>
            </ul>
          </div>
          <!-- Contact Button -->
          <router-link to="/contacts" class="contact-button d-none d-lg-flex">
            <button class="btn btn-contact">Contattami</button>
          </router-link>
        </div>
      </nav>
      <!-- Offcanvas -->
      <div
      class="offcanvas offcanvas-end"
      tabindex="-1"
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Menu</h5>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <!-- Links posizionati all'inizio -->
        <ul class="navbar-nav flex-grow-1">
          <li v-for="(link, index) in navbarLinks" :key="index" class="nav-item" data-bs-dismiss="offcanvas">
            <router-link :to="link.href" class="nav-link">{{ link.name }}</router-link>
          </li>
          <!-- Contact Button -->
          <router-link to="/contacts" class="contact-button my-3">
            <button class="btn btn-contact" data-bs-dismiss="offcanvas">Contattami</button>
          </router-link>
        </ul>
      </div>
    </div>

    </div>
  </header>
</template>


<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

header {

    a {
        text-decoration: none;
    }

    .logo-img {
        opacity: 0.8;
        transition: opacity 0.3s;
        &:hover {
            opacity: 1;
        }
    }
    .nav-links {
        .single-nav-link {
            text-decoration: none;
            color: rgba(253, 253, 253, 0.7);
            &:hover {
            color: white;
            }
        }
    }
    .btn-contact {
        border: 2px solid rgba(253, 253, 253, 0.7);
        color: rgba(253, 253, 253, 0.7);
        text-decoration:none;

        &:hover {
        background: white;
        color: black;
        }
        
    }

    .offcanvas {
  background: linear-gradient(to right, #000000 70%, #001f3f 80%, #003f7f 90%, #01305f 100%);
  background-size: 200% 100%;
  animation: offcanvasGradientAnimation 10s ease infinite;
  color: #ffffff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@keyframes offcanvasGradientAnimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.offcanvas-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.offcanvas-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.btn-close {
  color: #ffffff;
  filter: brightness(0.8);
}

.btn-close:hover {
  filter: brightness(1);
}

.offcanvas-body {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.nav-link {
  color: #ffffff;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #00bfff;
  text-shadow: 0 0 10px #00bfff;
}

@media (max-width: 768px) {
  .offcanvas {
    padding: 1.5rem;
  }
  .nav-link {
    font-size: 1rem;
  }
}

}
</style>
