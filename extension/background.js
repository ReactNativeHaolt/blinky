chrome.contextMenus.create({

title: "Blinky",
contexts:["image"],
onclick: myFunction

});

async function myFunction(selected){
	let url = await selected.srcUrl
	chrome.tabs.create({url: "file:///home/minami/Desktop/junction/blinky/material-kit-html-v2.0.4/material-kit-html-v2.0.4/examples/second_page.html"});
}

