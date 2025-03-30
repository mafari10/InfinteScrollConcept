import infiniteScroll from "../js/infiniteScroll.js";
import getUnsplashImages from "../js/script.js";

// Helper function to set multiple attributes on an HTML element dynamically.
const images_container = document.querySelector(".images_container");
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

// Dynamically Show Unsplash Photos
export default async function showPhotos(photos) {
  let imagesLoaded = 0;
  let totalImages = 0;
  let ready = false;

  totalImages = photos.length;
  // for each photos
  photos.forEach((photo) => {
    // Create a link to Unsplash
    const a = document.createElement("a");
    // set an href attribute
    setAttributes(a, {
      href: photo.links.html,
      target: "_blank",
    });
    images_container.append(a);
    // Create an image element
    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
      loading: "lazy",
    });
    a.append(img);
    img.addEventListener("load", () => {
      imagesLoaded++;
      console.log("loaded", imagesLoaded);
      if (imagesLoaded === totalImages) {
        ready = true;
        console.log("done loaded");
        infiniteScroll(getUnsplashImages, ready);
      }
    });
  });
}
