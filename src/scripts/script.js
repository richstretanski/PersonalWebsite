export function updateTime() {
  const timeElement = document.querySelector('.time');
  if (timeElement) {
    const date = new Date();
    timeElement.innerText = date.toLocaleString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });
  } else {
    console.error("Error: .time element not found in the DOM");
  }
}

// Ensure updateTime is called every second
setInterval(() => {
  updateTime();
}, 1000);

export const handleImageClick = (imageSrc, setPopoutImage, currentPopoutImage) => {
  if (currentPopoutImage === imageSrc) {
    setPopoutImage(null);
  } else {
    setPopoutImage(imageSrc);
  }
};

