export default {
  name: 'TopSection',
  data() {
    return {
      currentSlide: 0,
      slides: [
        { id: 0, img: require('@/assets/oupc/img/ouen1.jpeg') },
        { id: 1, img: require('@/assets/oupc/img/ouen2.JPG') },
        { id: 2, img: require('@/assets/oupc/img/ouen3.JPG') },
        { id: 3, img: require('@/assets/oupc/img/ouen4.JPG') },
        { id: 4, img: require('@/assets/oupc/img/ouen5.JPG') },
        { id: 5, img: require('@/assets/oupc/img/ouen6.JPG') },
      ],
      fade: 'next',
      show: true,
      timer: 0,
    }
  },
  computed: {
    Slides() {
      return this.slides.filter((slide) => {
        return slide.id === this.currentSlide
      })
    },
  },
  created() {
    this.timer = setInterval(() => {
      this.autoPlay()
    }, 3000)
  },
  methods: {
    autoPlay() {
      this.currentSlide++
      if (this.currentSlide === this.slides.length) {
        this.currentSlide = 0
      }
    },
  },
}
