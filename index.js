function registrate() {
	var Username = document.getElementById("username").value;
	var Password = document.getElementById("password").value;
	var ConfirmPassword = document.getElementById("confirmation").value;
	if (Username == "") {
		document.getElementById("username_error").innerHTML = "Username cannot be empty!";
		document.getElementById("success").innerHTML = "";
	}
	if (Password == "") {
		document.getElementById("password_error").innerHTML = "Password cannot be empty!";
		document.getElementById("success").innerHTML = "";
	}
	else if(ConfirmPassword == "") {
		document.getElementById("confirm_error").innerHTML = "Confirm password!";
		document.getElementById("success").innerHTML = "";
	}
	if (Password != "" && ConfirmPassword != "" && Password != ConfirmPassword) {
		document.getElementById("confirm_error").innerHTML = "Password doesn't match!";
		document.getElementById("success").innerHTML = "";
	}
	if (Username != "" && Password != "" && ConfirmPassword != "" && Password == ConfirmPassword) {
		document.getElementById("username_error").innerHTML = "";
		document.getElementById("password_error").innerHTML = "";
		document.getElementById("confirm_error").innerHTML = "";
		document.getElementById("success").innerHTML = "Successfully registered!";
	}
}