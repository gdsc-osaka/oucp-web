<template>
  <v-sheet>
    <v-card>
      <v-card-text class="black--text text-left font-weight-bold text-h5">
        <v-row>
          <v-col cols="12" class="faq-header" v-text="question"> </v-col>
        </v-row>

        <v-card>
          <v-card-text class="black--text text-left text-h5 faq-content">
            <v-row>
              <v-col cols="12" class="" v-html="answer"> </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-card-text>
    </v-card>
  </v-sheet>
</template>

<script scoped>
export default {
  name: 'QuestionAnswer',
  props: {
    question: {
      type: String,
      default: 'Q',
    },
    answer: {
      type: String,
      default: 'A',
    },
  },
  data: () => ({}),
  computed: {},
}
</script>

<style lang="scss" scoped>
.faq-header:before {
  background-color: deeppink;
  content: 'Q';
  margin-bottom: 32px;
}

.faq-content:before {
  background-color: blue;
  content: 'A';
  margin-bottom: 10%;
}

.faq-content:before,
.faq-header:before {
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 28px;
  color: #fff;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  margin-right: 10px;
}
</style>
