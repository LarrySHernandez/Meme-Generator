let urlInput = document.getElementById('urlInput');
let imageSubmitBtn = document.getElementById('imageSubmitBtn');
let imageChooserBox = document.getElementsByClassName('imageChooserBox');
let memeImageBorder = document.getElementById('memeImageBorder');
let heightInput = document.getElementById("heightNumber");
let widthInput = document.getElementById("widthNumber");
let sizingInputs = document.getElementById("numbers");



//Default Settings
heightInput.value = '300';
widthInput.value = '300';


heightInput.addEventListener('input', function (event) {
    memeImageBorder.style.height = heightInput.value + 'px';
    memeImageBorder.style.bottom = (((635 - heightInput.value) * .5373134328358209) + 140) + "px";
})

widthInput.addEventListener('input', function (event) {
    memeImageBorder.style.width = widthInput.value + 'px';
    memeImageBorder.style.left = (((860 - widthInput.value) * .5178571428571429) + -10) + "px";
})


imageSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let url = urlInput.value
    memeImageBorder.style.zIndex = '2';
    memeImageBorder.style.backgroundImage = `url("${url}")`
});

