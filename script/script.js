// set interval and clear it when WhatsApp finally loaded all elements to the DOM...
// this function added on on-click functionality of hiding/revealing the chat list content.

const HideClassName = "hide";
const BtnId = "chrome_extension_privateWhatsApp__btn"; // used in popup/*.js too! (and in script.css obviously)
const OptionsClassNames = {
    AutoHide: "auto-hide",
    HideChatTitleToo: "hide-chat-title-too",
    blurConversations: "blur-conversations"
}

const headerClickIntervalId = setInterval(() => {
    const header = document.querySelectorAll('header')[0];
    const side = document.querySelectorAll('#side')[0];
    if (!header || !side) {
        return; // waiting for interval
    }
    setInterval(kosherfy, 200);

    function kosherfy() {
        console.log("kosherfy");
        //replacements:
        const brideAndGroom = document.createElement('div');
        brideAndGroom.innerHTML = '<img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_1603-40.png" alt="👰‍♀" draggable="false" class="_2UdhN _3zyju i0jNr selectable-text copyable-text" data-plain-text="👰‍♀" style="visibility: visible;"><img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_2529-40.png" alt="🤵‍♂" draggable="false" class="_2UdhN _3zyju i0jNr selectable-text copyable-text" data-plain-text="🤵‍♂" style="visibility: visible;">'

        const chicken = document.createElement('div');
        chicken.innerHTML = '<img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_855-64.png" alt="🐓" draggable="false" class="_2UdhN _1xeoG i0jNr selectable-text copyable-text" data-plain-text="🐓" style="visibility: visible;">'
        
        const willBeFine = document.createElement('div');
        willBeFine.innerHTML = "<span class='new'>בעזרת ה' יהיה בסדר</span>"

        const farApart = document.createElement('div');   
        farApart.innerHTML = '<span><img crossorigin="anonymous" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="👩‍🦰" draggable="false" class="b51 emoji wa i0jNr selectable-text copyable-text" data-plain-text="👩‍🦰" style="background-position: -40px -40px;">&lt;-----------------------------------------------------&gt;<img crossorigin="anonymous" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" alt="👱‍♂️" draggable="false" class="b64 emoji wa i0jNr selectable-text copyable-text" data-plain-text="👱‍♂️" style="background-position: 0px -80px;"></span>'
        
        const israelFlag = document.createElement('div');   
        israelFlag.innerHTML = '<img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_347-64.png" alt="🇮🇱" draggable="false" class="_2UdhN _1xeoG i0jNr selectable-text copyable-text" data-plain-text="🇮🇱" style="visibility: visible;">'

        const cardia = document.createElement('div');   
        cardia.innerHTML = '<img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_3296-64.png" alt="🫀" draggable="false" class="_2UdhN _1xeoG i0jNr selectable-text copyable-text" data-plain-text="🫀" style="visibility: visible;">'

        const priesltyBlessing = document.createElement('div');   
        priesltyBlessing.innerHTML = '<img crossorigin="anonymous" src="/img/67f736e03050b4d0ed3779b0edbf88c7_w_2034-64.png" alt="🖖" draggable="false" class="_2UdhN _1xeoG i0jNr selectable-text copyable-text" data-plain-text="🖖" style="visibility: visible;">'
        
        for (const el of document.body.getElementsByTagName('img')) {
            if (el.getAttribute('data-plain-text') == "😘") {
                el.replaceWith(brideAndGroom)
            }
            if (el.getAttribute('data-plain-text') == "🐷") {
                el.replaceWith(chicken)
            }
            if (el.getAttribute('data-plain-text') == "💩") {
                el.replaceWith(willBeFine)
            }
            if (el.getAttribute('data-plain-text') == "🫂") {
                el.replaceWith(farApart)
            }
            if (el.getAttribute('data-plain-text') == "🇵🇸") {
                el.replaceWith(israelFlag)
            }
            if (el.getAttribute('data-plain-text') == "❤️" || el.className == '_2UdhN _1xeoG _1jJBG i0jNr') {
                el.replaceWith(cardia)
            }
            if (el.getAttribute('data-plain-text') == "🖕" ) {
                el.replaceWith(priesltyBlessing)
            }
        }


        
        const exercise3 = document.createElement('div');
        exercise3.innerHTML = '<span class="new">עשית את תרגיל 3 במסדי?</span>'

        const shabatAdvent = document.createElement('div');
        shabatAdvent.innerHTML = '<span class="new">עד כניסת שבת ישבתי על התרגיל הזה</span>'


       
        for (const el of document.body.getElementsByClassName('f804f6gw ln8gz9je')) {
            if (el.innerHTML == "את נראית ממש יפה היום" ||
            el.innerHTML == "את נראת ממש יפה היום" ||
            el.innerHTML ==  "את ניראת ממש יפה היום" || 
            el.innerHTML == "את ניראית ממש יפה היום") {
                el.replaceWith(exercise3)
            }
            if (el.innerHTML == "כל הסופש ישבתי על התרגיל הזה" ||
            el.innerHTML == 'כל הסופ"ש ישבתי על התרגיל הזה') {
                el.replaceWith(shabatAdvent)
            }
           
            

        }

    }

    //document.body.classList.add(OptionsClassNames.blurConversations)
    // const list = document.body.getElementsByClassName('_3R6rC');
    // console.log(list);
    // if (list[0] != null){
    // for (let item of list) {
    //     console.log(item);
    //     if (element.innerHTML.includes("<img crossorigin=\"anonymous\" src=\"/img/67f736e03050b4d0ed3779b0edbf88c7_w_2090-64.png")){
    //         element.innerHTML = "X";}
    // }




    header.style.alignItems = "center";
    const secretBtn = document.createElement('button'); // button from extension to hide/reveal chat list content

    secretBtn.textContent = "secret button";
    secretBtn.id = BtnId;
    chrome.storage.sync.get(({ autoHideButton, hideChatTitleToo, blurConversation }) => {
        // Auto Hide Button
        if (autoHideButton) {
            setTimeout(() => secretBtn.classList.add(OptionsClassNames.AutoHide), 100);
        }
        else secretBtn.classList.remove(OptionsClassNames.AutoHide);
        header.insertBefore(secretBtn, header.children[1])

        // Hide Chat Title Too
        if (hideChatTitleToo) {
            setTimeout(() => side.classList.add(OptionsClassNames.HideChatTitleToo), 100);
        }
        else side.classList.remove(OptionsClassNames.HideChatTitleToo);

        // Blur Conversation
        if (blurConversation) {
            //setTimeout(() => document.body.classList.add(OptionsClassNames.blurConversations), 100);
            console.log("blurConversation");
            //setTimeout(kosherfy, 100);
        }
        else document.body.classList.remove(OptionsClassNames.blurConversations)

    })

    secretBtn.onclick = () => {
        side.classList.toggle(HideClassName)
    }

    clearInterval(headerClickIntervalId)
}, 100);


// * not in use
// const blurChatInterval = setInterval(() => {
//     const el = document.querySelectorAll('header ._1yNrt ._1QVfy')[0];
//     const blurChatBtn = document.createElement('button');
//     blurChatBtn.id = "chrome_extension_privateWhatsApp__blur-chat-button";
//     blurChatBtn.textContent = "hide messages";
//     el.appendChild(blurChatBtn);
//     clearInterval(blurChatInterval);
// }, 100);
