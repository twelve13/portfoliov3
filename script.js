// let sampleTrackerProject = document.getElementById("sample-tracker-project");
// let sampleTrackerTitle = document.getElementById("sample-tracker-title");
// let cacheProject = document.getElementById("cache-project");
// let cacheTitle = document.getElementById("cache-title");
// let knittingProject = document.getElementById("knitting-project");
// let knittingTitle = document.getElementById("knitting-title");

// function moveTitleLeft (project) {
// 	var pos = 0;
// 	var interval = setInterval(frame, 5);
// 	function frame() {
// 		if (pos == 50) {
// 			clearInterval(interval);
// 		} else {
// 			pos++;
// 			project.style.right = pos + "%";
// 		}
// 	}
// }

// function moveTitleRight (project) {
// 	var pos = 50;
// 	var interval = setInterval(frame, 5);
// 	function frame() {
// 		if (pos == 0) {
// 			clearInterval(interval);
// 		} else {
// 			pos--;
// 			project.style.right = pos + "%";
// 		}
// 	}
// }

// sampleTrackerProject.addEventListener("mouseenter", function() {
// 	moveTitleLeft(sampleTrackerTitle);
// })

// sampleTrackerProject.addEventListener("mouseleave", function() {
// 	moveTitleRight(sampleTrackerTitle);
// })

// cacheProject.addEventListener("mouseenter", function() {
// 	moveTitleLeft(cacheTitle);
// })

// cacheProject.addEventListener("mouseleave", function() {
// 	moveTitleRight(cacheTitle);
// })

// knittingProject.addEventListener("mouseenter", function() {
// 	moveTitleLeft(knittingTitle);
// })

// knittingProject.addEventListener("mouseleave", function() {
// 	moveTitleRight(knittingTitle);
// })


let sampleTrackerTitle = document.getElementById("sample-tracker-title");
let sampleTrackerInformation = document.getElementById("sample-tracker-information");

let cacheTitle = document.getElementById("cache-title");
let cacheInformation = document.getElementById("cache-information");

let knittingTitle = document.getElementById("knitting-title");
let knittingInformation = document.getElementById("knitting-information");




function showInformation(project) {
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
}

sampleTrackerTitle.addEventListener("click", function() {
	showInformation(sampleTrackerInformation);
})

cacheTitle.addEventListener("click", function() {
	showInformation(cacheInformation);
})

knittingTitle.addEventListener("click", function() {
	showInformation(knittingInformation);
})


