export default {
  name: 'SubSeciton2',
  data: () => ({
    questionAnswer: [],
  }),
  created: function () {
    this.questionAnswer = this.getQAData()
  },
  methods: {
    getQAData() {
      const qas = []
      const questions = [
        '学業と両立は可能ですか？',
        '費用はどれほどかかりますか？',
        '2年生から吹田キャンパス・箕面キャンパスなのですが、入団可能ですか？',
      ]
      const answers = [
        '学業優先なので可能です！体育会ながら、練習日が<strong>3回</strong>なのもポイント。留年率0%で外国語学部が9人いますが、全員進級できています♪',
        '月1000円の部費が活動期間の10カ月かかるので、年間１万円です。加えて、応援時の交通費がかかります。学ランやチアコス、楽器などは全て貸出なので安心してください！',
        'もちろんです！現在部員の半数以上が、吹田キャンパス・箕面キャンパスに通っています。学内連絡バスで無料でキャンパス移動ができます。',
      ]

      for (let i = 0; i < questions.length; i++) {
        const question = questions[i]
        const answer = answers[i]

        qas.push({
          question: question,
          answer: answer,
        })
      }
      return qas
    },
  },
}
