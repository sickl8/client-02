

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
	var efmouse = document.getElementById("fmouse");
	if (erespawn) {
		chrome.storage.sync.get("respawn", (data) => {
			document.getElementById("respawn").checked = data.respawn;
		});
		erespawn.addEventListener('change', function() {
			if (this.checked) {
				chrome.storage.sync.set({"respawn": true});
				// fspawn = true;
			}
			else {
				chrome.storage.sync.set({"respawn": false});
				// fspawn = false;
			}
		})
	}
	if (emove) {
		chrome.storage.sync.get("move", (data) => {
			document.getElementById("move").checked = data.move;
		});
		emove.addEventListener('change', function() {
			if (this.checked) {
				chrome.storage.sync.set({"move": true});
				// fmove = true;
			}
			else {
				chrome.storage.sync.set({"move": false});
				// fmove = false;
			}
		})
	}
	if (efmouse) {
		chrome.storage.sync.get("fmouse", (data) => {
			document.getElementById("fmouse").checked = data.fmouse;
		});
		// emove.checked = fmove;
		efmouse.addEventListener('change', function() {
			if (this.checked) {
				chrome.storage.sync.set({"fmouse": true});
				// fmove = true;
			}
			else {
				chrome.storage.sync.set({"fmouse": false});
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