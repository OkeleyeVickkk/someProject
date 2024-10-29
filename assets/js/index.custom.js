import { X, V } from "./icons.js";

// const elem = document.querySelector(".v-mouse-ele");

// document.addEventListener("mousemove", function (e) {
// 	const { clientX, clientY } = e;
// 	elem.classList.add("active");
// 	elem.style.setProperty("--x", `${clientX}px`);
// 	elem.style.setProperty("--y", `${clientY}px`);
// });

// document.addEventListener("mouseout", () => elem.classList.remove("active"));

// for (const each of document.querySelectorAll(".v-289fh29b")) {
// 	each.addEventListener("mouseenter", (e) => {
// 		e.target.classList.add("active");
// 	});
// 	each.addEventListener("mouseleave", (e) => {
// 		e.target.classList.remove("active");
// 	});
// }

(() => {
	const initSubHeader = function () {
		const pageHeaderSubHeader = document.querySelector("#v-page-header .v-subheader");
		if (!pageHeaderSubHeader) return;
		const toggler = pageHeaderSubHeader.querySelector(".v-toggle-lg-screen-auth-dropdown .v-toggler");
		if (!toggler) return;
		toggler.addEventListener("click", function () {
			const target = this;
			const iconHolder = target.querySelector(".v-icon");
			if (pageHeaderSubHeader.classList.contains("active")) {
				pageHeaderSubHeader.classList.remove("active");
				iconHolder.innerHTML = V;
			} else {
				pageHeaderSubHeader.classList.add("active");
				iconHolder.innerHTML = X;
			}
		});
	};

	function init() {
		initSubHeader();
	}
	window.addEventListener("DOMContentLoaded", init);
})();
