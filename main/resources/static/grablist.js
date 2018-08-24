var btn = document.getElementById("load");
var swapiContainer = document.getElementById("science");

btn.addEventListener("click", function() {
	var request = new XMLHttpRequest();
	request.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");

	
	request.onload = function() {
	
		// console.log(request.responseText);
		var data = JSON.parse(request.responseText);
		console.log(data);
		renderHTML(data);	
	};
		request.send();
});		
		function renderHTML(data){
			for (var i = 0; i < data.complete.length; i++) {
			var line = "<p>" + data.complete[i].firstName + " " + data.complete[i].lastName
			+ " " + data.complete[i].innovation + " " + data.complete[i].year + "</p>";
			swapiContainer.insertAdjacentHTML("beforeend", line);
			}
		};