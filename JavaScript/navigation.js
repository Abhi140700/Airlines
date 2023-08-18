const Arr = ['img/logo.png','Home', 'About', 'Pages', 'Blog', 'Contact', 'INR', '<i class="fa-solid fa-question"></i>'];
const Btn = ['SignIn','Register'];

export const header = document.createElement('header');

const nav = document.createElement('nav');
nav.setAttribute('class','navbar navbar-expand-lg bg-dark align-items-center navigation');

const navDiv = document.createElement('div');
navDiv.setAttribute('class','container');

const logo = document.createElement('a');
logo.setAttribute('class','navbar-brand');
logo.setAttribute('href','#');

const logoImg = document.createElement('img');
logoImg.setAttribute('class','img-fluid');
logoImg.setAttribute('src',Arr[0]);

const button = document.createElement('button');
button.setAttribute('class','navbar-toggler');
button.setAttribute('data-bs-toggle','collapse');
button.setAttribute('data-bs-target','#navigation');

const toggleButton = document.createElement('span');
toggleButton.setAttribute('class' , 'navbar-toggler-icon');

const ulDiv = document.createElement('div');
ulDiv.setAttribute('class','collapse navbar-collapse');
ulDiv.setAttribute('id','navigation');

const ul = document.createElement('ul');
ul.setAttribute('class','navbar-nav ms-lg-auto w-75 justify-content-evenly');

for(let i = 1 ; i < Arr.length; i++ ){

    const li = document.createElement('li');
    li.setAttribute('class' , 'nav-item')

    const navLink = document.createElement('a');
    navLink.setAttribute('class','nav-link text-light');
    navLink.setAttribute('href','#');
    navLink.innerHTML = Arr[i];
    
    ul.append(li);
    li.append(navLink);

}

const signInBtn = document.createElement('a');
signInBtn.setAttribute('href','#');
signInBtn.setAttribute('class','btn btn-outline-warning rounded-0');

const Register = document.createElement('a');
Register.setAttribute('href','#');
Register.setAttribute('class','btn btn-warning rounded-0 ms-2');

signInBtn.innerHTML = Btn[0];
Register.innerHTML = Btn[1];


header.append(nav);
nav.append(navDiv);
navDiv.append(logo);
logo.append(logoImg);
navDiv.append(button);
button.append(toggleButton)
navDiv.append(ulDiv);
ulDiv.append(ul)
ulDiv.append(signInBtn);
ulDiv.append(Register);

