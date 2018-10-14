// function openOrFocusOptionsPage() {
//    var optionsUrl = chrome.extension.getURL('background.html'); 
//    chrome.tabs.query({}, function(extensionTabs) {
//       var found = false;
//       for (var i=0; i < extensionTabs.length; i++) {
//          if (optionsUrl == extensionTabs[i].url) {
//             found = true;
//             console.log("tab id: " + extensionTabs[i].id);
//             chrome.tabs.update(extensionTabs[i].id, {"selected": true});
//          }
//       }
//       if (found == false) {
//           chrome.tabs.create({url: "background.html"});
//       }
//    });
// }
// chrome.extension.onConnect.addListener(function(port) {
//   var tab = port.sender.tab;
//   // This will get called by the content script we execute in
//   // the tab as a result of the user pressing the browser action.
//   port.onMessage.addListener(function(info) {
//     var max_length = 1024;
//     if (info.selection.length > max_length)
//       info.selection = info.selection.substring(0, max_length);
//       openOrFocusOptionsPage();
//   });
// });
 
// // Called when the user clicks on the browser action icon.
// chrome.browserAction.onClicked.addListener(function(activeTab) {
// 	chrome.tabs.create({url: "background.html"});
//    // openOrFocusOptionsPage();
// });

async function DOMtoString(url) {
    var html = '';
    var output = [];

    var response =  await fetch("http://localhost:1999/",{
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin' : '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "html":url })
        });
    var responseJSON =  await response.json();
    var output = responseJSON;

    console.log(output[0])
    return output;
}

chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
async function(tabs){
	// document.getElementById("message").innerHTML = tabs[0].url;
	tab = tabs[0].url;
	getCurrentURL(tab);
});

async function getCurrentURL(tab){
	let imgs = await DOMtoString(tab);
	// let pkl = await DOMtoString(imgs)

	document.getElementById("message").innerHTML = imgs;
	chrome.tabs.create({url: "file:///home/minami/Desktop/junction/extension/template/index.html"});
	// getCurrentImg(imgs);
	// console.log(imgs)
}

// function getCurrentImg(imgs){
// 	console.log(imgs)
// 	document.getElementById("message").innerHTML = imgs[0]
// }