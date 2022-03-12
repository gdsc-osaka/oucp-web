export default {
  name: 'SubSeciton2',
  data: () => ({
    tiles2Col: [],
    tiles4Col: [],
  }),
  created: function () {
    this.tiles2Col = this.getTileData(7)
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
      const txt = '登録はこちら'

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = imgs[i]
        const pos = positions[i]
        const link = i % 2 === 0 ? null : { href: '/', txt: 'link text' }

        tiles.push({
          title: `Event${i}`,
          titleSize: titleSize,
          imgSrc: require(`@/assets/oupc/img/${imgIndex}`),
          txtPosition: pos,
          link: link,
          txtBody: txt,
        })
      }
      return tiles
    },
  },
}
