export default function infiniteScroll(allphotos) {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 10
    ) {
      allphotos();
    }
  });
}
