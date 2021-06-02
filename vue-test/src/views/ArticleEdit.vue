<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 col-md-offset-1 col-xs-12">
          <VtListErrors :errors="errors" />
          <form @submit.prevent="onPublish(article.slug)">
            <fieldset :disabled="inProgress">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  v-model="article.title"
                  placeholder="Record Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control"
                  v-model="article.description"
                  placeholder="Description"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  class="form-control"
                  rows="8"
                  v-model="article.body"
                  placeholder="Content"
                >
                </textarea>
              </fieldset>
            </fieldset>
            <button
              :disabled="inProgress"
              class="btn btn-lg btn-block pull-xs-right btn-primary"
              type="submit"
            >
              Publish Record
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import store from "@/store";
import VtListErrors from "@/components/ListErrors";
import {
  ARTICLE_PUBLISH,
  ARTICLE_EDIT,
  FETCH_ARTICLE,
  ARTICLE_EDIT_ADD_TAG,
  ARTICLE_EDIT_REMOVE_TAG,
  ARTICLE_RESET_STATE
} from "@/store/actions.type";

export default {
  name: "VtArticleEdit",
  components: { VtListErrors },
  props: {
    previousArticle: {
      type: Object,
      required: false
    }
  },
  async beforeRouteUpdate(to, from, next) {
    await store.dispatch(ARTICLE_RESET_STATE);
    return next();
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch(ARTICLE_RESET_STATE);
    if (to.params.slug !== undefined) {
      await store.dispatch(
        FETCH_ARTICLE,
        to.params.slug,
        to.params.previousArticle
      );
    }
    return next();
  },
  async beforeRouteLeave(to, from, next) {
    await store.dispatch(ARTICLE_RESET_STATE);
    next();
  },
  data() {
    return {
      tagInput: null,
      inProgress: false,
      errors: {}
    };
  },
  computed: {
    ...mapGetters(["article"])
  },
  methods: {
    onPublish(slug) {
      let action = slug ? ARTICLE_EDIT : ARTICLE_PUBLISH;
      this.inProgress = true;
      this.$store
        .dispatch(action)
        .then(({ data }) => {
          this.inProgress = false;
          this.$router.push({
            name: "article",
            params: { slug: data.article.slug }
          });
        })
        .catch(({ response }) => {
          this.inProgress = false;
          this.errors = response.data.errors;
        });
    },
    removeTag(tag) {
      this.$store.dispatch(ARTICLE_EDIT_REMOVE_TAG, tag);
    },
    addTag(tag) {
      this.$store.dispatch(ARTICLE_EDIT_ADD_TAG, tag);
      this.tagInput = null;
    }
  }
};
</script>
