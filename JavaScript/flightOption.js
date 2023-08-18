const image = ['img/service_icon01.png','img/service_icon02.png','img/service_icon03.png'];
const services = ['Service 01','Service 02','Service 03'];
const heading = ['PRE-BOOK YOUR BAGGAGE','RESERVE PREFERED SEATS','ENJOY-STRESS FREE TRAVEL'];
const list = ['Travel stress-free by getting','Covered for flight modification','Cancellation, accident & medical '];


export const section7 = document.createElement('section');


const div = document.createElement('div');
div.setAttribute('class','container py-5');

const gear = document.createElement('p');
gear.setAttribute('class','text-warning mb-0')
gear.innerText = 'WHY AIR GEAIR';

const options = document.createElement('h1');
options.innerText = 'Our Great Flight Options';

const outerDiv = document.createElement('div');
outerDiv.setAttribute('class','container row justify-content-evenly align-items-center py-3')

for(let i = 0 ; i < 3 ; i++){

    const div = document.createElement('div');
    div.setAttribute('class','col-lg');

    const figure = document.createElement('figure');
    figure.setAttribute('class','flightOption p-5')
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    img.setAttribute('src',image[i])
    img.setAttribute('alt','')
    img.setAttribute('class','py-3')
    const figCaption = document.createElement('figcaption');
    const ServiceHead = document.createElement('p');
    ServiceHead.innerText = services[i];
    const head = document.createElement('h3');
    head.innerText = heading[i];
    const ul = document.createElement('ul');
    ul.setAttribute('class','mt-3 p-0')

    for(let j = 0 ; j < list.length ; j++){
        const li = document.createElement('li');
        li.setAttribute('class','list-unstyled pt-3')
        li.innerHTML = list[i];

        ul.append(li)
    }
    outerDiv.append(div);
    div.append(figure);
    figure.append(imgDiv);
    imgDiv.append(img);
    figure.append(figCaption);
    figCaption.append(ServiceHead);
    figCaption.append(head);
    figCaption.append(ul)

}
section7.append(div);
div.append(gear);
div.append(options);
div.append(outerDiv)
