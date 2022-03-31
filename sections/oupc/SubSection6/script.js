export default {
  data: () => ({
    items: [
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/oupc/img/member/person1.JPG'),
        title: '「大学で新しいことを始めよう」',
        name: '吹奏部(スーザフォン) 美濃部和香',
        text: '(text1) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/oupc/img/member/person2.png'),
        title: '「色々なスポーツを楽しめる」',
        name: 'チアリーダー部 水田和',
        text: '(text2) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/oupc/img/member/person3.JPG'),
        title: '「高校時代のダンス経験を生かしたい」',
        name: 'チアリーダー部 宇野音羽',
        text: '(text3) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
      {
        color: 'blue-grey lighten-5',
        src: require('@/assets/oupc/img/member/person4.JPG'),
        title: '「初心者でも始めやすい」',
        name: '吹奏部(トランペット) 國分優花',
        text: '(text4) - Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed deiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
    dialog: false,
    modalTitle: 'default',
    modalText: 'text',
  }),
  methods: {
    openModal(item) {
      this.modalTitle = item.title
      this.modalText = item.text
    },
  },
}
