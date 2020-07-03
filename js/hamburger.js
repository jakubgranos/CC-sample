const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('.header-navigation');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active')
  navigation.classList.toggle('header-navigation-active')
  document.body.classList.toggle('body-toggle-scroll')
})
