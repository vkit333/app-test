<template>
  <div class="article-page">
    <div class="banner">
      <div class="container">
        <h1>{{ article.title }}</h1>
        <VtArticleMeta :article="article" :actions="true"></VtArticleMeta>
      </div>
    </div>
    <div class="container page">
      <div class="row article-content">
        <div class="col-xs-12">
          <div v-html="parseMarkdown(article.body)"></div>
          <ul class="tag-list" v-if="article.tagList && article.tagList.length">
            <li v-for="(tag, index) of article.tagList" :key="tag + index">
              <VtTag
                :name="tag"
                className="tag-default tag-pill tag-outline"
              ></VtTag>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="article-actions">
        <VtArticleMeta :article="article" :actions="true"></VtArticleMeta>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import marked from "marked";
import store from "@/store";
import VtArticleMeta from "@/components/ArticleMeta";
import VtTag from "@/components/VTag";
import { FETCH_ARTICLE, FETCH_COMMENTS } from "@/store/actions.type";

export default {
  name: "Vt-article",
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  components: {
    VtArticleMeta,
    VtTag
  },
  beforeRouteEnter(to, from, next) {
    Promise.all([
      store.dispatch(FETCH_ARTICLE, to.params.slug),
      store.dispatch(FETCH_COMMENTS, to.params.slug)
    ]).then(() => {
      next();
    });
  },
  computed: {
    ...mapGetters(["article", "currentUser", "comments", "isAuthenticated"])
  },
  methods: {
    parseMarkdown(content) {
      return marked(content);
    }
  }
};
</script>
