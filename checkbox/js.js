setInterval(function() {
	var inp = document.getElementById('chkbx');
	console.log(inp.checked);
	var editorExtensionId = "bacgekbohpglonljlggnohfnhockiaig";
	chrome.runtime.sendMessage(editorExtensionId, {message: "hello"},
		function(response) {
			// if (!response.success)
			// 	handleError(url);
			console.log(response);
		}
	);
}, 1000);
console.log(chrome);
console.log(chrome.runtime);