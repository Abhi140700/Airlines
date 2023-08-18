const Arr = ['img/slider_bg01.jpg' , 'img/slider_bg02.jpg' , 'img/slider_bg03.jpg' ];
const Content = {
    heading : '<h1> Travell </h1>' ,
    para : '<p class="d-none d-md-block w-50">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>',
    btn: '<a href="#" class="btn btn-outline-light rounded-0"><i class="fa-solid fa-plane-departure pe-3"></i>Book Now</a>'
}
const icons = ['<i class="fa-solid fa-plane pe-3"></i> <h4 class="m-0">Flights</h4>','<i class="fa-solid fa-car pe-3"></i> <h4 class="m-0">Cars</h4>','<i class="fa-brands fa-atlassian pe-3"></i> <h4 class="m-0">Atraction</h4>','<i class="fa-solid fa-taxi pe-3"></i> <h4 class="m-0">Taxi</h4>'];
const Button = ['AIR BOOKING','MyTrip','CHECK IN','FLIGHT STATUS'];
const ButtonId = ['nav-air-tab' , 'nav-trip-tab' , 'nav-check-tab' , 'nav-flight-tab'];
const ButtonTargetId = ['AirBooking','MyTrip','CheckIn','FlightStatus'];
const typeOfTour = ['Tour Type','Adventure','Family','Newest Item','Nature And Wildelife'];
const noOfPassenger = ['No Of Passenger','1' , '2' , '3' , '4' , '5'];

export const main = document.createElement('main');

const section = document.createElement('section');

const carouselDiv = document.createElement('div');
carouselDiv.setAttribute('id','carouselSlide');
carouselDiv.setAttribute('class','carousel slide');
carouselDiv.setAttribute('data-bs-ride','carousel');

const carouselInner = document.createElement('div');
carouselInner.setAttribute('class','carousel-inner');

for(let i = 0 ; i < Arr.length; i++ ){
    const carouselItem = document.createElement('div');
    carouselItem.setAttribute('class','carousel-item item position-relative');

    const carouselImg = document.createElement('img');
    carouselImg.setAttribute('src' , Arr[i]);
    carouselImg.setAttribute('alt' , 'A');
    carouselImg.setAttribute('class','d-block w-100');

    const div = document.createElement('div')
    div.setAttribute('class','position-absolute top-50 start-50 translate-middle w-100 h-100 d-flex flex-column justify-content-center align-items-center text-light text-center caro');

    div.innerHTML += Content.heading;
    div.innerHTML += Content.para;
    div.innerHTML += Content.btn;

    carouselInner.append(carouselItem);
    carouselItem.append(carouselImg);
    carouselItem.append(div);


    const ulDiv = document.createElement('div');
    ulDiv.setAttribute('class','position-absolute bottom-0 start-50 translate-middle d-none d-lg-block')
    const ul = document.createElement('ul');
    ul.setAttribute('class','nav');
    for(let i = 0; i<icons.length ;i++){
        const navItem = document.createElement('li');
        navItem.setAttribute('class','nav-item travel');
        const navLink = document.createElement('a');
        navLink.setAttribute('class','nav-link text-light d-flex align-items-center ');
        navLink.setAttribute('href','#');

        navLink.innerHTML = icons[i];

        carouselItem.append(ulDiv);
        ulDiv.append(ul);
        ul.append(navItem);
        navItem.append(navLink);
    }

}
main.append(section)
section.append(carouselDiv);
carouselDiv.append(carouselInner);
carouselInner.children[0].classList.add('active')


// Form Container

const outerDiv = document.createElement('div');
outerDiv.setAttribute('class','mt-5 container mx-auto border border-warning rounded-5 d-none d-lg-block formContainer')

const nav = document.createElement('nav');
nav.setAttribute('class','mt-2')

const navDiv = document.createElement('div');
navDiv.setAttribute('class','nav nav-tabs nav-fill justify-content-center');
navDiv.setAttribute('id','nav-tab');
navDiv.setAttribute('role','tablist');

section.append(outerDiv);
outerDiv.append(nav)
nav.append(navDiv);

for(let i = 0 ; i<Button.length ; i++){
    const button = document.createElement('button');
    button.innerText = Button[i];
    button.setAttribute('class','nav-link');
    button.setAttribute('id',ButtonId[i])
    button.setAttribute('data-bs-toggle','tab')
    button.setAttribute('data-bs-target','#' + ButtonTargetId[i]);

    navDiv.append(button);

    // Content
    const tabContent = document.createElement('div');
    tabContent.setAttribute('class','tab-content');
    tabContent.setAttribute('id','nav-tabContent')
    const formDiv = document.createElement('div');
    formDiv.setAttribute('class','tab-pane fade w-75 mx-auto py-4');
    formDiv.setAttribute('id',ButtonTargetId[i]);
    
    // Form

    const formtext = document.createElement('h6');
    formtext.setAttribute('class','py-2')
    const formtextContent = document.createTextNode('Flights | Geair Stopover');

    const form = document.createElement('form');
    form.setAttribute('class','d-flex')

    const inputFromDiv = document.createElement('div');
    inputFromDiv.setAttribute('class','form-floating');
    const inputFrom = document.createElement('input');
    inputFrom.setAttribute('type','text');
    inputFrom.setAttribute('class','form-control rounded-0 rounded-start');
    inputFrom.style.width = '150px';
    const inputFromLabel = document.createElement('label');
    const inputFromLabelText = document.createTextNode('From');

    const inputToDiv = document.createElement('div');
    inputToDiv.setAttribute('class','form-floating');
    const inputTo = document.createElement('input');
    inputTo.setAttribute('type','text');
    inputTo.setAttribute('class','form-control rounded-0');
    inputTo.style.width = '150px';
    const inputToLabel = document.createElement('label');
    const inputToLabelText = document.createTextNode('To')

    const selectTripDiv = document.createElement('div');
    selectTripDiv.setAttribute('class','form-floating');
    const selectTrip = document.createElement('select');
    selectTrip.setAttribute('class','form-floating');
    selectTrip.setAttribute('class','form-select rounded-0');
    selectTrip.style.width = '150px';
    const selectTripLabel = document.createElement('label');
    const selectTripLabelText = document.createTextNode('Trip');


    for(let i = 0 ; i < typeOfTour.length ; i++){
        const option = document.createElement('option')
        option.innerText = typeOfTour[i];

        selectTrip.append(option);

    }

    const depatureDateDiv = document.createElement('div');
    depatureDateDiv.setAttribute('class','form-floating');
    const depatureDate = document.createElement('input');
    depatureDate.setAttribute('type','date');
    depatureDate.setAttribute('class','form-control form-control-date rounded-0');
    const depatureDateLabel = document.createElement('label');
    const depatureDateLabelText = document.createTextNode('Depart');

    const returnDateDiv = document.createElement('div');
    returnDateDiv.setAttribute('class','form-floating');
    const returnDate = document.createElement('input');
    returnDate.setAttribute('type','date');
    returnDate.setAttribute('class','form-control form-control-date rounded-0');
    const returnDateLabel = document.createElement('label');
    const returnDateLabelText = document.createTextNode('Return');

    const noPassengerDiv = document.createElement('div');
    noPassengerDiv.setAttribute('class','form-floating');
    const noPassenger = document.createElement('select');
    noPassenger.setAttribute('class','form-select rounded-0 rounded-end');
    const noPassengerLabel = document.createElement('label');
    const noPassengerLabelText = document.createTextNode('Passenger');

    for(let i = 0 ; i < noOfPassenger.length ; i++){
        const option = document.createElement('option')
        option.innerText = noOfPassenger[i];

        noPassenger.append(option);
    }
    const bookFlightDiv = document.createElement('div');
    bookFlightDiv.setAttribute('class','d-flex justify-content-end my-4 align-items-center');
    const addPromo = document.createElement('a');
    addPromo.setAttribute('href','#');
    addPromo.setAttribute('class','btn btn-outline-warning me-3');
    addPromo.innerHTML = '<i class="fa-solid fa-plus"></i> Apply Promo Code';

    const bookFlight = document.createElement('a');
    bookFlight.setAttribute('href','#');
    bookFlight.setAttribute('class','btn btn-warning');
    bookFlight.innerHTML = '<i class="fa-solid fa-plane-departure"></i> Book Now';


    outerDiv.append(tabContent)
    tabContent.append(formDiv);
    formDiv.append(formtext);
    formtext.append(formtextContent);
    formDiv.append(form);
    formDiv.append(bookFlightDiv);
    bookFlightDiv.append(addPromo);
    bookFlightDiv.append(bookFlight);


    form.append(inputFromDiv);
    inputFromDiv.append(inputFrom)
    inputFromDiv.append(inputFromLabel)
    inputFromLabel.append(inputFromLabelText)

    form.append(inputToDiv);
    inputToDiv.append(inputTo);
    inputToDiv.append(inputToLabel)
    inputToLabel.append(inputToLabelText)

    form.append(selectTripDiv);
    selectTripDiv.append(selectTrip);
    selectTripDiv.append(selectTripLabel)
    selectTripLabel.appendChild(selectTripLabelText);

    form.append(depatureDateDiv);
    depatureDateDiv.append(depatureDate);
    depatureDateDiv.append(depatureDateLabel);
    depatureDateLabel.append(depatureDateLabelText);

    form.append(returnDateDiv);
    returnDateDiv.append(returnDate);
    returnDateDiv.append(returnDateLabel);
    returnDateLabel.append(returnDateLabelText);

    form.append(noPassengerDiv);
    noPassengerDiv.append(noPassenger);
    noPassengerDiv.append(noPassengerLabel);
    noPassengerLabel.append(noPassengerLabelText);


}
navDiv.children[0].classList.add('active')
// tabContent.children
outerDiv.children[1].children[0].classList.add('active')
outerDiv.children[1].children[0].classList.add('show')


