//console.log("TEST1")

/*chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    var myTabId = tabs[0].id;
    chrome.tabs.sendMessage(myTabId, {text: "hi"}, function(response) {
        alert(response);
    });
});*/

var s = document.createElement('script');
s.src = chrome.runtime.getURL('src/ad-descriptions/ad-descriptions.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

/*(async () => {
    async function getCurrentTab() {
        let queryOptions = { active: true, lastFocusedWindow: true };
        // `tab` will either be a `tabs.Tab` instance or `undefined`.
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }
    let tab = await getCurrentTab();

    console.log("TEST3", tab)

    
    function showAlert() {
        alert(`Hello`);
    }
    
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: showAlert
    });
} )()*/