// const app = {
//     init: () => {
//         let h1 = document.createElement('h1');
//         h1.textContent = 'Hadi BABY';
//         document.body.appendChild(h1);
//         console.log('working baby');
//     }
// };
// document.addEventListener(ready, app.init);

// document.querySelector('.add').addEventListener('click', () => {
//     let home = document.querySelector('.home');
//     home.style.display = 'none';

//     let reviewPage = document.querySelector('.reviewPage');
//     reviewPage.style.display = 'block';
// });

let i;
let index = 0;
let itemz = [];

document.querySelector('.back').addEventListener('click', () => {
    let home = document.querySelector('.home');
    home.style.display = 'block';

    let reviewPage = document.querySelector('.reviewPage');
    reviewPage.style.display = 'none';
});

function cam() {
    let opts = {
        quality: 80,
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA,
        mediaType: Camera.MediaType.PICTURE,
        encodingType: Camera.EncodingType.JPEG,
        cameraDirection: Camera.Direction.BACK,
        targetWidth: 300,
        targetHeight: 400
    };

    navigator.camera.getPicture(succ, fail, opts);
}

function succ(imgURI) {
    i = imgURI;
    document.querySelector('.photo').src = 'Icons/no-image.png';

    document.querySelector('.photo').src = imgURI;
}

function fail(msg) {
    document.getElementById('msg').textContent = msg;
}

document.querySelector('.add').addEventListener('click', () => {
    cam();
    let home = document.querySelector('.home');
    home.style.display = 'none';

    let reviewPage = document.querySelector('.reviewPage');
    reviewPage.style.display = 'block';
    document.querySelector('.photo').src = 'Icons/no-image.png';
});

document.querySelector('.save').addEventListener('click', () => {
    index++;
    let input = document.querySelector('.input');
    let v = document.querySelector('.hadi');

    let title = input.value;
    let rating = v.value;

    console.log(input.value);
    console.log(v.value);

    let today = new Date();
    let day = today.getDate();

    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }
    today = month + '-' + day + '-' + year;

    let img = document.createElement('img');
    let p = document.createElement('p');
    let item = document.createElement('div');
    let date = document.createElement('p');

    let s = 'item' + index;

    img.src = i;

    item.classList.add('item' + index, 'hs');
    p.textContent = input.value;

    if (input.value == '') {
        p.textContent = 'untitled';
    }

    if (i == null) {
        img.src = 'Icons/no-image.png';
    }
    date.textContent = today;
    date.className = 'date';

    document.querySelector('.home').appendChild(item);
    document.querySelector('.item' + index).appendChild(img);
    document.querySelector('.item' + index).appendChild(p);
    document.querySelector('.item' + index).appendChild(date);

    console.log(i);

    itemz.push({
        id: today,
        img: i,
        name: title,
        rating: v.value
    });

    console.log(itemz);

    input.value = '';
    v.value = '1';

    let reviewPage = document.querySelector('.reviewPage');
    reviewPage.style.display = 'none';

    let home = document.querySelector('.home');
    home.style.display = 'block';

    document.querySelector('.fi').style.display = 'none';
});

document.addEventListener('click', function(e) {
    //do something
    console.log(e.target.className);
});

// let storage = window.localStorage;
// let review = {
//     title: 'Chair',
//     img: 'img/chair.png',
//     rating: 5
// };
// let steve = [];
// steve.push(review)
// let item = JSON.stringify(review);
// localStorage.setItem("test", JSON.stringify(steve))
// lostorage.setItem('512b974faa9bcc4eac9622129c8b385da45c2cfe', item);
// let test2 = localStorage.getItem("test");
// let test3  = JSON.parse(test2)
// let value = storage.getItem('512b974faa9bcc4eac9622129c8b385da45c2cfe');
// let obj = JSON.parse(value);
// console.log(obj.title);
// let h1 = document.createElement('h1');
// h1.textContent = obj.title;
// document.body.appendChild(h1);
// storage.removeItem(key);
// });

// let v = document.querySelector('.input');
// v.addEventListener('keypress', e => {
//     if (e.key == 'Enter') {
//         console.log(v.value);
//         v.value = '';
//     }
// });

// document.querySelector('.btn').addEventListener('keypress', e => {
//     navigator.camera.getPicture();
// });