// let color = '#ffff00';

let id = 0;

let version = "3.4.2";

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
		if (details.url == "https://gota.io/web/gota.js?v=" + version) {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("gota/rp_m" + version + ".js") }
		}
	}
	else if (btn == "B")
	{
		if (details.url == "https://gota.io/web/gota.js?v=" + version) {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("gota/rp_b" + version + ".js") }
			// return { redirectUrl: chrome.extension.getURL("gota/rp3.4.2.console.js") }
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
		chrome.storage.sync.get(["move", "fmouse", "respawn"], (data) => {
			sendResponse({"fmouse": data.fmouse, "move": data.move, "respawn": data.respawn});
		});
		return true;
});

console.log('called');

