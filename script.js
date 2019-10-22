let sampleTrackerTitle = document.getElementById("sample-tracker-title");
let sampleTrackerInformation = document.getElementById("sample-tracker-information");
let sampleTrackerToggle = document.getElementById("sample-tracker-toggle");
let sampleTrackerActive = false;

let cacheTitle = document.getElementById("cache-title");
let cacheInformation = document.getElementById("cache-information");
let cacheToggle = document.getElementById("cache-toggle");
let cacheActive = false;

let knittingTitle = document.getElementById("knitting-title");
let knittingInformation = document.getElementById("knitting-information");
let knittingToggle = document.getElementById("knitting-toggle");
let knittingActive = false;


function showInformation(project, toggle) {
	var height = 30;
	var interval = setInterval(frame, 5);
	function frame() {
		if (height == 100) {
			clearInterval(interval);
			
		} else {
			height++;
			project.style.height = height + "%";
		}
	}
	toggle.style.transform = "rotate(180deg)";
}

function hideInformation(project, toggle) {
	var height = 100;
	var interval = setInterval(frame, 5);
	function frame() {
		if (height == 30) {
			clearInterval(interval);
			
		} else {
			height--;
			project.style.height = height + "%";
		}
	}
	toggle.style.transform = "rotate(0deg)";
}

sampleTrackerTitle.addEventListener("click", function() {
	sampleTrackerActive = !sampleTrackerActive;
	sampleTrackerActive ? showInformation(sampleTrackerInformation, sampleTrackerToggle) : hideInformation(sampleTrackerInformation, sampleTrackerToggle);
})

cacheTitle.addEventListener("click", function() {
	cacheActive = !cacheActive;
	cacheActive ? showInformation(cacheInformation, cacheToggle) : hideInformation(cacheInformation, cacheToggle);
})

knittingTitle.addEventListener("click", function() {
	knittingActive = !knittingActive;
	knittingActive ? showInformation(knittingInformation, knittingToggle) : hideInformation(knittingInformation, knittingToggle);
})


