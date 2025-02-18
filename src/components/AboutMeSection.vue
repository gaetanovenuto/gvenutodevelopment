<script>
import { store } from '../store'
export default {
    data() {
        return {
            store,
            
        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    },
    beforeUnmount() {

    }

}
</script>

<template>
    <div class="about-me py-2" id="about-me">
        <h4 class="text-center my-5 fw-light">
            ABOUT ME
        </h4>
        <div class="container">
            <div class="row">
                <div class="col-11 mx-auto col-md-8 p-3 my-2 card">
                    <div class="row justify-content-between">
                        <div class="col-1">
                            <img src="/public/img/Venuto_Gaetano_profilePic_centered.jpg" alt="Gaetano Venuto" class="profile-img">
                        </div>
                        <div class="col-1 me-4">
                            <img src="/public/img/github.svg" alt="GitHub" class="icon-img">
                        </div>
                    </div>
                    <div class="row justify-content-between flex-column">
                        <div class="col-6">
                            <h4 class="github-title">
                                Gaetano Venuto
                            </h4>
                        </div>
                        <div class="col-12 d-flex justify-content-between align-items-center">
                            <div class="col-5 d-flex">
                                <p class="github-name">
                                    gaetanovenuto
                                </p>
                            </div>
                            <div class="col-5 d-flex justify-content-end">
                                <button class="border-0 bg-primary rounded p-2">
                                    <a href="https://github.com/gaetanovenuto" class="text-decoration-none text-white">Visita il mio profilo github</a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-11 mx-auto col-md-3 card d-flex my-2 justify-content-center align-items-center">
                    <h4 class="text-center pt-2">I miei social networks</h4>
                    <a href="https://www.instagram.com/gaetanovenuto_/" class="social-icon text-decoration-none">
                        <i class="fab fa-instagram"></i>
                        Instagram
                    </a>
                    <a href="https://www.linkedin.com/in/gaetanovenuto/" class="social-icon text-decoration-none">
                        <i class="fab fa-linkedin"></i>
                        LinkedIn
                    </a>
                    <a href="https://www.facebook.com/gaetano.venuto.14/" class="social-icon text-decoration-none">
                        <i class="fab fa-facebook"></i>
                        Facebook
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>

.about-me {
    background-color: #f8f9fa;
}

.profile-img {
    width: 75px;
    height: 75px;
    border-radius: 50%;
    margin: 10px;
}

.icon-img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    margin: 10px;
}

.github-title {
    font-size: 20px;
    letter-spacing: .5px;
}

.github-name {
    font-size: 16px;
    color: rgba(141, 135, 135, 0.911);
}

.custom-btn {
    background-color: #007bff;
    border: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.custom-btn:hover {
    background-color: #0056b3;
    transform: scale(1.05);
}

.social-icon {
    font-size: 18px;
    color: #333;
    margin: 10px 0;
    transition: transform 0.2s ease, color 0.3s ease;
}

.social-icon:hover {
    color: #007bff;
    transform: scale(1.2);
}
</style>