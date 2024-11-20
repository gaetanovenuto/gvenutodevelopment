<script>
export default {
  data() {
    return {
      navbarLinks: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
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
            <img src="/public/icons/hamburgerMenu.svg" width="28" alt="Menu">
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
            <button class="btn btn-contact">
              <router-link :to="{ name: 'contacts' }" class="nav-link single-nav-link">Contattami</router-link>
            </button>
          </router-link>
        </div>
      </nav>
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
}
</style>
