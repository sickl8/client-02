// function spawn_main() {
// 	// chrome.storage.sync.set({"LBC": "M"});
// 	// window.open("https://gota.io/web/");
// }

// function spawn_bots() {
// 	// chrome.storage.sync.set({"LBC": "B"});
// 	// window.open("https://gota.io/web/");
// }

window.addEventListener('DOMContentLoaded', function() {
	// your button here
	var link0 = document.getElementById("spwn-main");
	// onClick's logic below:
	if (!link0)
		return ;
	link0.addEventListener('click', function() {
		chrome.storage.sync.set({"LBC": "M"});
		var newURL0 = "https://gota.io/web/";
		chrome.tabs.create({ url: newURL0 });
	});
	
	var link1 = document.getElementById('spwn-bots');
	// onClick's logic below:
	if (!link1)
		return ;
	link1.addEventListener('click', function() {
		chrome.storage.sync.set({"LBC": "B"});
		var newURL1 = "https://gota.io/web/";
		chrome.windows.getCurrent(
			function(window){
				chrome.windows.create({ url: newURL1, type: 'popup'});
				chrome.windows.update(window.id, {focused:true});
			}
		);
	});
});

// chrome.windows.update(window.id, {focused:true})