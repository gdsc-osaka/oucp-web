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
        '2年生から吹田・箕面キャンパスなのですが、入団可能ですか？',
      ]
      const answers = [
        '<strong>学業優先</strong>なので可能です！</br>体育会ながら、<strong>練習日が3回</strong>なのもポイント。</br>留年率0%で外国語学部が9人いますが、全員進級できています♪',
        '月1000円の部費が活動期間の10カ月かかるので、年間１万円です。</br>加えて、応援時の交通費がかかります。</br>学ランやチアコス、楽器などは<strong>全て貸出</strong>なので安心してください！',
        'もちろんです！</br>現在部員の半数以上が、吹田キャンパス・箕面キャンパスに通っています。</br>学内連絡バスで<strong>無料でキャンパス移動</strong>ができます。',
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
