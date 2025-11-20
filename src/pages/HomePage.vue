<script>
// COMPONENTS
import HeaderSection from '../components/HeaderSection.vue';
import LanguagesSection from '../components/LanguagesSection.vue';
import CertificationsSection from '../components/CertificationsSection.vue';
import ProjectsSection from '../components/ProjectsSection.vue';
// import SkillsSection from '../components/SkillsSection.vue';
import AboutMeSection from '../components/AboutMeSection.vue';
import ContactFormSection from '../components/ContactFormSection.vue';


export default {
    components: {
        HeaderSection,
        LanguagesSection,
        CertificationsSection,
        ProjectsSection,
        // SkillsSection,
        AboutMeSection,
        ContactFormSection
    },
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
    },
    mounted() {
    },
    beforeUnmount() {
    }
};
</script>

<template>
    <HeaderSection />
    <LanguagesSection />
    <CertificationsSection />
     <ProjectsSection />
    <!-- <SkillsSection /> -->
    <AboutMeSection />
    <ContactFormSection />
    
    
</template>

<style lang="scss" scoped>

</style>