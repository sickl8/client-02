
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
	var erespawn = document.getElementById("respawn");
	var emove = document.getElementById("move");
	var exId = chrome.runtime.id;
	if (erespawn) {
		// erespawn.checked = fspawn;
		erespawn.addEventListener('change', function() {
			if (this.checked) {
				console.log('checked respawn');
				chrome.runtime.sendMessage(exId, {type: "checkbox", respawn: true}, function(response) {});
				// chrome.storage.sync.set({"respawn": true});
				// fspawn = true;
			}
			else {
				console.log('unchecked respawn');
				chrome.runtime.sendMessage(exId, {type: "checkbox", respawn: false}, function(response) {});
				// chrome.storage.sync.set({"respawn": false});
				// fspawn = false;
			}
		})
	}
	if (emove) {
		// emove.checked = fmove;
		emove.addEventListener('change', function() {
			if (this.checked) {
				console.log('checked move');
				chrome.runtime.sendMessage(exId, {type: "checkbox", move: true}, function(response) {});
				// chrome.storage.sync.set({"move": true});
				// fmove = true;
			}
			else {
				chrome.runtime.sendMessage(exId, {type: "checkbox", move: false}, function(response) {});
				console.log('unchecked move');
				// chrome.storage.sync.set({"move": false});
				// fmove = false;
			}
		})
	}
});

// chrome.storage.onChanged.addListener(function(changes, area) {
// 	if (area == "sync" && "respawn" in changes) {
// 		fspawn = changes.respawn.newValue;
// 	}
// 	if (area == "sync" && "move" in changes) {
// 		fmove = changes.move.newValue;
// 	}
// });


// chrome.windows.update(window.id, {focused:true})