<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue';
</script>

<template>
  <MainHeader />
  <RouterView />
</template>
<style></style>

<script>
export default {
  components: {
    MainHeader
  },

  computed: {},
  
  mounted() {
  },
  
  data() {
    return {
    };
  },
};
</script>