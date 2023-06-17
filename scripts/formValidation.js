document.getElementById("form-field").addEventListener("submit", (event) => {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("TLP").value;
    var message = document.getElementById("message").value;
    var error = document.getElementById("error");
    if (!name && !email && !telephone && !message) {
        error.textContent = "Field is required";
        error.style.cssText = "color: red; font-size: 14px;";
        document.getElementById("message").style.borderColor = "red";
        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            if (!input.value) {
                input.style.borderColor = "red";
            }
            else {
                input.style.borderColor = "";
            }
        }
        return
    } else {
        error.textContent = "";

        var inputElements = document.getElementsByTagName("input");
        for (var i = 0; i < inputElements.length; i++) {
            var input = inputElements[i];
            input.style.borderColor = "";
        }
    }

    if (name.length < 5 || name.length > 50) {
        if (!name) {
            document.getElementById("name").style.borderColor = "red";
            error.textContent = "Name Field is required";
            error.style.cssText = "color: red; font-size: 14px;";
            return
        }
        error.textContent = "Name length mush be around 8 character up to 50";
        document.getElementById("name").style.borderColor = "red";
        // error.style.color = 'red';
        // error.style.fontSize = '14px'
        error.style.cssText = "color: red; font-size: 14px;";
        return
    } else {
        error.textContent = "";
        document.getElementById("name").style.borderColor = "green";
    }

    if (!email.endsWith("@gmail.com")) {
        if (!email) {
            document.getElementById("email").style.borderColor = "red";
            error.textContent = "Email Field is required";
            error.style.cssText = "color: red; font-size: 14px;";
            return
        }
        error.style.cssText = "color: red; font-size: 14px;";
        document.getElementById("email").style.borderColor = "red";
        error.textContent = "Email must ends with @gmail.com";
        return
    } else {
        error.textContent = "";
        document.getElementById("email").style.borderColor = "green";
    }

    if (!telephone) {
        document.getElementById("TLP").style.borderColor = "red";
        error.textContent = "Telephone Number Field is required";
        error.style.cssText = "color: red; font-size: 14px;";
        return;
    } else if (!telephone.startsWith('08')) {
        document.getElementById("TLP").style.borderColor = "red";
        error.textContent = "Telephone Number must start with '08'";
        error.style.cssText = "color: red; font-size: 14px;";
        return;
    } else if (telephone.length < 10 || telephone.length > 12) {
        document.getElementById("TLP").style.borderColor = "red";
        error.textContent = "Telephone Number must be between 10 and 12 digits";
        error.style.cssText = "color: red; font-size: 14px;";
        return;
    } else {
        error.textContent = "";
        document.getElementById("TLP").style.borderColor = "green";
    }


    if (message.length == 0) {
        document.getElementById("message").style.borderColor = "red";
        error.textContent = "Message Field is required";
        error.style.cssText = "color: red; font-size: 14px;";
        return;
    } else if (message.length < 30 || message.length > 300) {
        document.getElementById("message").style.borderColor = "red";
        error.textContent = "Message must be atleast 50 length and 300 maximum length";
        error.style.cssText = "color: red; font-size: 14px;";
        return;
    } else {
        error.textContent = "";
        document.getElementById("message").style.borderColor = "green";
    }
    // console.log(message)
    // window.location.href ='/view/home.html'
    error.style.cssText = "background-color: green; color: white; padding: 0.6vw; width: 30vw; text-align: center;"
    error.textContent = "Message sent!"
});
