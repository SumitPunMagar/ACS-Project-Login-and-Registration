

//captcha validation


const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const email = document.getElementById('email');
const number = document.getElementById('number');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const firstnameValue = firstname.value.trim();
	const lastnameValue = lastname.value.trim();
	const emailValue = email.value.trim();
	const numberValue = number.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();

	if (firstnameValue === '') {
		setErrorFor(firstname, 'firstname cannot be blank');
	} else {
		setSuccessFor(firstname);
	}

	if (lastnameValue === '') {
		setErrorFor(lastname, 'lastname cannot be blank');
	} else {
		setSuccessFor(lastname);
	}


	if (emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}

	if (numberValue === '') {
		setErrorFor(number, 'number cannot be blank');
	} else {
		setSuccessFor(number);
	}

	if (passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	} else {
		setSuccessFor(password);
	}

	if (password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if (passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else {
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

const recaptcha = document.getElementById('captcha');
var onloadCallback = function () {
	recaptcha.render('captcha', {
		'sitekey': '6LdYAj8lAAAAAE1-kSRf67p9GoP05TEHx8ahfkPy'
	})
}


// password strength checker javascript code

function getPasswordStrength(password){
	let s = 0;
	if(password.length > 6){
	  s++;
	}
	if(password.length > 10){
	  s++;
	}
	if(/[A-Z]/.test(password)){
	  s++;
	}
	if(/[0-9]/.test(password)){
	  s++;
	}
	if(/[^A-Za-z0-9]/.test(password)){
	  s++;
	}
	return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
	document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });

  document.querySelector(".pw-meter .login-pw-display-toggle-btn").addEventListener("click",function(){
	let el = document.querySelector(".pw-meter .login-pw-display-toggle-btn");
	if(el.classList.contains("active")){
	  document.querySelector(".pw-meter #login-password").setAttribute("type","password");
	  el.classList.remove("active");
	} else {
	  document.querySelector(".pw-meter #login-password").setAttribute("type","text");
	  el.classList.add("active");
	}

  });

  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
	let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
	if(el.classList.contains("active")){
	  document.querySelector(".pw-meter #password").setAttribute("type","password");
	  el.classList.remove("active");
	} else {
	  document.querySelector(".pw-meter #password").setAttribute("type","text");
	  el.classList.add("active");
	}

  });

  document.querySelector(".pw-meter .confirm-pw-display-toggle-btn").addEventListener("click",function(){
	let el = document.querySelector(".pw-meter .confirm-pw-display-toggle-btn");
	if(el.classList.contains("active")){
	  document.querySelector(".pw-meter #password2").setAttribute("type","password");
	  el.classList.remove("active");
	} else {
	  document.querySelector(".pw-meter #password2").setAttribute("type","text");
	  el.classList.add("active");
	}

  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
	let password = e.target.value;
	let strength = getPasswordStrength(password);
	let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
	strength = Math.max(strength,1);
	passwordStrengthSpans[1].style.width = strength*20 + "%";
	if(strength < 2){
	  passwordStrengthSpans[0].innerText = "Weak";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#d13636";
	} else if(strength >= 2 && strength <= 4){
	  passwordStrengthSpans[0].innerText = "Medium";
	  passwordStrengthSpans[0].style.color = "#111";
	  passwordStrengthSpans[1].style.background = "#e6da44";
	} else {
	  passwordStrengthSpans[0].innerText = "Strong";
	  passwordStrengthSpans[0].style.color = "#fff";
	  passwordStrengthSpans[1].style.background = "#20a820";
	}
  });
