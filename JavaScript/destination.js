export const section4 = document.createElement('section');
section4.setAttribute('class','my-5')

const div = document.createElement('div');
div.style.background = "url(img/destination_bg.jpg) center/cover";
const contentDiv = document.createElement('div');
contentDiv.setAttribute('class','container pt-5');

const span = document.createElement('span');
span.setAttribute('class','border border-warning bg-warning text-light p-2 rounded-pill mt-5');
const spanText = document.createTextNode('OFFER DEALS');

const destination = document.createElement('h2'); 
destination.setAttribute('class','pt-3 text-light');
const destinationText = document.createTextNode('Your Great Destination');

const para = document.createElement('p'); 
para.setAttribute('class','text-light w-50')
para.innerText = 'Get rewarded for your travels - unlock instant savings of 10% or more with a free Geairinfo.com account';

const customers = document.createElement('div');
customers.setAttribute('class','container row g-3 justify-content-evenly align-items-center w-75 pb-3');

const figurediv = document.createElement('div');
figurediv.setAttribute('class','col-md');
const figure = document.createElement('figure');
figure.setAttribute('class','d-flex justify-content-evenly align-items-center flex-reverse mb-0 border-light bg-light rounded-3')
const iconDiv = document.createElement('div');
iconDiv.innerHTML = `<i class="fa-solid fa-user-group fa-2xl"></i>`
const figcation = document.createElement('figcaption');
const figcationH2 = document.createElement('h2');
const figcationH2Text = document.createTextNode('5830+')
const figcationP = document.createElement('p');
const figcationPText = document.createTextNode('Happy Customers')


const figurediv2 = document.createElement('div');
figurediv2.setAttribute('class','col-md ');
const figure2 = document.createElement('figure');
figure2.setAttribute('class','d-flex justify-content-evenly align-items-center flex-reverse mb-0 border-light bg-light rounded-3');
const iconDiv2 = document.createElement('div');
iconDiv2.innerHTML = `<i class="fa-solid fa-globe fa-2xl"></i>`
const figcation2 = document.createElement('figcaption');
const figcationH22 = document.createElement('h2');
const figcationH2Text2 = document.createTextNode('5830+');
const figcationP2 = document.createElement('p');
const figcationPText2 = document.createTextNode('Happy Customers');

const discover = document.createElement('p');
discover.setAttribute('class','text-light py-3 pb-5')
discover.innerHTML = `Discover the latest offers & news and start planning <span class="bg-warning rounded-pill p-2 ms-2">CONTATCT US</span>`



section4.append(div);
div.append(contentDiv);
contentDiv.append(span);
span.append(spanText);
contentDiv.append(destination);
destination.append(destinationText);
contentDiv.append(para);

contentDiv.append(customers);
customers.append(figurediv);
figurediv.append(figure);
figure.append(iconDiv);
figure.append(figcation);
figcation.append(figcationH2);
figcationH2.append(figcationH2Text);
figcation.append(figcationP);
figcationP.append(figcationPText);

customers.append(figurediv2);
figurediv2.append(figure2);
figure2.append(iconDiv2);
figure2.append(figcation2);
figcation2.append(figcationH22);
figcationH22.append(figcationH2Text2);
figcation2.append(figcationP2);
figcationP2.append(figcationPText2);

contentDiv.append(discover)
