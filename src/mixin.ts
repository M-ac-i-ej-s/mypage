export default {
  methods: {
    scrollTo (pixel: number) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
      const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollTop + clientHeight >= scrollHeight) {
        return
      }
      window.scrollTo({
        top: pixel,
        behavior: 'smooth',
      })
    }
  },
}
