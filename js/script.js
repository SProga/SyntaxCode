let _ = document;
let overlay = _.querySelector(".overlay");
let closeBtn = _.querySelector(".btn--close");
let modal = _.querySelector(".form");

setTimeout(() => {
	overlay.classList.add("overlay-active");
	overlay.style.transition = "none";
	setTimeout(() => {
		modal.classList.add("form-active");
	}, 200);
}, 500);
