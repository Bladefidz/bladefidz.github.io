/** Active Navbar Menu Item Switcher
 * 
 * Goal: Activate navbar menu item which have id match with last url segment. 
 */

// Initialize the current url
window.onload=function() {
	var pathUri = window.location.pathname;

	console.log("path uri: "+pathUri); // Checking got the pathname
	var path = pathUri.split("/");

	console.log("last uri: "+path[path.length-1]); // Checking got the last url segment
	setAtcive(path[path.length-1]);
}

// Activate menu item by last url segment
function setAtcive(id) {
	var target = document.getElementById(id); // Filter menu item id that match with last url segment
	if (target !== null && target != "home") {
		target.classList.add("active"); // Activate matched menu item
	} else {
		document.getElementById("home").classList.add("active"); // Else, activate "Home" menu
	}
}

// Show by tag
function showPostbyTag(element, tag) {
	// console.log(tag);

	boxes = document.getElementsByClassName('img-box');

	if (tag === '') {
		for (var i = 0; i < boxes.length; i++) {
			boxes[i].style.display = "block";
		}
		return;
	}

	for (var i = 0; i < boxes.length; i++) {
		tags = boxes[i].childNodes[3].childNodes[5].textContent.trim()
		tags = tags.split(" ");

		// console.log(tags);

		let matched = false;
		for (var j = 0; j < tags.length; j++) {
			if (tags[j] == tag) {
				matched = true;
				break;
			}
		}

		if (matched) {
			boxes[i].style.display = "block";
		} else {
			boxes[i].style.display = "none";
		}
	}
}