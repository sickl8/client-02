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
	var checkbox = document.getElementById("chkbx");

	if (checkbox) {
		checkbox.addEventListener('change', function() {
			if (this.checked)
				chrome.storage.sync.set({"checked": true});
			else
				chrome.storage.sync.set({"checked": false});
		})
	}
});


chrome.storage.onChanged.addListener(function(changes, area) {
	if (area == "sync" && "checked" in changes) {
		console.log('called checked changed to ' + changes.checked.newValue);
		chrome.runtime.sendMessage();
		// var coms_channel = new BroadcastChannel("gotaXY");
		// var message = {type: "checked", data: changes.checked.newValue};
		// coms_channel.postMessage(message);
	}
});


// chrome.windows.update(window.id, {focused:true})