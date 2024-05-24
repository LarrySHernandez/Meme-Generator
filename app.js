let urlInput = document.getElementById('urlInput');
let imageSubmitBtn = document.getElementById('imageSubmitBtn');
let imageChooserBox = document.getElementsByClassName('imageChooserBox');
let memeImageBorder = document.getElementById('memeImageBorder');


imageSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let url = urlInput.value
    memeImageBorder.style.zIndex = '2';
    memeImageBorder.style.backgroundImage = `url("${url}")`

    console.log(url.length);
});

