<template>
  <div class="home-page">
    <div class="banner">
      <div class="container">
        <h1 class="logo-font">Vue-test</h1>
        <img src="img/img.png" class="container__image">
      </div>
    </div>
    <div class="container page">
      <div class="row">
        <div class="col-md-12">
          <div class="feed-toggle">
            <ul class="nav nav-pills outline-active">
              <li v-if="isAuthenticated" class="nav-item">
                <router-link
                  :to="{ name: 'home-my-feed' }"
                  class="nav-link"
                  active-class="active"
                >
                  Your Records
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  :to="{ name: 'home' }"
                  exact
                  class="nav-link"
                  active-class="active"
                >
                  All Records
                </router-link>
              </li>
              <li class="nav-item" v-if="tag">
                <router-link
                  :to="{ name: 'home-tag', params: { tag } }"
                  class="nav-link"
                  active-class="active"
                >
                  #{{ tag }}
                </router-link>
              </li>
            </ul>
          </div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { FETCH_PROFILE, FETCH_TAGS } from "@/store/actions.type";

export default {
  name: "home",
  mounted() {
    this.$store.dispatch(FETCH_PROFILE, this.$route.params);
    this.$store.dispatch(FETCH_TAGS);
  },
  computed: {
    ...mapGetters(["profile", "isAuthenticated", "tags"]),
    tag() {
      return this.$route.params.tag;
    }
  },
  watch: {
    $route(to) {
      this.$store.dispatch(FETCH_PROFILE, to.params);
    }
  }
};
</script>
