var newDiv = document.createElement("div");
var con = document.createTextNode("contentqm");
newDiv.appendChild(con);
newDiv.id = "divID";
const currentDiv = document.getElementById("test");
document.body.insertBefore(newDiv, currentDiv);
$("#test").text("it works");
document.title = "hello world";
console.log( document.documentElement.outerHTML );
console.log( document.documentElement.innerHTML );
var newParagraph0 = document.createElement("p");
var newSpan0 = document.createElement("span");
var newParagraph1 = document.createElement("p");
var newSpan1 = document.createElement("span");
newParagraph0.innerHTML = "Player X:";
newParagraph1.innerHTML = "Player Y:";
newSpan0.appendChild(document.createTextNode("0"));
newSpan1.appendChild(document.createTextNode("0"));
newSpan0.id = "playerX";
newSpan1.id = "playerY";
newParagraph0.appendChild(newSpan0);
newParagraph1.appendChild(newSpan1);
var insertafter = document.getElementById("pinf");
// console.log(insertafter);
// if (!insertafter)
// 	return ;
// document.body.appendChild(newParagraph0);
// document.body.appendChild(newParagraph1);
insertafter.appendChild(newParagraph0);
insertafter.appendChild(newParagraph1);
console.log( document.documentElement.outerHTML );

function buttonClick() {
	var time = new Date();
	console.log('.text');
	// con = document.createTextNode(time.getMinutes().toString() + ' ' + time.getSeconds().toString() + ' ' + time.getMilliseconds().toString());
	$("#divID").text(time.getMinutes().toString() + ':' + time.getSeconds().toString() + '.' + ("000" + time.getMilliseconds()).substr(-3,3))
	$("#playerX").text(time.getMinutes().toString() + ':' + time.getSeconds().toString() + '.' + ("000" + time.getMilliseconds()).substr(-3,3))
	$("#playerY").text(time.getMinutes().toString() + ':' + time.getSeconds().toString() + '.' + ("000" + time.getMilliseconds()).substr(-3,3))
	// con = document.createTextNode(time.getMilliseconds);
	// newDiv.replaceChild(con, newDiv.firstChild)
}