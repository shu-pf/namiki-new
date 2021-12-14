<template>
  <article id="contact">
    <div id="container">
      <section class="p-section--simple u-gutter">
        <NuxtLink to="/">トップに戻る</NuxtLink>
        <h1 class="c-heading--border-bottom">{{ post.fields.title }}</h1>
        <div class="article__content" v-html="renderedHtml" />
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
    const contact = document.getElementById('contact')
    imagesLoaded(contact, () => {
      this.$nuxt.$emit('loaded')
    })
  },
})
</script>
