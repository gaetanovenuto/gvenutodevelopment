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
    <div class="skills container my-4" id="skills">
        <h4 class="text-center fw-light">
            SKILLS
        </h4>
        <div class="d-flex flex-wrap justify-content-between">
            <div v-for="(skill, index) in store.skills" :key="index" class="card row justify-content-between skill-container mx-auto">
                <img class="col-6 p-3" :src="skill.image" :alt="skill.name">
                <div class="col-6 h-100 info d-flex flex-column justify-content-evenly">
                    <h5 class="mt-2">{{ skill.name }}</h5>
                    <p class="fw-light">Esperienza: {{ skill.experience }}</p>
                </div>
            </div>
        </div>
        
    </div>
</template>

<style lang="scss" scoped>
.skill-container {
    width: 275px;
    height: 100px;
    margin: 15px;

    img {
        height: 100%;
        object-fit: contain;
    }
}
</style>