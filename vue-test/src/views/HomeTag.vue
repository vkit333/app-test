<template>
  <div class="home-tag"><VtArticleList :tag="tag"></VtArticleList></div>
</template>

<script>
import VtArticleList from "@/components/ArticleList";

export default {
  name: "VtHomeTag",
  components: {
    VtArticleList
  },
  computed: {
    tag() {
      return this.$route.params.tag;
    }
  }
};
</script>
