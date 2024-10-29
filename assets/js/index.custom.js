import { X, V, countries, EYESLASH, EYE } from "./helpers.js";

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

	function initCountriesOptions() {
		if (!countries || !countries.length) return;
		const countriesFormInputs = document.querySelectorAll(".v-country-custom-select");
		if (!countriesFormInputs.length) return;
		countriesFormInputs.forEach((countryContainer) => {
			let countrySelectWrapper = countryContainer.querySelector("select");
			if (!countrySelectWrapper) return;
			const firstChild = `<option value="" disabled selected>Select country</option>`;
			countrySelectWrapper.innerHTML = firstChild;
			for (const country of countries) {
				const newOption = `<option value="${country.name}">${country.name}</option>`;
				countrySelectWrapper.innerHTML += newOption;
			}
		});
	}

	const initPasswordToggler = () => {
		const allPasswordToggler = document.querySelectorAll("[data-v-toggler]");
		if (!allPasswordToggler || !allPasswordToggler.length) return;
		allPasswordToggler.forEach((toggler) => {
			toggler.addEventListener("click", function () {
				const target = this;
				const attr = target.getAttribute("data-v-toggler");
				if (!attr) return alert("what you just clicked rn, doesn't have a target input");
				const correspondInput = document.querySelector(`[data-v-receiver=${attr}]`);
				if (!correspondInput) return alert("Na wa o");
				if (correspondInput.type.toLowerCase() === "password") {
					correspondInput.type = "text";
					target.innerHTML = EYESLASH;
				} else {
					correspondInput.type = "password";
					target.innerHTML = EYE;
				}
			});
		});
	};

	function init() {
		initSubHeader();
		initCountriesOptions();
		initPasswordToggler();
	}
	window.addEventListener("DOMContentLoaded", init);
})();
