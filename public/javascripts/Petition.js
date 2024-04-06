const Signature = require('../models/Signature');

function appendAlert(message, type) {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    alertPlaceholder.innerHTML = '';
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");
    alertPlaceholder.append(wrapper);
  }

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function validateEmail() {
    const email = document.getElementById("email").value;
    let valid = email.includes("@");
    valid = email.endsWith(".com") || email.endsWith(".org") || email.endsWith(".edu")
    if (!valid) {
      appendAlert("Invalid email!", "danger");
    }
    
    // check if email is already in database
    // const signature = await Signature.checkDuplicateEmail(email);
    // if (signature) {
    //     console.log("dupe email!!11");
    //     appendAlert("Duplicate email!", "danger");
    //     valid = false;
    // }
    return valid;
  }

function validateFirstName() {
    const firstname = document.getElementById("firstname").value;
    if (firstname.length < 5)
    {
        appendAlert("First name is too short!", "danger");
        return false;
    }
    else if (firstname.length > 20)
    {
        appendAlert("First name is too long!", "danger");
        return false;
    }
    return true;
}

function validateLastName() {
    const lastname = document.getElementById("lastname").value;
    if (lastname.length < 5)
    {
        appendAlert("Last name is too short!", "danger");
        return false;
    }
    else if (lastname.length > 20)
    {
        appendAlert("Last name is too long!", "danger");
        return false;
    }
    return true;
}

function validateForm() {
    if (validateEmail() && validateFirstName() && validateLastName())
    {
        return true;
    }
    else
    {
        return false;
    }
}