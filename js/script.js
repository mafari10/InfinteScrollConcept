// imports
import infiniteScroll from "../js/infiniteScroll.js";
import showPhotos from "../js/showPhotos.js";
// DOM Elements

const loader = document.getElementById("loader");
let count = 5;
let photos = [];
const apiKey = "jFgS8tteGD425f4oZfygQVaVnD6gt6GucN2yyz3xFek";
let initialLoad = true;
let imagesLoaded = 0;
let ready = false;
let totalImages = 0;
// Unsplash Api
let apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
// updateAPIURLWithNewCount
function updateAPIURLWithNewCount(newlimit) {
  apiUrl = `https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;
}

// functions to get Images from Unsplash
async function getUnsplashImages() {
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
      showPhotos(photos, imagesLoaded, ready, totalImages);
      if (initialLoad) {
        updateAPIURLWithNewCount(30);
        initialLoad = false;
      }

      // infinite scroll
    }
  } catch (error) {
    loader.hidden = false;
    console.error(error);
  }
}
getUnsplashImages();
infiniteScroll(getUnsplashImages);
