<script>
import { store } from '../../store';

export default {
    data() {
        return { 
            store
        };
    },
    computed: {
        navbarLinks() {
            return this.store.navbarLinks;
        },
    },
};
</script>

<template>
    <header>
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid d-flex justify-content-between align-items-center">
                    <!-- Logo (a sinistra) -->
                    <a href="/" class="navbar-brand">
                        <img src="../../../public/img/GVDevelopment Logo zoom.png" alt="Logo" height="75" class="logo-img">
                    </a>
                    
                    <!-- Hamburger menu (solo per schermi piccoli) -->
                    <button
                        class="navbar-toggler d-lg-none border-white p-2"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasNavbar"
                        aria-controls="offcanvasNavbar"
                        aria-label="Toggle navigation">
                        <i class="fa-solid fa-bars fa-xl link-style"></i>
                    </button>

                    <!-- Links al centro (schermi grandi) -->
                    <div class="collapse navbar-collapse d-none d-lg-flex justify-content-center">
                        <ul class="navbar-nav nav-links">
                            <li class="nav-item" v-for="(link, index) in navbarLinks" :key="index">
                                <a class="nav-link single-nav-link" :href="link.href">
                                    {{ link.name }}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <!-- Pulsante Contattami a destra -->
                    <div class="d-none d-lg-flex">
                        <a href="#" class="contact-button">
                            <button class="btn btn-contact">
                                Contattami
                            </button>
                        </a>
                    </div>

                    <!-- Menù OffCanvas (solo per schermi piccoli) -->
                    <div
                        class="offcanvas offcanvas-end d-lg-none"
                        tabindex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                    >
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
                            <ul class="navbar-nav nav-links flex-column align-items-start">
                                <li class="nav-item" v-for="(link, index) in navbarLinks" :key="index">
                                    <a class="nav-link single-nav-link" :href="link.href">
                                        {{ link.name }}
                                    </a>
                                </li>
                                <!-- Contact button -->
                                <li class="nav-item mt-3">
                                    <a href="#" class="contact-button">
                                        <button class="btn btn-contact">
                                            Contattami
                                        </button>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/partials/variables' as *;

/* Header e navbar */
header {
    .container {
        .navbar {
            .container-fluid {
                /* Logo */
                .logo-img {
                    opacity: 0.8;
                    transition: opacity 0.3s;
                    &:hover {
                        opacity: 1;
                    }
                }
            }

            /* Link centrali */
            .nav-links {
                display: flex;
                gap: 15px;
                .nav-item {
                    .single-nav-link {
                        text-decoration: none;
                        color: rgba(253, 253, 253, 0.7);
                        transition: color 0.3s;
                        &:hover {
                            color: white;
                        }
                    }
                }
            }

            /* Pulsante contattami */
            .btn-contact {
                padding: 10px 20px;
                border-radius: 5px;
                border: 2px solid white;
                background: none;
                color: white;
                font-weight: bold;
                transition: all 0.3s;
                &:hover {
                    background: white;
                    color: #001f3f;
                }
            }
        }
    }
}

/* Offcanvas */
.offcanvas {
    background: linear-gradient(to right, #000000 70%, #001f3f 80%, #003f7f 90%, #01305f 100%);
    
    color: white;
}
</style>
