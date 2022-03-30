<template>
  <v-overlay class="overlays text-center" color="primary" opacity="0.9">
    <div class="text-center" v-text="detail"></div>
    <v-btn
      large
      tile
      class="lighten-1"
      color="blue lighten-4"
      target="_blank"
      @click="$emit('close')"
    >
      閉じる
    </v-btn>
  </v-overlay>
</template>

<script>
export default {
  name: 'DetailCard',
  props: {
    detail: {
      type: String,
      default: '詳細説明',
    },
  },
}
</script>

<style>
.overlays {
  z-index: 1;
  position: fixed;
  top: 10%;
  left: 10%;
  width: 80%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#content {
  z-index: 2;
  width: 100%;
  padding-top: 5em;
  padding-bottom: 5em;
  text-align: center;
}
</style>
