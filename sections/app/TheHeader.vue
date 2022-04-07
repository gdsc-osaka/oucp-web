<template>
  <v-app-bar color="primary lighten-1" dense height="64" fixed>
    <v-toolbar-title
      :class="brandNameFontWeight"
      class="white--text header-size"
      >{{ brandName }}</v-toolbar-title
    >
    <v-spacer></v-spacer>
    <template v-for="link in links">
      <a
        :key="link.icon"
        :href="link.link"
        target="_blank"
        class="text-decoration-none"
      >
        <v-btn color="white" rounded icon class="mx-1">
          <v-icon size="2rem">{{ link.icon }}</v-icon>
        </v-btn>
      </a>
    </template>
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
.header-size {
  font-size: min(1.5rem, calc((100vw - 12rem) / 11));
  font-family: 'YuGothic';
}
</style>
