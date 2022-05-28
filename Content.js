
function replaceRecursively(element, from, to) {
    if (element.childNodes.length) {
        element.childNodes.forEach(child => replaceRecursively(child, from, to));
    } else {
        const cont = element.textContent;
        if (cont) element.textContent = cont.replace(from, to);
        console.log("replaced!!!!");
        console.log(cont);
    }
};

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
await sleep(10000);
replaceRecursively(document.body, new RegExp("😘", "g"), "👰‍♀🤵‍♂"); 

/*
while(true){
replaceRecursively(document.body, new RegExp("😘", "g"), "👰‍♀🤵‍♂");
await sleep(10000);

}
*/
//document.body.innerHTML = document.body.innerHTML.replaceAll('😘', '👰‍♀🤵‍♂');
