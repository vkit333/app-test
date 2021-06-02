<template>
  <div class="article-preview">
    <VtArticleMeta isPreview :article="article" />
    <router-link :to="articleLink" class="preview-link">
      <h1 v-text="article.title" />
      <p v-text="article.description" />
      <span>Read more...</span>
    </router-link>
  </div>
</template>

<script>
import VtArticleMeta from "./ArticleMeta";

export default {
  name: "VtArticlePreview",
  components: {
    VtArticleMeta,
  },
  props: {
    article: { type: Object, required: true }
  },
  computed: {
    articleLink() {
      return {
        name: "article",
        params: {
          slug: this.article.slug
        }
      };
    }
  }
};
</script>
