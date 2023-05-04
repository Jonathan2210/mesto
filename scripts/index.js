
// PopUp

const profileOpenPopUp = document.querySelector ('.profile__edit-button');
const profileClosePopUp = document.querySelector ('.popup__close');
const contentPopUp = document.getElementById ('popup');
const profilePopUpSubmit = document.querySelector ('.popup__form');

let nameInput = document.querySelector ('.popup__input_name');
let jobInput = document.querySelector ('.popup__input_about');
let profileInfoName = document.querySelector ('.profile__info-name');
let profileInfoAbout = document.querySelector ('.profile__info-about');
let popupInput = document.querySelector ('popup__input');

function closePopup () {
    contentPopUp.classList.remove('popup_is-opened');
}

profileOpenPopUp.addEventListener('click', function(){
    contentPopUp.classList.add('popup_is-opened');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoAbout.textContent;
})

profileClosePopUp.addEventListener('click', closePopup);

profilePopUpSubmit.addEventListener('submit', function(e) {
    e.preventDefault();
    profileInfoName.textContent = nameInput.value;
    profileInfoAbout.textContent = jobInput.value;
    closePopup();
})

// Heart

const elementIcon = document.querySelector ('.elements__element-icon')

elementIcon.addEventListener('click', function(e){
    e.preventDefault();
    elementIcon.classList.add('active');
})



