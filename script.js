let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}

function sendMail(){
  let params = {
    name : document.getElementById('name').value,
    email : document.getElementById('email').value,
    message : document.getElementById('message').value,
    subject : document.getElementById('subject').value
}
  emailjs
    .send("service_34g1qdi", "template_v78qlf4", params)
    .then(alert("Email Sent Successfully!"));
}