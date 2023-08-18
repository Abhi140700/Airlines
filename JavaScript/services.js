const icons = ['<i class="fa-solid fa-comments h1"></i>','<i class="fa-solid fa-paper-plane h1"></i>','<i class="fa-solid fa-sack-dollar h1"></i>'];

const heading = ['We are now available','International Flight','Check Refund'];

const para = ['Call +1 555 666 888 for contuct with us','Call +1 555 666 888 for contuct with us','Call +1 555 666 888 for contuct with us']

export const section2 = document.createElement('section');

const mainDiv = document.createElement('div');
mainDiv.setAttribute('class','container row mx-auto py-5')

for(let i = 0 ; i < 3 ; i++){
    const figureDiv = document.createElement('div');
    figureDiv.setAttribute('class','col-lg')
    const figure = document.createElement('figure');
    figure.setAttribute('class','py-4 border rounded-4 text-center d-lg-flex justify-content-around align-items-center  services');
    figure.style.padding = '1.5rem'
    const iDiv = document.createElement('div');
    iDiv.setAttribute('class','mx-3');
    iDiv.innerHTML = icons[i];

    const figcaption = document.createElement('figcaption');
    figcaption.setAttribute('class','w-75 mx-auto');
    figcaption.innerHTML +=  `<h5>${heading[i]}</h5>`;
    figcaption.innerHTML += `<p>${para[i]}</p>`;

    mainDiv.append(figureDiv);
    figureDiv.append(figure);
    figure.append(iDiv);
    figure.append(figcaption);
}
section2.append(mainDiv)