async function DOMtoString(url) {
    var html = '';
    var output = [];

    var response =  await fetch("http://localhost:1998/",{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "html":url })
        });
    var responseJSON =  await response.json();
    var output = responseJSON;

    console.log(output[0])
    return output;
}
// chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
// async function(tabs){
//     document.getElementById("message").innerHTML = tabs[0].url;
//     tab = tabs[0].url;
//     getCurrentURL(tab);
// });

imgs = DOMtoString("PIC");

// async function getCurrentURL(tab){
//     // let imgs = await DOMtoString("PIC");
//     // let pkl = await DOMtoString(imgs)

//     // document.getElementById("message").innerHTML = imgs;
//     chrome.tabs.create({url: "file:///home/minami/Desktop/junction/extension/background.html"});
//     // getCurrentImg(imgs);
//     // console.log(imgs)
// }

// var x = addPic();
// console.log(x);