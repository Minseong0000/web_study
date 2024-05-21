// 로고 클릭시 맨 위로 이동
$('h1').on('click', ()=> {
  // $('html, body').animate({scrollTop: 0});
  scrollTo({
    top: 0,
    behavior: 'smooth'
  })
});

// 스크롤에 따른 header 변화
// addEventListener('scroll' ()=>{})
$(window).on('scroll', ()=> {
  let boxHt = $('.box1').offset().top;
  if(scrollY > boxHt) {
    $('header').addClass('active');
  } else {
    $('header').removeClass('active')
  }
});

//해당 박스로 부드러운 이동

//모바일 토글 버튼
