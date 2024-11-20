<script>
import AppHeader from './components/Header/AppHeader.vue';
import AppFooter from './components/Footer/AppFooter.vue';

export default {
  data() {
    return {
      cursorX: 0,
      cursorY: 0,
    };
  },
  components: {
    AppHeader,
    AppFooter,
  },
  mounted() {
    window.addEventListener("mousemove", this.trackMouseMove);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.trackMouseMove);
  },
  methods: {
    trackMouseMove(e) {
      this.cursorX = e.clientX;
      this.cursorY = e.clientY;
    },
  },
}
</script>

<template>
    <div class="cursorTracker" :style="{ left: cursorX + 'px', top: cursorY + 'px'}"></div>
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
</template>

<style lang="scss">
@import "bootstrap/scss/bootstrap";

body {
  background: linear-gradient(to right, #000000 70%, #001f3f 80%, #003f7f 90%, #01305f 100%);
  background-size: 200% 100%;
  animation: gradientAnimation 14s ease infinite;

  .cursorTracker {
    width: 15px;
    height: 15px;
    background-color: rgba(253, 253, 253, 0.5);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: transform 0.1s ease;
  }
}

@keyframes gradientAnimation {
  0% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 50% 0%;
  }
}
</style>
