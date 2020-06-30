document.addEventListener("DOMContentLoaded", () => {
    console.log("loading..");
    tabsListen();
    onLoad();
});

const tabsListen = () => {
    const tabs = document.querySelectorAll('.mp-sub');
    tabs.forEach(function (tab) {
        tab.addEventListener('click', nextDivToggle);
        tab.style.cursor = 'pointer';
    });
}

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

function sfToggle() {
    if (screenfetch.style.display == 'block') {
        screenfetch.style.display = 'none';
    }
    else {
        screenfetch.style.display = 'block';
    }
}



// document.addEventListener("DOMContentLoaded", (event) => {
//     console.log("loading...");



//     const toggleTabs = document.querySelectorAll('.mp-sub');
//     toggleTabs.forEach( function (tab) {
//         tab.addEventListener("click", tabClicked);
//     });

//     const tabClicked = (e) => {
//         console.log(e);
//     }

//     const sfToggle = () => {
//         console.log(this);
//     }

//     console.log("loaded.");
// });