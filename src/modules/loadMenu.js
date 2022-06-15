function createGallery(src,alt,text,price){
    const cont = document.createElement('div');
    cont.classList.add('container');

    const img = document.createElement('img');

    img.setAttribute('src',src);
    img.setAttribute('alt',alt);

    const desc = document.createElement('div');
    desc.classList.add('description');

    const foodName = document.createElement('div');
    foodName.innerHTML = text;

    const cost = document.createElement('div');
    cost.innerHTML = price;

    desc.appendChild(foodName);
    desc.appendChild(cost);

    cont.appendChild(img);
    cont.appendChild(desc);

    return cont;
}

function setActBtn(id){
    const actBtn = document.querySelector('.tab.active');
    if(actBtn){
        actBtn.classList.remove('active');
    }
    const menuBtn = document.getElementById(id);
    menuBtn.classList.add('active');
}

function loadMenu(){
    const content = document.getElementById('tab-content');
    content.classList.add('flex');
    content.textContent = '';
    const items = [
        createGallery(
            'https://www.theworlds50best.com/discovery/filestore/jpg/Pages-Paris-France-02.jpg',
            'weird fish',
            'Weird Fish',
            'Overpriced'
        ),
        createGallery(
            'https://www.discoverwalks.com/blog/wp-content/uploads/2019/04/jesson-mata-1137291-unsplash-816x544.jpg',
            'I have no idea what this is',
            'This may be the best thing you eat or the last thing you eat',
            'Wayyyyy too overpriced'
        )
    ]

    items.forEach((food)=>{
        content.append(food);
    });
}
export default loadMenu;