const form = document.querySelector(".input-form form");
const email = document.querySelector(".input-form .emailid input");
const firstname = document.querySelector(".input-form .fname input");
const lastname = document.querySelector(".input-form .lname input");
const password = document.querySelector(".input-form .pass input");

form.addEventListener("submit", (e) => {
	e.preventDefault();
	let emailAddress = email.value;
	if (validEmail(emailAddress)) {
		form.classList.remove("error-mail");
	} else {
		form.classList.add("error-mail");
	}
});

form.addEventListener("submit", () => {
	let fname = firstname.value;
	if (fname === "") {
		form.classList.add("error-fname");
	} else {
		form.classList.remove("error-fname");
	}
});

form.addEventListener("submit", () => {
	let lname = lastname.value;
	if (lname === "") {
		form.classList.add("error-lname");
	} else {
		form.classList.remove("error-lname");
	}
});

form.addEventListener("submit", () => {
	let pass = password.value;
	if (pass === "") {
		form.classList.add("error-pass");
	} else {
		form.classList.remove("error-pass");
	}
});

// Validates email address
function validEmail(email) {
	var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
	return String(email).search(filter) != -1;
}
