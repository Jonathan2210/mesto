
// PopUp

const profileOpenPopUp = document.querySelector ('.profile__open-popup');
const profileClosePopUp = document.querySelector ('.profile__close-popup');
const contentPopUp = document.querySelector ('.profile__edit-popup');
const profilePopUpSumbit = document.querySelector ('.profile__popup-sumbit');

let nameInput = document.querySelector ('.profile__input-name');
let jobInput = document.querySelector ('.profile__input-info');
let profileInfoName = document.querySelector ('.profile__info-name');
let profileInfoAbout = document.querySelector ('.profile__info-about');


profileOpenPopUp.addEventListener('click', function(e){
    e.preventDefault();
    contentPopUp.classList.add('active');
    nameInput.value = profileInfoName.textContent;
    jobInput.value = profileInfoAbout.textContent;
})

profileClosePopUp.addEventListener('click', function(e){
    e.preventDefault();
    contentPopUp.classList.remove('active');
})

profilePopUpSumbit.addEventListener('click', function(e){
    e.preventDefault();
    contentPopUp.classList.remove('active');
    profileInfoName.textContent = nameInput.value;
    profileInfoAbout.textContent = jobInput.value;
})

// Heart

const elementIcon = document.querySelector ('.elements__element-icon')

elementIcon.addEventListener('click', function(e){
    e.preventDefault();
    elementIcon.classList.add('active');
})



