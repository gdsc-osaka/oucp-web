<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-sheet :elevation="hover ? 10 : 2" :class="{ 'on-hover': hover }">
      <v-card class="gnt-photo-card">
        <v-img
          class="white--text align-end"
          :src="imgSrc"
          :aspect-ratio="16 / 9"
        >
          <v-fade-transition>
            <v-overlay
              v-if="hover"
              absolute
              :color="bgColor"
              class="darken-2"
              :opacity="opacity"
            >
              <v-row
                v-if="hover"
                class="transition-fast-in-fast-out v-card--reveal"
              >
                <v-col
                  cols="12"
                  class="white--text text-center pb-0 gnt-photo-card-text"
                  :class="titleSize"
                  v-text="title"
                ></v-col>
                <v-col cols="12" class="d-flex justify-center pt-1 pb-6">
                  <v-btn
                    small
                    color="white"
                    elevation="0"
                    rounded
                    class="text--darken-2 gnt-photo-card-text"
                    :class="getPopupTxtColor"
                    >{{ txtButton }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-overlay>
          </v-fade-transition>
        </v-img>

        <v-card-actions class="justify-center">
          <v-btn
            large
            tile
            dark
            :href="locate"
            class="gnt-intro-a-btn lighten-1"
            color="error"
          >
            {{ txtBody }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-sheet>
  </v-hover>
</template>

<script scoped>
import config from '@/assets/config'

export default {
  name: 'PhotoCard',
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    title: {
      type: String,
      default: 'PhotoCard Title',
    },
    titleSize: {
      type: String,
      default: 'text-h3',
    },
    txtBody: {
      type: String,
      default: '(txtBody) 2022-03-01開催',
    },
    txtButton: {
      type: String,
      default: 'See More',
    },
    bgColor: {
      type: String,
      default: 'primary',
    },
    opacity: {
      type: Number,
      default: 0.9,
    },
    locate: {
      type: String,
      default: 'https://www.instagram.com/',
    },
  },
  data: () => ({
    brandName: config.brand.nameShort,
  }),
  computed: {
    getPopupTxtColor() {
      return this.bgColor + '--text'
    },
  },
}
</script>

<style lang="scss" scoped>
.gnt-photo-card {
  .gnt-photo-card-text {
    text-decoration: none !important;
  }
}
</style>
