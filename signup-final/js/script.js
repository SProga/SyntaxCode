let modal = document.querySelector(".form");

setTimeout(() => {
	modal.classList.add("form-active");
	setTimeout(() => {
		modal.style.transition = "none";
	}, 1000);
}, 500);
