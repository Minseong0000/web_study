/* 
  jQuery 기본 구조
  $('대상/객체').method();

  https://api.jquery.com/category/selectors/
  jQuery('*'); 제이쿼리 방식으로 전체 선택자를 탐색
  $('#id'); 아이디 선택자 탐색
  $('.class'); 클래스 선택자 탐색
  $('#id > .class, type type'); 다중 선택자 탐색
  $('type:nth-child()');
  $('type[attribute=value]');
  $(':hover');

  .method();
  $().parent(); 직계 부모 노드 탐색
  $().parents(); 모든 부모 노드 탐색
  $().children(); 모든 직계 자식 노드 탐색
  $().siblings(); 형제 노드 탐색
  $().prev(); 바로 이전 형제 노드 탐색
  $().next(); 바로 다음 형제 노드 탐색
  $().prevAll(); 이전 형제 노드 '모두' 탐색
  $().nextAll(); 다음 형제 노드 '모두' 탐색
  $().first(); 일치하는 요소에서 첫번째 노드 탐색
  $().last(); 일치하는 요소에서 마지막 노드 탐색
  $().find(); 일치하는 하위 노드 탐색. 반드시 매개변수 작성해야 함
  $().filter(); 일치하는 노드 탐색(주로 걸러냄)
*/

/* 문서 준비 이벤트
js ->
window.onload = function () {}
document.addEventListener('DOMContentLoaded', function () {});

jQ ->
$(document).ready(function () {}); 
*/

$(document).ready(function () {
  // ==JS .style
  // $().css('속성');
  // $().css('속성','값');
  // $().css({'속성':'값', '속성':'값', '속성':'값'});
  $('body').css('background-color','#ddd');
  $('body *').css({'border' : '3px solid #000','padding' : '10px', 'margin' : 10});

  const item = $('a').parent();// a의 1촌 부모를 탐색
  console.log(item);
  // method chaining 여러 개의 메서드 연결하는 방식
  $('a').parent().css({'border-color':'red'});

  // $('a').parents().css({'border-style':'dotted'}); 매개변수를 지정하지 않으면 a의 상위 노드 모두를 탐색. 즉 body, html 탐색
  $('a').parents('#wrapper').css({'border-style' : 'dashed'});

  $('.container').children();//자식 노드 탐색. 매개변수를 지정하지 않으면 같은 라인의 모든 자식 노드 탐색
  // $('.container').children().css({'border-color':'blue'}); 1촌 관계의 자식만 적용
  $('.container').children('h1').css({borderColor : '#fff'});

  $('li.part').siblings();// 2촌 관계 탐색. li.part의 형제 탐색
  $('li.part').siblings().css({ backgroundColor : 'lightblue'});

  //li.part의 마지막 형제의 자식인 a에게 display:block
  // $('li.part').siblings().last().children('a').css({'display':'block'});
  $('li.part').siblings('li:last-child').children().css({'display':'block'});

  //.first(); 탐색한 첫번째 노드 탐색
  $('li.part').siblings('li:last-child').children().first().css({'border-style':'dotted','text-decoration':'none','color':'orange'});
  
  $('.p2').prev();//.p2의 앞에 작성된 형제 노드 탐색
  $('.p2').prev().css({backgroundColor : 'salmon'});

  $('.p2').next();//.p2의 뒤에 작성된 형제 노드 탐색
  $('.p2').next().css({ borderWidth: 10});

  $('.p2').prevAll();// .p2의 앞에 작성된 형제 노드 *모두* 탐색
  $('.p2').prevAll().css({borderWidth: 6});

  // .find(); 하위 노드 탐색. 반드시 *매개변수* 필요
  // $('#header').siblings('ul').children('li').last().children().last().css({borderColor : 'blue'});
  $('#header').siblings('ul').find('a:last-child').css({
    color: '#fff',
    textDecoration: 'none',
  });
 
  $('#header').find('p').css({ backgroundColor: 'teal', color: '#fff'});

  $('.part').filter('ul');// .part중 ul 거르겠다
  $('.part').filter('ul').css({borderColor: '#FF6500'});
  $('.part').filter('li').css({listStyle: 'none'});

  $('.container :odd').css({ fontStyle: 'italic'})
})
