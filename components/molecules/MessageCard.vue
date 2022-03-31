<template>
  <v-sheet>
    <v-card style="height: 100%">
      <v-card-text class="black--text text-center text-h5 font-weight-bold">
        <v-row justify="center">
          <v-col cols="6" align-self="center">
            <v-img
              class="rounded-circle"
              :src="imgSrc"
              height="10rem"
              width="10rem"
              @click="openModal()"
            >
            </v-img>
          </v-col>
          <v-col cols="6" align-self="center" v-text="title"> </v-col>
        </v-row>
      </v-card-text>
      <v-row class="black--text text-center text-h6">
        <v-col
          cols="6"
          class="black--text text-left font-weight-bold"
          align-self="center"
        >
          &ensp;画像をクリックしてね
        </v-col>
        <v-col
          cols="6"
          class="text-h5 font-weight-bold"
          align-self="center"
          v-text="name"
        >
        </v-col>
      </v-row>
      <DetailCard v-show="showContent" :detail="detail" @close="closeModal" />
    </v-card>
  </v-sheet>
</template>

<script scoped>
export default {
  name: 'MessageCard',
  props: {
    imgSrc: {
      type: String,
      default: require('@/assets/gonuxt/img/sample01.jpg'),
    },
    title: {
      type: String,
      default: 'Align',
    },
    detail: {
      type: String,
      default: 'See More',
    },
    name: {
      type: String,
      default: '/',
    },
    bgColor: {
      type: String,
      default: 'primary',
    },
  },
  data: () => ({ showContent: false }),
  methods: {
    openModal() {
      this.showContent = true
    },
    closeModal() {
      this.showContent = false
    },
  },
}
</script>

<style lang="scss" scoped></style>
