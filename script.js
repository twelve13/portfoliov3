let sampleTrackerProject = document.getElementById("sample-tracker-project");
let sampleTrackerBlurb = document.getElementById("sample-tracker-blurb");

sampleTrackerProject.addEventListener("mouseover", function() {
	sampleTrackerBlurb.classList.add("active")
})

sampleTrackerProject.addEventListener("mouseleave", function() {
	sampleTrackerBlurb.classList.remove("active")
})
