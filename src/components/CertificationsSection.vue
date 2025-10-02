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
    <div class="certifications" id="certifications">
        <div class="container py-4">
            <h4 class="text-center mt-2 fw-light">
                CERTIFICAZIONI
            </h4>
            <div class="row justify-content-center pb-4">
                <div class="col-3 d-flex align-items-center">
                    <img src="/img/Boolean.png" alt="Boolean" class="img-fluid" title="Certificato in Full-Stack Web Development">
                </div>
                <div class="col-3 d-flex align-items-center">
                    <img src="/img/ECDL.jpg" alt="ECDL" class="img-fluid" title="Patente europea ECDL">
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
</style>