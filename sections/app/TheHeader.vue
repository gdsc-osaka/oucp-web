<template>
  <v-app-bar dark dense height="64" fixed>
    <v-toolbar-title :class="brandNameFontWeight">{{
      brandName
    }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-for="link in links">
      <a
        :key="link.icon"
        :href="link.link"
        target="_blank"
        class="text-decoration-none"
      >
        <v-btn color="white" rounded icon class="mx-1">
          <v-icon size="2em">{{ link.icon }}</v-icon>
        </v-btn>
      </a>
    </template>

    <router-link to="/" class="nt-app-bar-link">
      <v-btn elevation="0">Home</v-btn>
    </router-link>
  </v-app-bar>
</template>

<script scoped>
import config from '@/assets/oupc/config'

export default {
  name: 'TheHeader',
  props: {
    brandNameFontWeight: {
      type: String,
      default: 'font-weight-bold',
    },
  },
  data: () => ({
    links: config.brand.header.links,
    brandName: config.brand.nameShort,
  }),
}
</script>

<style lang="scss">
@import '@/assets/styles/app';

.nt-app-bar-link {
  text-decoration: none !important;
}
</style>
