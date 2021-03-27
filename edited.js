
(function() {
    "use strict";

	// const event = new Event('mousemove');
	// event.clientX = 2;
	// event.clientY = 2;
    document.onmousemove = interseptMouseMove;
	// document.dispatchEvent(event);
	console.log(document.onmousemove);
	console.log(typeof document.onmousemove);
	function interseptMouseMove(evento) {
		const event1 = new Event(evento);
		// event1 = evento;
		// event1.clientX = evento.pageX - evento.clientX;
		// event1.clientY = evento.pageY - evento.clientY;
		event1.clientX = window.innerWidth - evento.clientX;
		event1.clientY = window.innerHeight - evento.clientY;
		console.log('Pxy = (' + evento.pageX + ', ' + evento.pageY + ')');
		console.log('Cxy = (' + evento.clientX + ', ' + evento.clientY + ')');
		handleMouseMove(event1);
	}
    function handleMouseMove(event) {
      var dot, eventDoc, doc, body, pageX, pageY;
      
      event = event || window.event; // IE-ism
      
      // If pageX/Y aren't available and clientX/Y
      // are, calculate pageX/Y - logic taken from jQuery
			// Calculate pageX/Y if missing and clientX/Y available
      if (event.pageX == null && event.clientX != null) {
		
        eventDoc = (event.target && event.target.ownerDocument) || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = event.clientX +
          (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
          (doc && doc.clientLeft || body && body.clientLeft || 0);
        event.pageY = event.clientY +
          (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
          (doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add a dot to follow the cursor
      dot = document.createElement('div');
      dot.className = "dot";
      dot.style.left = event.pageX + "px";
      dot.style.top = event.pageY + "px";
      document.body.appendChild(dot);
    }
  })();