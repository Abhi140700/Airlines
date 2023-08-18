const imgage = ['img/blog_img02.jpg','img/blog_img03.jpg','img/blog_img04.jpg'];
const content = ['Happy International Country Flight Attendant Day','The US is a Large Country and Climate Varies by Region','But There are Dozen of Low-cost Airlines Including']

export const section8 = document.createElement('section');
section8.setAttribute('class','bg-light')

const div = document.createElement('div');
div.setAttribute('class','container text-center py-5');

const feeds = document.createElement('p');
feeds.setAttribute('class','text-warning mb-0')
feeds.innerText = 'OUR NEWS FEEDS';

const news = document.createElement('h1');
news.innerText = 'Latest News Update';

const outerDiv = document.createElement('div');
outerDiv.setAttribute('class','container text-center mx-auto row justify-content-evenly align-items-center');

const figureDiv = document.createElement('div');
figureDiv.setAttribute('class','col-lg')
const figure = document.createElement('figure');
figure.setAttribute('class','')
const imgDiv = document.createElement('div');
imgDiv.setAttribute('class','')
const img = document.createElement('img');
img.setAttribute('src','img/blog_img01.jpg');
img.setAttribute('alt','');
img.setAttribute('class','rounded-3 img-fluid');
const figcaption = document.createElement('figcaption');
figcaption.setAttribute('class','')
const figcaptionHeading = document.createElement('h3');
figcaptionHeading.innerText = 'Depending on your departure point and destination flights';

const happy = document.createElement('div');
happy.setAttribute('class','col-lg');

for(let i = 0 ; i < 3 ; i++){
    const div = document.createElement('div');
    div.setAttribute('class','mb-3')
    const card = document.createElement('div');
    card.setAttribute('class','card')
    const innerCardDiv = document.createElement('div');
    innerCardDiv.setAttribute('class','row g-0 justify-content-evenly align-items-center');
    const imgDiv = document.createElement('div');
    imgDiv.setAttribute('class','col-md')
    const img = document.createElement('img');
    img.setAttribute('src',imgage[i]);
    img.setAttribute('alt','');
    img.setAttribute('class','w-100 p-3');
    const innerDivTwo = document.createElement('div');
    innerDivTwo.setAttribute('class','col')
    const cardBody = document.createElement('div');
    cardBody.setAttribute('class','card-body')
    const cardBodyHeading = document.createElement('h3');
    cardBodyHeading.innerText = content[i];
    const read = document.createElement('a');

    happy.append(div);
    div.append(card);
    card.append(innerCardDiv);
    innerCardDiv.append(imgDiv);
    imgDiv.append(img);
    innerCardDiv.append(innerDivTwo);
    innerDivTwo.append(cardBody);
    cardBody.append(cardBodyHeading);
} 

section8.append(div);
div.append(feeds);
div.append(news)

section8.append(outerDiv);
outerDiv.append(figureDiv);
figureDiv.append(figure);
figure.append(imgDiv);
imgDiv.append(img);
imgDiv.append(figcaption);
figcaption.append(figcaptionHeading);

outerDiv.append(happy)
