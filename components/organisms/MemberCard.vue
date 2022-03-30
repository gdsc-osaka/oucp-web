<template>
  <div class="mx-5 py-2 px-5" :style="'background-color:' + bgcolor">
    <p>
      <v-img
        :src="imgSrc"
        class="rounded-circle img"
        :height="imgSize"
        :width="imgSize"
      ></v-img>
    </p>

    <p style="text-align: center" class="font-weight-bold">
      <strong>{{ name }}</strong>
    </p>
    <p style="text-align: center" class="font-weight-bold">
      <strong style="color: gray">{{ position }}</strong>
      <br />
      <strong style="color: gray">{{ job }}</strong>
    </p>
    <p style="text-align: center" class="font-weight-bold">
      <strong style="color: gray">{{ instrument }}</strong>
    </p>
    <p style="text-align: center" class="font-weight-bold">
      <strong style="color: gray">所属・・・{{ course }}</strong>
      <br />
      <strong style="color: gray">出身校・・・{{ school }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default:
        'https://res.cloudinary.com/uisual/image/upload/assets/icons/avatar.svg',
    },
    txtBody: {
      type: String,
      default:
        '（自己紹介本文）- 吾輩は猫である。名前はまだ無い。どこで生れたかとんと見当がつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。',
    },
    name: {
      type: String,
      default: '田中　太郎',
    },
    position: {
      type: String,
      default: '2回生',
    },
    job: {
      type: String,
      default: 'チアリーダ部',
    },
    course: {
      type: String,
      default: '外国語学部',
    },
    school: {
      type: String,
      default: '吹田高校',
    },
    bgcolor: {
      type: String,
      default: '#ffffff',
    },
    instrument: {
      type: String,
      default: '',
    },
    imgSize: {
      type: String,
      default: '5rem',
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/app';

.img {
  display: block;
  margin: auto;
}
</style>
