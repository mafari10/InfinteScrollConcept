export default function infiniteScroll(allphotos, ready) {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 10 &&
      ready
    ) {
      allphotos();
    }
  });
}
