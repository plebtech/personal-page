// DOMContentLoaded required with scripts loaded in <head> of html.
// 'boot loader' of script.
document.addEventListener("DOMContentLoaded", () => {
    console.log("loading..");
    titleShuffle();
    tabsListen();
    onLoad();
});

const timer = ms => new Promise(res => setTimeout(res, ms));

const titleShuffle= async () => {
    const title = document.getElementById('slot-machine');
    const titleText = title.textContent;
    title.textContent = '';
    for (i = 0; i < titleText.length; i++) {
        // if (titleText[i] === ' ') {
        //     continue;
        // } else {
            title.innerHTML += titleText[i];
            await timer(200);
        // }
    }
}

// adds click listener for every instance of .mp-sub class.
const tabsListen = () => {
    const tabs = document.querySelectorAll('.mp-sub');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', nextDivToggle);
    });
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