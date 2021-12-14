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
import { BLOCKS } from '@contentful/rich-text-types'
import { createClient } from '~/plugins/contentful.js'
const contentfulClient = createClient()

const renderOptions = {
  renderNode: {
    paragraph: (node: { content: any }, next: (arg0: any) => string) =>
      `<p>${next(node.content).replace(/\n/g, `</br>`)}</p>`,
    [BLOCKS.EMBEDDED_ASSET]: (node: {
      data: {
        target: {
          fields: {
            file: { contentType: string; url: any }
            description: any
            title: any
          }
        }
      }
    }) => {
      if (node.data.target.fields.file.contentType === 'image/jpeg') {
        return `<img class="p-post__img" src="${node.data.target.fields.file.url}" alt="${node.data.target.fields.description}"/>`
      } else if (
        node.data.target.fields.file.contentType === 'application/pdf'
      ) {
        return `<a href="${node.data.target.fields.file.url}" download="${node.data.target.fields.title}" target="_blank"><div class="p-post__file">${node.data.target.fields.title}</div></a>`
      }
    },
  },
}

// const renderOptions = {}

export default Vue.extend({
  async asyncData({ route }) {
    const post = await contentfulClient.getEntry(route.params.id)
    // @ts-ignore
    const rawRichTextField = post.fields.body
    // @ts-ignore
    const renderedHtml = documentToHtmlString(rawRichTextField, renderOptions)

    return {
      post,
      renderedHtml,
    }
  },
  head() {
    return {
      // @ts-ignore
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
