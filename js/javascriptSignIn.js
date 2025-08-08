// Sign In page form validation documentation:
// This code is used to validate the sign in form on the sign in page.
var signInForm = document.getElementById('signInForm');
var button = document.querySelector('.signIn_btn');
button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    var usernameInput = signInForm.querySelector('.inputField-username');
    var emailInput = signInForm.querySelector('.inputField-email');
    var passwordInput = signInForm.querySelector('.inputField-password');
    var usernameError = signInForm.querySelector('.falseSign.un');
    var emailError = signInForm.querySelector('.falseSign.em');
    var passwordError = signInForm.querySelector('.falseSign.pw');
    var label = signInForm.querySelector('.inputField-email + .labelPlaceholder');
    var asterisk = label.querySelector('span');

    // Check if the inputs are empty and add error classes accordingly
        if (usernameInput.value === '') {
            usernameError.classList.add('username'); // Add error class.
        } else {
            usernameError.classList.remove('username'); // Remove error class
        }
    if (emailInput.value === '' || !emailInput.value.includes('@')) {
        label.style.color = '#c82014'; // Change the label color to red
        asterisk.style.color = '#c82014'; // Change the asterisk color to red
        emailInput.style.borderColor = '#c82014'; // Change border color to red
        emailError.classList.add('email'); // Add error class.
    } else {
        emailError.classList.remove('email'); // Remove error class
        label.style.color = '#00704a'; // Change the label color to green
        asterisk.style.color = '#00704a'; // Change the asterisk color to green
        emailInput.style.borderColor = '#00704a'; // Change border color to green
    }
        if (passwordInput.value === '') {
            passwordError.classList.add('password'); // Add error class.
        } else {
            passwordError.classList.remove('password'); // Remove error class
        }
})

// Local Storage code for sign in page:
// This code is used to store the username, email, and password in local storage.
var usernameInput = signInForm.querySelector('.inputField-username');
var emailInput = signInForm.querySelector('.inputField-email');
var passwordInput = signInForm.querySelector('.inputField-password');
var checkbox = document.getElementById('signIn_ChkBox');

checkbox.addEventListener('change', function () {
    if (checkbox.checked && signInForm.checkValidity()) {
        localStorage.setItem('username', document.querySelector('.inputField-username').value);
        localStorage.setItem('email', document.querySelector('.inputField-email').value);
        localStorage.setItem('password', document.querySelector('.inputField-password').value);
    }
})

// Visiable password input field code:
// This code is used to toggle the visibility of the password input field.
var eyeIcon = document.getElementById('eyeBtn');

eyeIcon.addEventListener('click', () => {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    }  else {
        passwordInput.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
})

usernameInput.value = localStorage.getItem('username');
emailInput.value = localStorage.getItem('email');
passwordInput.value = localStorage.getItem('password');

/* Here we will have some javascript code with limit comment and documentation 
because I'm stil haven't learn that much javascript at this moment, but this code will be 
used for future reference. */

// Footer Links Accordion Code 
document.addEventListener('DOMContentLoaded', () => {
    const linkContainer = document.querySelector('.footer-links')
    linkContainer.addEventListener('click', (e) => {
        const groupHeader = e.target.closest('.footer-group-header');
        if (!groupHeader) return;
        const group = groupHeader.parentElement;
        const groupBody = group.querySelector('.link-group');
        const icon = groupHeader.querySelector('i');

        // Toogle icon between plus and minus sign
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');

        // Toggle visibility of body.
        groupBody.classList.toggle('open');

        // Closing the other Footer links bodies.
        const otherGroups = linkContainer.querySelectorAll('ul');
        // Looping through the Link groups
        otherGroups.forEach((otherGroup) => {
            if (otherGroup !== group) {
                const otherGroupBody = otherGroup.querySelector('.link-group');
                const otherIcon = otherGroup.querySelector('.footer-group-header i');
                otherGroupBody.classList.remove('open');
                otherIcon.classList.remove('fa-minus');
                otherIcon.classList.add('fa-plus');
            }
        });
    });
});