// let color = '#ffff00';

let id = 0;

let btn;

chrome.runtime.onInstalled.addListener
(
	() => {
		chrome.storage.sync.set({ "LBC" : null });
		chrome.storage.sync.set({ "respawn" : true });
		chrome.storage.sync.set({ "move" : true });
		chrome.storage.sync.set({ "fmouse" : false });
		chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
			chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [new chrome.declarativeContent.PageStateMatcher({
				pageUrl: {urlMatches: "<all_urls>"},
			})
			],
				actions: [new chrome.declarativeContent.ShowPageAction()]
			}]);
		});
	}
);

chrome.storage.onChanged.addListener(function(changes, area) {
	if (area == "sync" && "LBC" in changes) {
		btn = changes.LBC.newValue;
	}
});

function redirect_to_replaced(details) {
	var rg = new RegExp('/gota.io/');
	if (rg.test(details.url))
		console.log('url = ' + details.url);
	console.log('please work btn = ' + btn);
	if (btn == "M")
	{
		if (details.url == "https://gota.io/web/gota.js?v=3.3.7.1") {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("rp_m3.3.7.1.js") }
		}
	}
	else if (btn == "B")
	{
		if (details.url == "https://gota.io/web/gota.js?v=3.3.7.1") {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("rp_b3.3.7.1.js") }
		}
	}
}

chrome.webRequest.onBeforeRequest.addListener(
	redirect_to_replaced,
	{urls: ["*://gota.io/*.js*"]},
	["blocking"]
);

chrome.runtime.onMessageExternal.addListener(
	function(request, sender, sendResponse) {
		console.log("request");
		console.log(request);
		console.log("sender");
		console.log(sender);
		console.log("sendResponse");
		console.log(sendResponse);
		chrome.storage.sync.get(["move", "fmouse", "respawn"], (data) => {
			sendResponse({"fmouse": data.fmouse, "move": data.move, "respawn": data.respawn});
		});
		// await new Promise(r => setTimeout(r, 100));
		// sendResponse({"fmouse": vfmouse, "move": vmove, "respawn": vrespawn});
		return true;
});
// chrome.webRequest.onBeforeRequest.addListener(
// 		function(details) {
// 			if( details.url == "http://127.0.0.1:5500/js-mouse/files/js.js" ) {
// 				console.log('waaaaaaaaaaaa!!!');
// 				return {redirectUrl: "http://127.0.0.1:5500/js-mouse/files/edited.js" };
// 			}
// 		},
// 		{urls: ["*://127.0.0.1/*.js"]},
// 		["blocking"]);

console.log('called');

