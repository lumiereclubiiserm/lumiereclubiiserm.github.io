// change nav style on scroll
// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scrolled',
//     scrollY > 0);
// })

//for responsive nav menu
const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown-menu');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');

    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
}

// for closing nav menu after being clicked
const nav = document.querySelector('.dropdown-menu')

if (document.body.clientWidth < 850) {
    nav.querySelectorAll(`li a`).forEach(navLink => {
        navLink.addEventListener('click', toggleBtn.onclick);
    })
}

// for responsive header and events part
const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".big-title");
const header = document.querySelector("header");
const shadow = document.querySelector(".shadow");
const content = document.querySelector(".content");
const events = document.querySelector("#events");
const image_container = document.querySelector(".imgContainer");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

const gallery = document.querySelector("#gallery");
const slider = document.querySelector(".slider");
const fader = document.querySelector("#image-track");
const descrip = document.querySelector(".description");

let header_height = header.offsetHeight;
// let events_height = events.offsetHeight;
let gallery_height = gallery.offsetHeight;

window.addEventListener('scroll', () => {
  //header section
    let scroll = window.pageYOffset;
    document.querySelector(".banner").style.opacity = 1 - Math.max(Math.min(scrollY / document.documentElement.clientHeight, 1), 0)
    let eventsY = events.getBoundingClientRect();
    let galleryY = gallery.getBoundingClientRect();
    
    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
    });
    console.log(scroll)

    //gallery section
    // fader.style.top = `${scroll / (gallery_height + galleryY.top) * -50 + 90}vh`;
    // fader.style.opacity = scroll / (galleryY.top + gallery_height);
    // if (scroll > (galleryY.top + gallery_height)) {
    //   fader.style.opacity = (galleryY.top + gallery_height) / scroll;
    // }
    // descrip.style.left = `${scroll / (gallery_height + galleryY.top) * 50 - 45}vw`;

    //events section
    // let scroll_events = scroll - 2 * document.body.clientHeight;

    // opacity.forEach(element => {
    //     element.style.opacity = scroll_events / (eventsY.top + events_height);
    // });

    // big_title.style.opacity = - scroll_events / (header_height / 2) + 1;
    // shadow.style.height = `${scroll * 0.5 + 300}px`;

    // content.style.transform = `translateY(${scroll_events / (events_height + eventsY.top) * 50 - 50}px)`;
    // image_container.style.transform = `translateY(${scroll_events / (events_height + eventsY.top) * -50 + 50}px)`;

    // border.style.width = `${scroll / (events_height + eventsY.top) * 10}%`;


});

// animation of the big title in home

"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);

//gallery

if (window.innerWidth > 850) {
  descrip.style.left = "5vw";
}

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if (track.dataset.mouseDownAt === "0") return;

  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
    maxDelta = window.innerWidth / 2;

  const percentage = (mouseDelta / maxDelta) * -100,
    nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
    nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

  track.dataset.percentage = nextPercentage;

  if (window.innerWidth > 850) {
    op = 1 + Math.max(Math.min(nextPercentage, 0), -12) / 12
    descrip.style.opacity = op
  }

  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });

  for (const image of track.getElementsByClassName("image-parallax")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

document.querySelectorAll('.image-track-item').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle("open")
  }
  )});
// console.log(document.querySelectorAll('.image-track-item'))

// showcase section
slider1 = new Swiper('.slider1', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider2 = new Swiper('.slider2', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider3 = new Swiper('.slider3', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

slider4 = new Swiper('.slider4', {
  freeMode: true,
  centeredSlides: true,
  direction: 'vertical',
  mousewheel: true,
  slidesPerView: 1.75,
  slidesOffsetBefore: -125
})

function bindSwipers(...swiperList) {
  for (const swiper of swiperList) {
      swiper.setTranslate = function(translate, byController, doNotPropagate){
          if (doNotPropagate) {
              Swiper.prototype.setTranslate.apply(this, arguments);
          } else {
              for (const swiper of swiperList) {
                  swiper.setTranslate(translate, byController, true);
              }
          }
      };
      swiper.setTransition = function(duration, byController, doNotPropagate){
          if (doNotPropagate) {
              Swiper.prototype.setTransition.apply(this, arguments);
          } else {
              for (const swiper of swiperList) {
                  swiper.setTransition(duration, byController, true);
              }
          }
      };
  }
}

bindSwipers(slider1, slider2, slider3, slider4);