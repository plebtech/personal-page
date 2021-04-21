// DOMContentLoaded required with scripts loaded in <head> of html.
// 'boot loader' of script (hoisting).
document.addEventListener("DOMContentLoaded", () => {
    console.log("loading..");
    titleAnimate();
    tabsListen();
    onLoad();
});

const gradientDown = "linear-gradient(180deg, #002b36, #eee8d5) 10";
const gradientUp = "linear-gradient(0deg, #002b36, #eee8d5) 10";
const gradientNone = "#073642";

// basic timer w/ promise using setTimeout function.
const timer = ms => new Promise(res => setTimeout(res, ms));

// animation on page's title.
const titleAnimate = async () => {
    const title = document.getElementById('slot-machine');
    const titleText = title.textContent;
    title.textContent = '';
    const tTL = titleText.length;
    for (i = 0; i < tTL; i++) {
        if (titleText[i] === ' ') {
            title.innerHTML += titleText[i];
        } else {
            title.innerHTML += titleText[i];
            let delay = randomNumber(25, 250);
            await timer(delay);
        }
    }
    let blinkChar;
    let blinkInterval;
    let target;
    while (true) {
        // randomly sets the targeted character to blink.
        blinkChar = randomNumber(0, tTL - 1);
        target = title.textContent[blinkChar];
        // randomly sets an interval between blinks.
        blinkInterval = randomNumber(100, 1000);
        // if the character is a space, no wait.
        if ((target) === ' ') {
            blinkInterval = 0;
        }
        title.innerHTML = applySpan(titleText, blinkChar, "offBlink");
        await (timer(blinkInterval));
        title.innerHTML = applySpan(titleText, blinkChar, "overBlink");
        await (timer(200));
        title.textContent = titleText;
        await (timer(blinkInterval * 2));
    }
}

// returns a text string with a single recolored character (at position pos, recolored color via span tag).
const applySpan = (text, pos, cssClass) => {
    let result = '';
    for (i = 0; i < text.length; i++) {
        if (i === pos) {
            result += `<span class="${cssClass}">${text[i]}</span>`;
        } else {
            result += text[i];
        }
    }
    // console.log(result);
    return result;
}

const randomNumber = (min, max) => {
    let val = Math.floor(Math.random() * ((max + 1) - min) + min);
    // console.log(val);
    return val;
}

// adds click listener for every instance of .mp-sub class.
const tabsListen = () => {
    const tabs = document.querySelectorAll('.mp-sub');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', borderLight);
        tab.addEventListener('click', nextDivToggle);
    });
}

// changes button appearance based on whether next sibling is visible.
const borderLight = (e) => {
    const nt = e.target.nextElementSibling;
    const nts = getComputedStyle(nt).getPropertyValue('display');
    if (nts === 'block') {
        e.target.style.borderWidth = "1px";
        e.target.style.borderImage = gradientUp;
        e.target.style.background = 'none';
    } else {
        e.target.style.borderWidth = "3px 3px 1px 3px";
        e.target.style.borderImage = gradientDown;
        e.target.style.background = "linear-gradient(180deg, #002b3615, #fdf6e325)";
    }
}

// checks display style of each .mp-item (by referencing nextElementSibling of .mp-sub) and toggles between 'block' and 'none'.
const nextDivToggle = (e) => {
    const nt = e.target.nextElementSibling;
    const nts = getComputedStyle(nt).getPropertyValue('display');
    if (nts === 'block') {
        nt.style.display = 'none';
    } else {
        nt.style.display = 'block';
    }
}



const onLoad = () => {
    console.log("loaded.");
}