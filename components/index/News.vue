<template>
  <section class="p-news">
    <h2 class="p-news__title">お知らせ</h2>
    <ul class="p-news__list">
      <li v-for="post in posts" :key="post.fields.title">
        <NuxtLink :to="{ path: `posts/${post.sys.id}` }"
          ><h3>{{ post.fields.title }}</h3>
          <p>{{ post.fields.summary }}</p>
          <p>>詳しくはこちら</p>
        </NuxtLink>
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
