const cardContent = {
    img : ['img/fly_img01.jpg','img/fly_img02.jpg','img/fly_img03.jpg','img/fly_img04.jpg','img/fly_img05.jpg','img/fly_img06.jpg','img/fly_img07.jpg','img/fly_img08.jpg'],
    place : ['Dubai (DXB)','Switzerland','Denmark (DEK)','Jakarta (DXB)','Dubai (DXB)','Dubai (DXB)','Switzerland','Turkish (SWL)'],
    flyIcon : ['img/fly_icon01.jpg','img/fly_icon02.jpg','img/fly_icon03.jpg','img/fly_icon01.jpg','img/fly_icon02.jpg','img/fly_icon03.jpg','img/fly_icon01.jpg','img/fly_icon02.jpg'],
    rates : ['$195','$800','$350','$250','$195','$800','$350','$250']
}

export const section5 = document.createElement('section');

const div = document.createElement('div');
div.setAttribute('class','text-center')

const flynext = document.createElement('p');
flynext.setAttribute('class','text-warning mb-0')
flynext.innerText = 'FLYNEXT PACKAGE';

const greatDesti = document.createElement('h1');
greatDesti.innerText = 'Your Great Destination';


const outerDiv = document.createElement('div');
outerDiv.setAttribute('class','container row g-3 justify-content-evenly align-items-center mx-auto py-5') 

for(let i = 0 ; i < 8 ; i++){

    const maindiv = document.createElement('div');
    maindiv.setAttribute('class','col-md-6 col-lg-3');
     
    const card = document.createElement('div');
    card.setAttribute('class','card rounded-3 text-center');

    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','p-3')
    const img = document.createElement('img');
    img.setAttribute('src',cardContent.img[i]);
    img.setAttribute('alt','');
    img.setAttribute('class','img-fluid w-100 rounded-top');

    const cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body pt-0');

    const date = document.createElement('p');
    date.setAttribute('class','mb-0');
    const dateText = document.createTextNode('09 Jun 2022 - 16 Jun 2022');

    const travel = document.createElement('h3');
    travel.innerText = cardContent.place[i]

    const icon = document.createElement('a');
    icon.setAttribute('class','');
    icon.setAttribute('href','#');
    icon.innerHTML = `<i class="fa-solid fa-arrow-right-arrow-left"></i>`;

    const travelTo = document.createElement('h3');
    const travelToText = document.createTextNode('India');

    const fly = document.createElement('img');
    fly.setAttribute('src', cardContent.flyIcon[i]);
    fly.setAttribute('alt','');
    fly.setAttribute('class','');

    const hr = document.createElement('hr');

    const travelClass = document.createElement('p');
    travelClass.setAttribute('class','mb-0');
    travelClass.innerText = 'Business Class';

    const price = document.createElement('h6');
    price.innerText = cardContent.rates[i];

    outerDiv.append(maindiv);
    maindiv.append(card);
    card.append(imgDiv);
    imgDiv.append(img);
    card.append(cardBody);
    cardBody.append(date);
    date.append(dateText);
    cardBody.append(travel);
    cardBody.append(icon);
    cardBody.append(travelTo);
    travelTo.append(travelToText);
    cardBody.append(fly);
    cardBody.append(hr);
    cardBody.append(travelClass);
    cardBody.append(price);

}


section5.append(div);
div.append(flynext);
div.append(greatDesti);
section5.append(outerDiv);
