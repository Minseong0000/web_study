gsap.registerPlugin(ScrollTrigger);

/* const races = document.querySelector(".races");//가로 스크롤 부분
let racesWidth = races.offsetWidth; //넘겨야할 총 너비값
let amountToScroll = racesWidth - window.innerWidth;//넘겨야할 총 넘비값 - 뷰포트 너비 값

// console.log(races.offsetWidth)

function getScrollAmount() {
  let racesWidth = races.scrollWidth;
  return - (racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
  x: -amountToScroll,//왼쪽 이동이므로 마이너스값줌
  duration: 3,
  ease: "none"
});

ScrollTrigger.create({
  trigger:".racesWrapper",//이 요소를 만나면 시작
  start:"top 20%",
  end: () => '+=${getScrollAmount() * -1',
  pin: true,
  animation: tween,
  scrub: 1,
  // invalidateOnRefresh: true,
  markers: true
}); */
// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 250 video lessons


const races = document.querySelector(".races");
console.log(races.offsetWidth)

function getScrollAmount() {
	let racesWidth = races.scrollWidth;
	return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
	x: getScrollAmount,
	duration: 3,
	ease: "none",
});


ScrollTrigger.create({
	trigger:".racesWrapper",
	start:"top 20%",
	end: () => `+=${getScrollAmount() * -1}`,
	pin:true,
	animation:tween,
	scrub:1,
	invalidateOnRefresh:true,
	markers:true
})

