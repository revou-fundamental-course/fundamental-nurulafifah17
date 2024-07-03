function validatefrom() {
    let firtsname = document.querySelector('#firtsname').value;
    let lastname = document.querySelector('#lastname').value;

    console.log(firtsname);
    console.log(lastname);

    if (firtsname != '' && lastname != '') {
        document.querySelector('result').innerHTML = firtsname + '' + lastname;
    } else {
        alert('Inputan ada yang kosong');
    }
}


let indexslide = 1;
showslide(1);

function nextslide(n) {
    showslide(indexslide += n);
}

function showslide(n) {
    let listimage = document.getElementsByClassName('banneritem');
    if (n > listimage.length) indexslide = 1;

    let index = 0;
    while (index < listimage.length) {
        listimage[index].style.display = 'none';
        index++;
    }

    listimage[indexslide - 1].style.display = 'block';
    console.log(indexslide - 1);
}