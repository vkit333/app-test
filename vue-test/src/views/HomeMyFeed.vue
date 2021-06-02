<template>
  <div class="home-my-feed"><VtArticleList type="feed" /></div>
</template>

<script>
import VtArticleList from "@/components/ArticleList";

export default {
  name: "vt-home-my-feed",
  components: {
    VtArticleList
  }
};
</script>
