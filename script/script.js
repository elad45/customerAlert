
const headerClickIntervalId = setInterval(() => {
    setInterval(kosherfy, 1000*5);
    setInterval(reloadfunction, 1000*10*8);
    function reloadfunction() {
        console.log("im reloading")
        location.reload()
    }
    
    function kosherfy() {
        // Select all elements with the specified class
        const elements = document.querySelectorAll('.MuiTypography-root.MuiTypography-body2.MuiListItemText-secondary.muirtl-ascnuj');
        const contentOfSecondElement = 0
        // Get the content of the second element
        if (elements.length > 0){
            contentOfSecondElement = elements[1].textContent;
            console.log(contentOfSecondElement);
        }
        
        if (document.body.innerText.includes("ספירה")  || contentOfSecondElement>0) {
            console.log("The word ספירה is present on the page.");
            var soundAudio = new Audio("https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg")
            soundAudio.play();
        } else {
            console.log("The word ספירה is not present on the page.");
        }
    }
    clearInterval(headerClickIntervalId)
}, 100);
