export default {
  methods: {
    scrollElementBottomToTop (element: string) {
      const HTMLDOMelement = document.querySelector(element);
      if (!HTMLDOMelement) return;
      const bottom = HTMLDOMelement.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({
        top: bottom,
        behavior: 'smooth',
      });
    },
  },
}
