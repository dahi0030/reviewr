let i;
let index = 0;
let itemz = [];
let selected;

document.querySelector('.back').addEventListener('click', () => {
    let home = document.querySelector('.home');
    home.style.display = 'block';

    let reviewPage = document.querySelector('.reviewPage');
    reviewPage.style.display = 'none';

    let DetailsPage = document.querySelector('.DetailsPage');
    DetailsPage.style.display = 'none';
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
        id: 'item' + index,
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

document.querySelector('div').addEventListener('click', function(e) {
    console.log(e.target.classList[0]);

    for (i in itemz) {
        if (e.target.classList[0] == itemz[i].id) {
            selected = e.target.classList[0];
            console.log(e.target.classList[0] + ' ' + itemz[i].id);

            let tt = document.createElement('p');
            let rate = document.createElement('p');
            let im = document.createElement('img');

            im.src = itemz[i].img;
            im.className = 'first';
            tt.textContent = 'Title: ' + itemz[i].name;
            tt.className = 'second';
            rate.textContent = 'Rating: ' + itemz[i].rating + '/5';
            rate.className = 'third';

            document.querySelector('.DetailsPage').appendChild(im);
            document.querySelector('.DetailsPage').appendChild(tt);
            document.querySelector('.DetailsPage').appendChild(rate);

            let home = document.querySelector('.home');
            home.style.display = 'none';

            let DetailsPage = document.querySelector('.DetailsPage');
            DetailsPage.style.display = 'block';
        }

        document.querySelector('.try').addEventListener('click', () => {
            console.log('he tried boss!');

            let reviewPage = document.querySelector('.reviewPage');
            reviewPage.style.display = 'none';

            let DetailsPage = document.querySelector('.DetailsPage');
            DetailsPage.style.display = 'none';

            let home = document.querySelector('.home');
            home.style.display = 'block';
            document
                .querySelector('.DetailsPage')
                .querySelector('.first')
                .remove();

            document
                .querySelector('.DetailsPage')
                .querySelector('.second')
                .remove();
            document
                .querySelector('.DetailsPage')
                .querySelector('.third')
                .remove();
        });
    }
});

document.querySelector('.delete').addEventListener('click', () => {
    document
        .querySelector('.DetailsPage')
        .querySelector('.first')
        .remove();

    document
        .querySelector('.DetailsPage')
        .querySelector('.second')
        .remove();
    document
        .querySelector('.DetailsPage')
        .querySelector('.third')
        .remove();
    document.querySelector('.' + selected).remove();

    let reviewPage = document.querySelector('.reviewPage');
    reviewPage.style.display = 'none';

    let DetailsPage = document.querySelector('.DetailsPage');
    DetailsPage.style.display = 'none';

    let home = document.querySelector('.home');
    home.style.display = 'block';
});