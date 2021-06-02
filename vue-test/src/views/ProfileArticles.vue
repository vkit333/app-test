<template>
  <div class="profile-page">
    <VtArticleList :author="author" :items-per-page="5"></VtArticleList>
  </div>
</template>

<script>
import VtArticleList from "@/components/ArticleList";

export default {
  name: "VtProfileArticles",
  components: {
    VtArticleList
  },
  computed: {
    author() {
      return this.$route.params.username;
    }
  }
};
</script>
