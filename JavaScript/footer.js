const icons = ['<i class="fa-brands fa-facebook-f"></i>','<i class="fa-brands fa-twitter"></i>','<i class="fa-brands fa-instagram"></i>','<i class="fa-brands fa-linkedin"></i>'];
const ExploreList1 = ['About','Awards','Careers','Press Release','SponserShip'];
const ExploreList2 = ['Travel Alerts','Qatarisation','Beyond','Airways Cargo']
const privacyList = ['Arline Guides','Airline Fees','Airport Guides','Low Fare Tips','Flights']
export const footer = document.createElement('footer');

const section = document.createElement('section');
section.setAttribute('class','mt-5');

const div = document.createElement('div');
div.setAttribute('class','container row gy-3 justify-content-evenly  py-4 mx-auto');

const about = document.createElement('div');
about.setAttribute('class','col-md-6 col-lg');

const logoImgDiv = document.createElement('div');
logoImgDiv.setAttribute('class','mb-4');
const logoImg = document.createElement('img');
logoImg.setAttribute('src','img/logo.png');
const aboutUs = document.createElement('p');
aboutUs.setAttribute('class','text-light h3')
aboutUs.innerText = 'Online to make your journey even more memorable access or meet';
const hr = document.createElement('hr');
hr.setAttribute('class','text-light')

const iconList = document.createElement('ul');
iconList.setAttribute('class','nav');

for(let i = 0 ; i < icons.length ; i++){
    const Iconli = document.createElement('li');
    Iconli.setAttribute('class','nav-item');
    const Icona = document.createElement('a');
    Icona.setAttribute('href','#')
    Icona.setAttribute('class','nav-link text-light icons');
    Icona.innerHTML = icons[i];

    iconList.append(Iconli);
    Iconli.append(Icona);
}

const exploreDiv = document.createElement('div');
exploreDiv.setAttribute('class','col-md-6 col-lg');
const exploreHeading = document.createElement('h2');
exploreHeading.setAttribute('class','text-light mb-4')
exploreHeading.innerText = 'Explore';
const uldiv = document.createElement('div');
uldiv.setAttribute('class','d-flex')
const exploreUl1 = document.createElement('ul');
exploreUl1.setAttribute('class','nav flex-column');
const exploreUl2 = document.createElement('ul');
exploreUl2.setAttribute('class','nav flex-column');

for(let i = 0 ; i<5 ; i++){
    const li1 = document.createElement('li');
    li1.setAttribute('class','nav-item footerLink');
    const a1 = document.createElement('a');
    a1.setAttribute('href','#')
    a1.setAttribute('class','nav-link text-light ps-0');
    a1.innerHTML = ExploreList1[i];

    exploreUl1.append(li1);
    li1.append(a1);

}

for(let i = 0 ; i<4 ; i++){
    const li2 = document.createElement('li');
    li2.setAttribute('class','nav-item footerLink');
    const a2 = document.createElement('a');
    a2.setAttribute('href','#')
    a2.setAttribute('class','nav-link text-light');
    a2.innerHTML = ExploreList2[i];

    exploreUl2.append(li2);
    li2.append(a2);

}


const privacyDiv = document.createElement('div');
privacyDiv.setAttribute('class','col-md-6 col-lg');
const privacyHeading = document.createElement('h2');
privacyHeading.setAttribute('class','text-light mb-4')
privacyHeading.innerText = 'Privacy';
const privacyUl = document.createElement('ul');
privacyUl.setAttribute('class','nav flex-column');

for(let i = 0 ; i<5 ; i++){
    const li = document.createElement('li');
    li.setAttribute('class','nav-item footerLink');
    const a = document.createElement('a');
    a.setAttribute('href','#')
    a.setAttribute('class','nav-link text-light ps-0');
    a.innerHTML = privacyList[i];

    privacyUl.append(li);
    li.append(a);

}

const contactDiv = document.createElement('div');
contactDiv.setAttribute('class','col-md-6 col-lg');
const contactHeading = document.createElement('h2');
contactHeading.setAttribute('class','text-light mb-4')
contactHeading.innerText = 'Contacts';
const add  = document.createElement('p');
add.setAttribute('class','text-light');
add.innerText = 'PO Box W75 Street lan West new queens';

const phone = document.createElement('a');
phone.setAttribute('href','#');
phone.setAttribute('class','text-light text-decoration-none');
const phoneNo = document.createElement('h2');
phoneNo.innerText = '+1 246 333 - 0079';
const mail = document.createElement('a');
mail.setAttribute('href','#');
mail.setAttribute('class','text-light text-decoration-none');
mail.innerText = 'geair@company.com';

const news = document.createElement('a');
news.setAttribute('class','d-block btn btn-outline-warning rounded-0 mt-4 text-light');
news.innerText = 'Subscribe NewsLetter'


footer.append(section);
section.append(div);
div.append(about);
about.append(logoImgDiv);
logoImgDiv.append(logoImg);
about.append(aboutUs);
about.append(hr);
about.append(iconList);
div.append(exploreDiv);
exploreDiv.append(exploreHeading);
exploreDiv.append(uldiv);
uldiv.append(exploreUl1);
uldiv.append(exploreUl2);
div.append(privacyDiv);
privacyDiv.append(privacyHeading);
privacyDiv.append(privacyUl);
div.append(contactDiv)
contactDiv.append(contactHeading);
contactDiv.append(add);
contactDiv.append(phone);
phone.append(phoneNo);
contactDiv.append(mail)
contactDiv.append(news);

