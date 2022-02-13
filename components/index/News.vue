<template>
  <section class="p-news">
    <h2 class="p-news__title">お知らせ</h2>
    <ul class="p-news__list">
      <li v-for="post in posts" :key="post.fields.title">
        <NuxtLink :to="{ path: `posts/${post.sys.id}` }">{{
          post.fields.title
        }}</NuxtLink>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    posts: Array,
  },
}
</script>
