const Arr = ['img/brand_img01.png','img/brand_img02.png','img/brand_img03.png','img/brand_img04.png','img/brand_img05.png','img/brand_img06.png']

export const section6 = document.createElement('section');
section6.setAttribute('class','brands')

const div = document.createElement('div');
div.setAttribute('class','container row text-center mx-auto justify-content-evenly align-items-center py-5')

for(let i = 0 ; i < Arr.length ; i++){

    const Imgdiv = document.createElement('div');
    Imgdiv.setAttribute('class','col-md py-3')
    const img = document.createElement('img');
    img.setAttribute('src',Arr[i]);
    img.setAttribute('class','img-fluid');

    div.append(Imgdiv);
    Imgdiv.append(img);
}

section6.append(div);