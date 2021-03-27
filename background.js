// let color = '#ffff00';

let id = 0;

let btn;

chrome.runtime.onInstalled.addListener
(
	() => {
		chrome.storage.sync.set({ "LBC" : null });
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

// async function getFromStorage(key) {
//     return new Promise((resolve, reject) => {
//         chrome.storage.sync.get(key, resolve);
//     })
//         .then(result => {
//             if (key == null) return result;
//             else return result[key];
//         });
// }

function redirect_to_replaced(details) {
	var rg = new RegExp('/gota.io/');
	if (rg.test(details.url))
		console.log('url = ' + details.url);
	console.log('please work btn = ' + btn);
	if (btn == "M")
	{
		if (details.url == "https://gota.io/web/gota.js?v=3.3.7") {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("replaced_main.js") }
		}
	}
	else if (btn == "B")
	{
		if (details.url == "https://gota.io/web/gota.js?v=3.3.7") {
			chrome.storage.sync.set({"LBC": null});
			console.log('test');
			console.log('test ' + id);
			id++;
			return { redirectUrl: chrome.extension.getURL("replaced_bots.js") }
		}
	}
}

chrome.webRequest.onBeforeRequest.addListener(
	redirect_to_replaced,
	{urls: ["*://gota.io/*.js*"]},
	["blocking"]
);

chrome.storage.onChanged.addListener(function(changes, area) {
    if (area == "sync" && "LBC" in changes) {
        btn = changes.LBC.newValue;
    }
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