<template>
  <div id="app">
    <VtHeader />
    <router-view></router-view>
    <VtFooter />
  </div>
</template>

<script>
import VtHeader from "@/components/TheHeader";
import VtFooter from "@/components/TheFooter";
import './assets/app.css';

export default {
  name: "App",
  components: {
    VtHeader,
    VtFooter
  }
};
</script>

<style></style>
