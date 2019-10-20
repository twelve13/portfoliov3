let sampleTrackerProject = document.getElementById("sample-tracker-project");
let sampleTrackerTitle = document.getElementById("sample-tracker-title");
let cacheProject = document.getElementById("cache-project");
let cacheTitle = document.getElementById("cache-title");
let knittingProject = document.getElementById("knitting-project");
let knittingTitle = document.getElementById("knitting-title");

function moveTitleLeft (project) {
	var pos = 0;
	var interval = setInterval(frame, 5);
	function frame() {
		if (pos == 50) {
			clearInterval(interval);
		} else {
			pos++;
			project.style.right = pos + "%";
		}
	}
}

function moveTitleRight (project) {
	var pos = 50;
	var interval = setInterval(frame, 5);
	function frame() {
		if (pos == 0) {
			clearInterval(interval);
		} else {
			pos--;
			project.style.right = pos + "%";
		}
	}
}

sampleTrackerProject.addEventListener("mouseenter", function() {
	moveTitleLeft(sampleTrackerTitle);
})

sampleTrackerProject.addEventListener("mouseleave", function() {
	moveTitleRight(sampleTrackerTitle);
})

cacheProject.addEventListener("mouseenter", function() {
	moveTitleLeft(cacheTitle);
})

cacheProject.addEventListener("mouseleave", function() {
	moveTitleRight(cacheTitle);
})

knittingProject.addEventListener("mouseenter", function() {
	moveTitleLeft(knittingTitle);
})

knittingProject.addEventListener("mouseleave", function() {
	moveTitleRight(knittingTitle);
})
