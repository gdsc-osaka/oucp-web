export default {
  name: 'SubSeciton2',
  data: () => ({
    tiles1Col: [],
    tiles2Col: [],
    tiles3Col: [],
    tileData: [],
  }),
  created: function () {
    this.tileData = this.getTileData(7)
    this.tiles1Col.push(this.tileData[0], this.tileData[1], this.tileData[2])
    this.tiles2Col.push(this.tileData[3], this.tileData[4])
    this.tiles3Col.push(this.tileData[5], this.tileData[6])
  },
  methods: {
    getTileData(ncol) {
      const tiles = []
      const positions = [
        'top',
        'center',
        'bottom',
        'top',
        'center',
        'top',
        'center',
      ]
      const titleSizeList = [
        'text-h4',
        'text-h4',
        'text-h4',
        'text-h4',
        'text-h4',
        'text-h4',
        'text-h4',
      ]
      const imgs = [
        'ouen1.jpeg',
        'ouen2.JPG',
        'ouen3.JPG',
        'ouen4.JPG',
        'ouen5.JPG',
        'ouen6.JPG',
        'ouen1.jpeg',
      ]

      const locate = [
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
        'https://docs.google.com/forms/d/e/1FAIpQLSd_4gA2x2d1E7YP6OcHLSu0tQY3VH0V24rpbhFll7VngeydOw/viewform?usp=sf_link',
      ]
      const txtContents = [
        '「大学の授業ってどんな感じ？」「学問の扉って何？」「そもそも履修登録って何をどうすればいいの？」そんな疑問に応援団員がお答えします！',
        '豊中キャンパスの中には桜が綺麗なスポットが沢山！一緒にお花見やゲームをしませんか？花より団子なあなたも大歓迎！',
        '大学入学を期に大阪に来た皆さん！体を動かしながら大阪観光しませんか？終了後にはご飯にも行きましょう！',
        '女子団員とお話ししましょう🥰大学周辺のオススメカフェやメイク法…何でも教えちゃいます😉💕お話ししたい女子集合！！',
        '豊中キャンパスには面白いスポットがいっぱい！ウォーキングしながら豊中キャンパスを探検してみませんか！？',
        '阪大から程近い場所にある名瀑・箕面大滝。美しい景色を楽しみながら滝まで散策しませんか。終了後にはご飯に行きましょう！',
        '受験勉強中になまった体を筋トレで絞り直して、モテボディを目指しませんか！？ムキムキは来る者を拒みません！',
      ]
      const titles = [
        '履修登録相談会',
        'お花見',
        '大阪観光ランニング\n(大阪城周辺)',
        '女子会',
        '豊中キャンパス\nウォーキング会',
        '箕面の滝散策会',
        '筋トレ会',
      ]
      const txt = '登録はこちら'

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = imgs[i]
        const pos = positions[i]
        const link = i % 2 === 0 ? null : { href: '/', txt: 'link text' }
        const locateLink = locate[i]
        const txtContent = txtContents[i]
        const title = titles[i]

        tiles.push({
          title: title,
          titleSize: titleSize,
          imgSrc: require(`@/assets/oupc/img/${imgIndex}`),
          txtPosition: pos,
          link: link,
          txtBody: txt,
          locate: locateLink,
          txtContents: txtContent,
        })
      }
      return tiles
    },
  },
}
