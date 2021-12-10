class Features {
	constructor() {
		this.overlay = document.querySelector(".overlay");
		this.overlayShown = false;
		this.form = document.querySelector(".card__form");
		this.card = document.querySelector(".card");
		this.cardBtns = document.querySelectorAll(".card__form__preference");
		this.registerEvents();
		this.displayCard();
	}
	registerEvents() {
		this.cardBtns.forEach((btn) => {
			btn.addEventListener("click", () => {
				btn.classList.toggle("card__form__preference-active");
			});
		});
		this.form.addEventListener("submit", (e) => {
			e.preventDefault();
		});
	}

	displayCard() {
		setTimeout(() => {
			this.overlay.classList.add("overlay__active");
			this.overlayShown = true;
			setTimeout(() => {
				if (this.overlayShown) {
					this.overlay.style.transition = "none"; //eradicate the glitch when resizing
				}
				this.card.classList.add("card__active");
			}, 600);
		}, 2000);
	}
}

export default Features;
