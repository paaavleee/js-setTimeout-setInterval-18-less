function mySyncFunction() {
	console.log("function start");

	for (let index = 0; index < 10; index++) {
		console.log(index);
	}

	console.log("end for");

	console.log("function end");
}

function myAsyncFunction() {
	console.log("function start");

	setTimeout(() => {
		console.log("from timeout");
	}, 3000);

	setInterval(() => {
		console.log("from interval");
	}, 2000);

	console.log("function end");
}

const startTimeout = document.querySelector(".start-timeout");
const endTimeout = document.querySelector(".end-timeout");
const startInterval = document.querySelector(".start-interval");
const endInterval = document.querySelector(".end-interval");

let timeoutId = null;
let intervalId = null;

function startTimeoutFn() {
	timeoutId = setTimeout(() => {
		console.log("from timeout");
	}, 4000);
}

function startIntervalFn() {
	intervalId = setInterval(() => {
		console.log("from interval");
	}, 1000);
}

function stopInetrvalFn() {
	if (intervalId) {
		clearInterval(intervalId);
	}
}

function stopTimeoutFn() {
	if (timeoutId) {
		clearTimeout(timeoutId);
	}
}

startTimeout.addEventListener("click", startTimeoutFn);
startInterval.addEventListener("click", startIntervalFn);
endInterval.addEventListener("click", stopInetrvalFn);
endTimeout.addEventListener("click", stopTimeoutFn);

// slider

const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

const startAutoSlider = document.querySelector(".start-auto-slider");
const stopAutoSlider = document.querySelector(".stop-auto-slider");

// console.log(slides);
let activeIndex = 0;
let sliderIntervalId = null;

function renderSliders() {
	slides.forEach((slide, index) => {
		// console.log(slide, index);

		if (activeIndex === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

function nextSlide() {
	// console.log("next slide");

	if (activeIndex === slides.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	renderSliders();
}

function prevSlide() {
	if (activeIndex === 0) {
		activeIndex = slides.length - 1;
	} else {
		activeIndex--;
	}

	renderSliders();
}

function startAutoSlidingFn() {
	sliderIntervalId = setInterval(nextSlide, 5000);
}

function stopAutoSlidingFn() {
	if (sliderIntervalId) {
		clearInterval(sliderIntervalId);
		sliderIntervalId = null;
	}
}

function keyBoardEvents() {
	document.addEventListener("keyup", (e) => {
		// console.log(e);

		if (e.code === "ArrowRight") {
			nextSlide();
		}
		if (e.code === "ArrowLeft") {
			prevSlide();
		}
	});
}

function initSlider() {
	renderSliders();

	next.addEventListener("click", nextSlide);
	prev.addEventListener("click", prevSlide);

	startAutoSlider.addEventListener("click", startAutoSlidingFn);
	stopAutoSlider.addEventListener("click", stopAutoSlidingFn);

	keyBoardEvents();
	// startAutoSlidingFn();
}

initSlider();



const clockHt =document.querySelector(".clock-ht");

let date =null;


function startTime() {
    let date = new Date();
    
    setTimeout(function() {startTime()}, 1000);

  };
  function endTimeoutFn() {
    if (date) {
        clearTimeout(date);
        
    }
};

// clockHt.innerHTML = date;