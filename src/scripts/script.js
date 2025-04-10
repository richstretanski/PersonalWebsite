let date = new Date();

setInterval(function () {
  const timeElement = document.querySelector('.time'); // Get the .time element
  if (timeElement) { // Check if the element exists
    timeElement.innerText = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  }
}, 1000);

export function background() {
  const t = document.getElementById("start-button");
  const desktop = document.getElementById("desktop");

  if (t.value === "NO") {
    desktop.style.backgroundImage = "none";
    t.value = "YES";
  } else if (t.value === "YES") {
    desktop.style.backgroundImage = "url(../images/backgrounds/wallpaper.jpg)";
    t.value = "NO";
  }
}

export const handleImageClick = (imageSrc, setPopoutImage, currentPopoutImage) => {
  // Toggle the popout image
  if (currentPopoutImage === imageSrc) {
    setPopoutImage(null); // Close the popout if the same image is clicked again
  } else {
    setPopoutImage(imageSrc); // Set the clicked image as the popout image
  }
};
