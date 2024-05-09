
let idx=0;

$('#prevBtn').on('click', ()=> {
  $('.slide-item').eq(idx).removeClass('active');
  idx++;
  $('.slide-item').eq(idx).addClass('active');
})