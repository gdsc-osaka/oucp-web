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
      const txt = '登録はこちら'

      for (let i = 0; i < ncol; i++) {
        const titleSize = titleSizeList[i % titleSizeList.length]
        const imgIndex = imgs[i]
        const pos = positions[i]
        const link = i % 2 === 0 ? null : { href: '/', txt: 'link text' }
        const locateLink = locate[i]

        tiles.push({
          title: `Event${i}`,
          titleSize: titleSize,
          imgSrc: require(`@/assets/oupc/img/${imgIndex}`),
          txtPosition: pos,
          link: link,
          txtBody: txt,
          locate: locateLink,
        })
      }
      return tiles
    },
  },
}
