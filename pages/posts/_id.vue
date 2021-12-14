<template>
  <article id="post">
    <div id="container">
      <section class="p-section--simple">
        <div class="p-post">
          <NuxtLink to="/">トップに戻る</NuxtLink>
          <h2 class="p-post__title">{{ post.fields.title }}</h2>
          <div v-html="renderedHtml" />
        </div>
      </section>
    </div>
  </article>
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import imagesLoaded from 'imagesloaded'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { createClient } from '~/plugins/contentful.js'
const contentfulClient = createClient()

export default Vue.extend({
  async asyncData({ route }) {
    const post = await contentfulClient.getEntry(route.params.id)
    const rawRichTextField = post.fields.body
    const renderedHtml = documentToHtmlString(rawRichTextField)

    return {
      post,
      renderedHtml,
    }
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  created() {
    this.$nuxt.$emit('start-loading')
  },
  mounted() {
    this.$nuxt.$emit('show-header')
    const post = document.getElementById('post')
    imagesLoaded(post, () => {
      this.$nuxt.$emit('loaded')
    })
  },
})
</script>
