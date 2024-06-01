let urlInput = document.getElementById('urlInput');
let imageSubmitBtn = document.getElementById('imageSubmitBtn');
let imageChooserBox = document.getElementsByClassName('imageChooserBox');
let memeImageBorder = document.getElementById('memeImageBorder');
let heightInput = document.getElementById("heightNumber");
let widthInput = document.getElementById("widthNumber");
let sizingInputs = document.getElementById("numbers");
let addBtn = document.getElementById('addBtn');
let memeText = document.getElementById('memeText');


//Default Settings
heightInput.value = '300';
widthInput.value = '300';


function createText() {
    let text = memeText.value;
    let textBox = document.createElement('p');
    textBox.innerText = text;
    textBox.style.height = '25px';
    textBox.style.width = '70px';
    textBox.style.position = 'absolute';
    console.dir(textBox);
    memeImageBorder.appendChild(textBox);

}



addBtn.addEventListener('click', function () {
    if (memeImageBorder.style.zIndex.length > 1) {
        createText();

    }
});

heightInput.addEventListener('input', function (event) {
    if (heightInput.value <= 635 && heightInput.value >= 300) {
        memeImageBorder.style.height = heightInput.value + 'px';
        memeImageBorder.style.bottom = (((635 - heightInput.value) * .5373134328358209) + 140) + "px";
    } else if (heightInput > 635) {
        heightInput.value = 635;
    } else if (heightInput < 300) {
        heightInput.value = 300;
    }
})

widthInput.addEventListener('input', function (event) {
    if (widthInput.value <= 860 && widthInput.value >= 300) {
        memeImageBorder.style.width = widthInput.value + 'px';
        memeImageBorder.style.left = (((860 - widthInput.value) * .5178571428571429) + -10) + "px";
    } else if (widthInput > 860) {
        widthInput.value = 860;
    } else if (widthInput < 300) {
        widthInput.value = 300;
    }
})


imageSubmitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    let url = urlInput.value
    memeImageBorder.style.zIndex = '2';
    memeImageBorder.style.backgroundImage = `url("${url}")`
});

