const photos = [
  'img/photo1.jpg',
  'img/photo2.jpg',
  'img/photo3.jpg',
  'img/photo4.jpg',
  'img/photo5.jpg',
  'img/photo6.jpg',
  // Add more paths as needed
];

const gallery = document.getElementById("photo-gallery");

photos.forEach((src, index) => {
  const col = document.createElement("div");
  col.className = "col-12 col-sm-6 col-md-4 mb-4 fade-in";
  col.style.animationDelay = `${index * 0.3}s`;

  const img = document.createElement("img");
  img.src = src;
  img.alt = `Our Memory ${index + 1}`;
  img.className = "img-fluid shadow";

  col.appendChild(img);
  gallery.appendChild(col);
});
