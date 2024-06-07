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

//Default Settings
fontSizeChange();
heightInput.value = '300';
widthInput.value = '300';
fontSize.value = '14';

function textInputDemo() {
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

memeTopText.addEventListener('input', function () {
    textInputDemo();
});

memeBottomText.addEventListener('input', function () {
    textInputDemo();
});

function fontSizeChange() {
    if (fontSize.value > 0 && fontSize.value <= 75) {
        topTextDemo.style.fontSize = fontSize.value + "px";
        bottomTextDemo.style.fontSize = fontSize.value + "px";
    }
}


fontSize.addEventListener('input', function () {
    fontSizeChange();
});

function createMeme() {
    let meme = memeImageBorder.cloneNode(true);
    let memeTextTop = document.createElement('div');
    memeTextTop.innerText = memeTopText.value;
    memeTextTop.classList.add('textDecoration');
    memeTextTop.style.margin = '13px';
    let memeTextBottom = document.createElement('div');
    memeTextBottom.innerText = memeBottomText.value;
    memeTextBottom.classList.add('textDecoration');
    memeTextBottom.style.marginTop = '53%';

    meme.append(memeTextTop);
    meme.append(memeTextBottom);
    meme.style.display = 'inline';
    memes.classList.remove('hidden');
    memes.append(meme);
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
    memeImageBorder.style.zIndex = '2';
    memeImageBorder.style.backgroundImage = `url("${url}")`
});

