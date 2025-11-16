let photo = document.getElementById('id_photo');
const bizPhotoSrc = 'img/IMG_6571.webp';
const bizPhotoAlt = 'Picture of Greg Siekman smiling, wearing a white dress shirt and blue blazer';
const socialPhotoSrc = 'img/socialpic.webp';
const socialPhotoAlt = 'Picture of Greg Siekman on the other side of a screen, looking into the distance holding his brown tabby cat Chauncey who is doing the same.';

var page = window.location.pathname.split("/").pop();

if(page == 'links.html' || page == 'links') {
  photo = document.getElementById('id_photo_links');
  photo.src = socialPhotoSrc;
  photo.alt = socialPhotoAlt;
} else {
  const photo = document.getElementById('id_photo');
    if (photo) {
      photo.src = bizPhotoSrc;
      photo.alt = bizPhotoAlt;
    }
}