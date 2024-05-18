let urlInput = document.getElementById('urlInput');
let imageSubmitBtn = document.getElementById('imageSubmitBtn');
let imageInput = document.getElementsByClassName('imageInput');
let memeImageBorder = document.getElementById('memeImageBorder');


imageSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let url;
    for (let input of imageInput) {
        if (input.classList.contains('urlTextInput')) {
            url = input.value;
        }
        input.classList.add('hidden');
    }
    memeImageBorder.classList.remove('hidden');
    memeImageBorder.style.backgroundImage = `url(${url})`;



});

