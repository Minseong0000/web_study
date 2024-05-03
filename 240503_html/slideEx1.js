$(function() {
  let slide = document.querySelectorAll('.slide');
  console.log(slide);

  $('.gnb').on('click', () => {
    $(slide).slideToggle();
  });

});