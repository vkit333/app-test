<template>
  <router-link
    :to="`/tag/${name}`"
    :class="className"
    v-text="name"
  ></router-link>
</template>

<script>
export default {
  name: "VtTag",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: "tag-pill tag-default"
    }
  }
};
</script>
