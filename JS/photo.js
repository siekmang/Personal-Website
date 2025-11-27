function loadImageWithDimensions(imgEl, src, alt) {
  const probe = new Image()
  probe.src = src
  probe.onload = () => {
    imgEl.width  = probe.naturalWidth
    imgEl.height = probe.naturalHeight
    imgEl.src    = src
    imgEl.alt    = alt
  }
}

const bizPhoto   = { src: 'img/IMG_6571.webp', alt: 'Picture of Greg Siekman smiling, wearing a white dress shirt and blue blazer' }
const socialPhoto= { src: 'img/socialpic.webp', alt: 'Picture of Greg Siekman on the other side of a screen, looking into the distance holding his brown tabby cat Chauncey who is doing the same.' }

var page = window.location.pathname.split("/").pop();
let target;

if (page === 'links.html' || page === 'links') {
  target = document.getElementById('id_photo_links')
  if (target) loadImageWithDimensions(target, socialPhoto.src, socialPhoto.alt)
} else {
  target = document.getElementById('id_photo')
  if (target) loadImageWithDimensions(target, bizPhoto.src, bizPhoto.alt)
}

if (page === 'portfolio.html' || page === 'portfolio') {
  document
      .querySelectorAll('.portfolio-images')
      .forEach(imgEl => {
        // grab current src/alt
        const src = imgEl.getAttribute('src')
        const alt = imgEl.getAttribute('alt')
        // kick off same loader
        loadImageWithDimensions(imgEl, src, alt)
      })
}
