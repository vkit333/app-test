<template>
  <div class="article-meta">
    <router-link
      :to="{ name: 'profile', params: { username: article.author.username } }"
    >
      <img :src="article.author.image" />
    </router-link>
    <div class="info">
      <router-link
        :to="{ name: 'profile', params: { username: article.author.username } }"
        class="author"
      >
        {{ article.author.username }}
      </router-link>
      <span class="date">{{ dateFilter(article.createdAt) }}</span>
    </div>
    <vt-article-actions
      v-if="actions"
      :article="article"
      :canModify="isCurrentUser()"
    ></vt-article-actions>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VtArticleActions from "@/components/ArticleActions";
import { FAVORITE_ADD, FAVORITE_REMOVE } from "@/store/actions.type";
import format from "date-fns/format";

export default {
  name: "VtArticleMeta",
  components: {
    VtArticleActions
  },
  props: {
    article: {
      type: Object,
      required: true
    },
    actions: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  },
  methods: {
    isCurrentUser() {
      if (this.currentUser.username && this.article.author.username) {
        return this.currentUser.username === this.article.author.username;
      }
      return false;
    },
    dateFilter(date) {
      return format(new Date(date), "MMMM d, yyyy");
    },
    toggleFavorite() {
      if (!this.isAuthenticated) {
        this.$router.push({ name: "login" });
        return;
      }
      const action = this.article.favorited ? FAVORITE_REMOVE : FAVORITE_ADD;
      this.$store.dispatch(action, this.article.slug);
    }
  }
};
</script>
