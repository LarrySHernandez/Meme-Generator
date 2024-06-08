let urlInput = document.getElementById('urlInput');
let imageSubmitBtn = document.getElementById('imageSubmitBtn');
let imageChooserBox = document.getElementsByClassName('imageChooserBox');
let memeImageBorder = document.getElementById('memeImageBorder');
let heightInput = document.getElementById("heightNumber");
let widthInput = document.getElementById("widthNumber");
let sizingInputs = document.getElementById("numbers");
let addBtn = document.getElementById('addBtn');
let memeText = document.getElementById('memeText');
let memes = document.getElementById('memes');
let memeTopText = document.getElementById('memeTopText');
let memeBottomText = document.getElementById('memeBottomText');
let textMaxTop = document.getElementById('textMaxTop');
let textMaxBottom = document.getElementById('textMaxBottom');
let topTextDemo = document.getElementById('topTextDemo');
let bottomTextDemo = document.getElementById('bottomTextDemo');
let fontSize = document.getElementById('fontSize');
let memesObj = {};
let memeId = 0;

//Default Settings
heightInput.value = '300';
widthInput.value = '300';
fontSize.value = '24';
fontSizeChange();

function textInputDemo() {
    if (memeImageBorder.style.zIndex > 1) {
        if (memeTopText.value.length <= 40) {
            topTextDemo.innerText = memeTopText.value;
            textMaxTop.classList.add('hidden');
        } else {
            topTextDemo.innerText = "";
            textMaxTop.classList.remove('hidden');
        }

        if (memeBottomText.value.length <= 40) {
            bottomTextDemo.innerText = memeBottomText.value;
            textMaxBottom.classList.add('hidden');
        } else {
            bottomTextDemo.innerText = "";
            textMaxBottom.classList.remove('hidden');
        }

    }
}

memeTopText.addEventListener('input', function () {
    textInputDemo();
});

memeBottomText.addEventListener('input', function () {
    textInputDemo();
});

function fontSizeChange() {
    if (fontSize.value >= 24 && fontSize.value <= 75) {
        topTextDemo.style.fontSize = fontSize.value + "px";
        bottomTextDemo.style.fontSize = fontSize.value + "px";

    }
}


fontSize.addEventListener('input', function () {
    fontSizeChange();
});

function createMeme() {
    let meme = memeImageBorder.cloneNode(true);
    meme.style.position = 'static';
    meme.style.display = 'inline-block';
    memeId++;
    memesObj['meme#' + memeId] = meme;
    memes.classList.remove('hidden');
    for (let item in memesObj) {
        memes.append(memesObj[item]);
    }
}


addBtn.addEventListener('click', function (e) {
    e.preventDefault();
    if (memeTopText.value.length > 40) {
        textMaxTop.classList.remove('hidden');
    } else {
        textMaxTop.classList.add('hidden');
    }
    if (memeBottomText.value.length > 40) {
        textMaxBottom.classList.remove('hidden');
    } else {
        textMaxBottom.classList.add('hidden');
    }
    if (memeImageBorder.style.zIndex > 1 && memeTopText.value.length < 40 && memeBottomText.value.length < 40) {
        createMeme();
        let url = urlInput.value;
        memeImageBorder.style.zIndex = '0';
        memeImageBorder.style.backgroundImage = 'url("")';
        urlInput.value = '';
        memeTopText.value = '';
        memeBottomText.value = '';
        topTextDemo.innerHTML = '';
        bottomTextDemo.innerHTML = '';
        fontSize.value = '24';
        memeImageBorder.style.display = 'none';
        fontSizeChange();
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
    let url = urlInput.value;
    memeImageBorder.style.display = 'inline-block';
    memeImageBorder.style.zIndex = '2';
    textInputDemo();
    memeImageBorder.style.backgroundImage = `url("${url}")`
});

