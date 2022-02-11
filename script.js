function addPadding() {
	const butts = document.querySelectorAll(".grid-item");
	const buttPaddings = document.querySelectorAll(".grid-item-padding");
	if (butts.length > 0) {
		for (let i = 0; i < butts.length; i++) {
			butts[i].className = "grid-item-padding";
		}
	} else {
		for (let i = 0; i < buttPaddings.length; i++) {
			buttPaddings[i].className = "grid-item";
		}
	}
}

function openModal() {
	const modal = document.querySelector(".modal-wrapper");
    modal.style.display = "block";
}

function closeModal() {
	const modal = document.querySelector(".modal-wrapper");
    // modal.style.animation = 'outFaded linear 0.5s forwards';
    // modal.style.transform = 'transform: translateX(-100%)';
	modal.style.display = "none";
}
