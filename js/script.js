import showPhotos from "../js/showPhotos.js";
// DOM Elements

const loader = document.getElementById("loader");
let count = 5;
let photos = [];
const apiKey = "v_DGrxrQ2NGfgE6DnoH8lbrBxU0yVX7r-OAnD3guzBQ";
let imagesLoaded = 0;
let totalImages = 0;
// Unsplash Api
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

// functions to get Images from Unsplash
export default async function getUnsplashImages() {
  try {
    loader.hidden = false;
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);

    if (!data) {
      console.log("No images found");
    } else {
      loader.hidden = true;
      photos = data;
      console.log("photos", photos);
      imagesLoaded = 0;
      totalImages = photos.length;
      showPhotos(photos);
    }
  } catch (error) {
    loader.hidden = false;
    console.error(error);
  }
}
getUnsplashImages();
