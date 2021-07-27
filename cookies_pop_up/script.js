const callButton = document.querySelector('.accept_button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.close-button');

popupToggle = () => {
    popup.classList.toggle('popup_opened');
  }
  
  callButton.addEventListener('click', popupToggle);
  closeButton.addEventListener('click', popupToggle);