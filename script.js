//your JS code here. If required.
	function findElementLevel(id) {
			let level = 0;
			let element = document.getElementById(id);
			
			// Traverse up the DOM tree and count UL levels
			while (element.parentNode) {
				level++;
				element = element.parentNode;
			}

			return level;
		}

		// Call the function with the ID of the target element
		let level = findElementLevel('level');
		alert('The level of the element is: ' + level);

