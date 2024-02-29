const gallery = document.getElementById('gallery');
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlay-image');

const images = ['chick.jpeg', 'honey.jpeg', 'kevin_bacon.jpeg', 'smoking_hot.jpeg', 'stanley.jpeg', 'burger1.jpeg', 'burger2.jpeg', 'burger3.jpeg' ];

// Set the number of pictures to display per row
const screenWidth = window.innerWidth;
console.log(screenWidth)
const pixelWidth = 300;

const num_pics = Math.floor(screenWidth / pixelWidth);
console.log(num_pics)


// Dynamically add images to the gallery
for (let i = 0; i < images.length; i++) {
  if (i % num_pics === 0) {
    var row = document.createElement('div');
    row.classList.add('row');
    row.style.paddingTop = '10px'; // Add top padding to the row
    gallery.appendChild(row);
  }

  const col = document.createElement('div');
  col.classList.add('col');

  const img = document.createElement('img');
  img.src = `pictures/food/${images[i]}`;
  img.onclick = () => openOverlay(`pictures/food/${images[i]}`);

  col.appendChild(img);
  row.appendChild(col);
}

// Open overlay with clicked image
function openOverlay(image) {
  overlay.style.display = 'block';
  overlayImage.src = image;
}

// Close overlay
function closeOverlay() {
  overlay.style.display = 'none';
}

// Navigate to previous image
function prevImage() {
  const currentIndex = images.indexOf(overlayImage.src.split('/').pop());
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  overlayImage.src = `pictures/food/${images[prevIndex]}`;
}

// Navigate to next image
function nextImage() {
  const currentIndex = images.indexOf(overlayImage.src.split('/').pop());
  const nextIndex = (currentIndex + 1) % images.length;
  overlayImage.src = `pictures/food/${images[nextIndex]}`;
}

// Close overlay when clicking outside the image
overlay.onclick = function(event) {
  if (event.target === overlay) {
    closeOverlay();
  }
};

document.addEventListener('keydown', function(event) {
    if (overlay.style.display === 'block' && event.key === 'Escape') {
      closeOverlay();
    } else if (event.key === 'ArrowLeft') {
      prevImage();
    } else if (event.key === 'ArrowRight') {
      nextImage();
    }
  }); 