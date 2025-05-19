export default {
  methods: {
    scrollElementBottomToTop (element: string) {
      const HTMLDOMelement = document.querySelector(element);
      const bottom = HTMLDOMelement.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({
        top: bottom,
        behavior: 'smooth',
      });
    },
  },
}
