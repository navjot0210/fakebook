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
const userInfo = document.getElementById('modal');
const overlay = select('.overlay');

const now = new Date();
let isVisible = false;
let imageSrc;

listen('change', postImage, () => {
  let fileName = postImage.files[0].name;
  fileDetail.textContent = fileName;
});

function clearInputs() {
  textArea.value = '';
  postImage.value = '';
  fileDetail.textContent = '';
}

function makeImage() {

  (postImage.files[0]) ? imageSrc = 
  `
  <figure>
    <img src="${URL.createObjectURL(postImage.files[0])}" class="posted-image">
  </figure>
  `: imageSrc = '';
}

function makePost() {
  makeImage()

  if (textArea.value === '' && imageSrc === '') {
    return;
  } else {
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
    ${imageSrc}
    `
  }
}

listen('click', postButton, () => {
  makePost();
  clearInputs();
});

const subscriber = new Subscriber (
  9787, 'Navjot Kaur', 'nav_chohan0210', 'navchohan@gmail.com', 'Andre Fans', 'Soft Dev', true
);

let money = '';
money = subscriber.canMonetize === true ? 'Yes' : 'No';

function displayUserInfo() {
  const userInfo = document.getElementById('modal');
  userInfo.innerHTML = `
    <div class="subscriber-info">
      <img src="./assets/media/profile.jpeg" class="user-image" alt="profile">
      <h2>${subscriber.name}</h2>
      <p class="username">${subscriber.userName}</p>
      <div class="details">
        <p><i class="fa-regular fa-envelope"></i>${subscriber.email}</p>
        <p class="pages"><i class="fa-regular fa-file-lines"></i>Pages: ${subscriber.pages}</p>
        <p class="groups"><i class="fa-solid fa-user-group"></i>Groups: ${subscriber.groups}</p>
        <p><i class="fa-solid fa-sack-dollar"></i>Can Monetize: ${money}</p>
      </div>
      <button class="close" id="close" type="button">Close</button>
    <div>
  `;
  document.getElementById('close').addEventListener('click', closeModal);
}

function displayModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'block';
  displayUserInfo();
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.style.display = 'none';
  hideDialog();
}

function showDialog() {
  userInfo.classList.add('isvisible');
  overlay.classList.add('isvisible');
  isVisible = true;
}

function hideDialog() {
  userInfo.classList.remove('isvisible');
  overlay.classList.remove('isvisible');
  isVisible = false;
}

listen('click', profileImg, function() {
  displayModal();
  showDialog()
});