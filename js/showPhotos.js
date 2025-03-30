// Helper function to set multiple attributes on an HTML element dynamically.
const images_container = document.querySelector(".images_container");
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
// Dynamically Show Unsplash Photos
export default async function showPhotos(photos) {
  // for each photos
  await photos.forEach((photo) => {
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
      src: photo.links.download,
      alt: photo.alternative_slugs.en,
      title: photo.alt_description,
      loading: "lazy",
    });
    a.append(img);
  });
}
