<template>
  <footer>
    <div class="container">
      <router-link class="logo-font" :to="{ name: 'home', params: {} }">
        Vue-test
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "VtFooter"
};
</script>
