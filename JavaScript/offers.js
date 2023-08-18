const img = ['img/offer_img01.jpg','img/offer_img02.jpg','img/offer_img03.jpg','img/offer_img04.jpg','img/offer_img05.jpg'];
const cardContent = ['<h6 class="cardDate">09 JUN 2022 - 16 JUN 2022</h6>' , '<h6 class="pt-3 cardEco">Economy From</h6>' , '<h3>49999 &#8377;</h3>'];
const countryName =['<h3>India to Dubai</h3>' , '<h3>India to California</h3>' , '<h3>India to Finland</h3>' , '<h3>India to Maldives</h3>' , '<h3>India to New York</h3>']
export const section3 = document.createElement('section');

const div = document.createElement('div');
div.setAttribute('class','container d-md-flex justify-content-between align-items-center')

const header = document.createElement('div');

const span = document.createElement('span')
span.setAttribute('class','text-warning');
const spanText = document.createTextNode('OFFER DEALS');

const offers = document.createElement('h2');
offers.setAttribute('class','pt-2')
const offerText = document.createTextNode('Flight Offer Deals');

const price = document.createElement('h4');
const priceText = document.createTextNode('Best Price Guarantee');


section3.append(div);   
div.append(header);
header.append(span);
span.append(spanText);
header.append(offers);
offers.append(offerText);
div.append(price)
price.append(priceText)


// Cards
const outerDiv = document.createElement('div');
outerDiv.setAttribute('class','container mx-auto row justify-content-evenly align-items-center')

const cardOne = document.createElement('div');
cardOne.setAttribute('class','col-lg position-relative');

const card = document.createElement('div');
card.setAttribute('class','card rounded-3 ')

const image = document.createElement('img');
image.setAttribute('src',img[0])
image.setAttribute('alt','')
image.setAttribute('class','img-fluid w-100 rounded-top')

const cardBody = document.createElement('div');
cardBody.setAttribute('class','card-body');
cardBody.innerHTML += countryName[0];
cardBody.innerHTML += cardContent[0];
cardBody.innerHTML += cardContent[1];
cardBody.innerHTML += cardContent[2];

const cardHover = document.createElement('div')
cardHover.setAttribute('class','position-absolute top-0 start-0 overlay w-100 h-100 overflow-hidden rounded-3 d-flex justify-content-center align-items-center flex-column');
const cardHoverIcon =document.createElement('div');
cardHoverIcon.innerHTML = '<i class="fa-solid fa-suitcase-rolling display-2 text-warning abhi"></i>';
const cardHoverAction = document.createElement('a');
cardHoverAction.setAttribute('href','#');
cardHoverAction.setAttribute('class','btn btn-outline-warning mt-5 stretched-link');
const cardHoverText = document.createTextNode('Choose Offer');   


const cardTwo = document.createElement('div');
cardTwo.setAttribute('class','row g-3 col-lg justify-content-center align-items-center');

for(let i = 1 ; i <img.length ; i++){
    const div = document.createElement('div');
    div.setAttribute('class',' position-relative col-md-6')

    const card2 = document.createElement('div');
    card2.setAttribute('class','card rounded-3')
    
    const imageDiv = document.createElement('div');
    imageDiv.setAttribute('class','p-3')

    const image = document.createElement('img');
    image.setAttribute('src',img[i])
    image.setAttribute('alt','');
    image.setAttribute('class','img-fluid w-100 rounded-3');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body');
    cardBody.innerHTML += countryName[i];
    cardBody.innerHTML += cardContent[0];
    cardBody.innerHTML += cardContent[1];
    cardBody.innerHTML += cardContent[2];

    const cardHover = document.createElement('div')
    cardHover.setAttribute('class','position-absolute top-0 start-0 overlay w-100 h-100 overflow-hidden rounded-3 d-flex justify-content-center align-items-center flex-column');
    const cardHoverIcon =document.createElement('div');
    cardHoverIcon.innerHTML = '<i class="fa-solid fa-suitcase-rolling display-2 text-warning abhi"></i>';
    const cardHoverAction = document.createElement('a');
    cardHoverAction.setAttribute('href','#');
    cardHoverAction.setAttribute('class','btn btn-outline-warning mt-5 stretched-link');
    const cardHoverText = document.createTextNode('Choose Offer'); 
    
    cardTwo.append(div);
    div.append(card2);
    div.append(cardHover);
    cardHover.append(cardHoverIcon);
    cardHover.append(cardHoverAction);
    cardHoverAction.append(cardHoverText);
    card2.append(imageDiv);
    imageDiv.append(image)
    card2.append(cardBody);
}

section3.append(outerDiv);
outerDiv.append(cardOne);
cardOne.append(card);
cardOne.append(cardHover);
cardHover.append(cardHoverIcon);
cardHover.append(cardHoverAction);
cardHoverAction.append(cardHoverText);
card.append(image);
card.append(cardBody);
outerDiv.append(cardTwo)