'use strict';
import Subscriber from './Subscriber.js';

function listen(event, selector, callback) {
  return selector.addEventListener(event, callback);
}

function select(selector) {
  return document.querySelector(selector);
}

const fileDetail = select('.file-detail');
const postImage  = select('.post-image');
const profileImg = select('.profile');
const postButton = select('.post');
const postSection = select('.display-post')
const textArea = select('textarea');

const now = new Date();

listen('change', postImage, () => {
  let fileName = postImage.files[0].name;
  fileDetail.textContent = fileName;
});

function clearInputs() {
  textArea.value = '';
  postImage.value = '';
  fileDetail.textContent = '';
}

function makePost() {
  let imageSrc;

  (postImage.files[0]) ? imageSrc = 
  `${URL.createObjectURL(postImage.files[0])}` 
  : imageSrc = '';

  const newPost = document.createElement('div');
  postSection.appendChild(newPost);
  newPost.className = `the-post data`;
  newPost.innerHTML += `
  <header class="post-header flex space-between">
    <div class="flex gap-15">
      <figure>
        <img src="./assets/media/profile.jpeg" class="profile">
      </figure>
      <h3>Navjot Kaur</h3>
    </div>
    <p>${now.toDateString().split(' ').slice(1).join(' ')}</p>
  </header>
  <p>${textArea.value}</p>
  <figure>
    <img src="${imageSrc}" class="posted-image">
  </figure>
  `
}

listen('click', postButton, () => {
  makePost();
  clearInputs();
});