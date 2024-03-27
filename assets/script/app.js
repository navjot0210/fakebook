'use strict';
import Subscriber from './Subscriber.js';

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector) {
  return document.querySelector(selector);
}

const fileDetail = select('.file-detail');
// const postImage  = select('.post-image');
const postImage = document.getElementById('file-input');

postImage.addEventListener('change', function() {
  let fileName = postImage.files[0].name;
  fileDetail.textContent = fileName;
});

// listen('change', postImage, () => {
//   let fileName = this.files[0].name;
//   fileDetail.textContent = fileName;
// });