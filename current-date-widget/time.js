function textClock() {
	/* SETTINGS */
	var useMilitaryTime = true;
	
	/* END SETTINGS */
	var newDate = new Date(),
		year = newDate.getFullYear(),
		month = newDate.getMonth(),
		date = newDate.getDate(),
		day = newDate.getDay()
	
	switch (day) {
		case 0:
			day = "Sunday";
			break;
		case 1:
			day = "Monday";
			break;
		case 2:
			day = "Tuesday";
			break;
		case 3:
			day = "Wednesday";
			break;
		case 4:
			day = "Thursday";
			break;
		case 5:
			day = "Friday";
			break;
		case 6:
			day = "Saturday";
			break;
		default:
			break;
	}
	
	// edit inner HTML directly
	document.getElementById("time").innerHTML = year.toString() + "-" + month.toString() + "-" + date.toString() + "\t\t" + day.toString();
	setTimeout(textClock, 1000);
}

textClock();

// DYNAMIC THEME SETTINGS BASED ON OS PREFERENCE
// https://github.com/anthonytedja/notion/blob/main/time/script.js

function light() {
	console.log("Fired");
	document.documentElement.setAttribute('time-data-theme', 'light');
}

function dark() {
		console.log("Fired");

	document.documentElement.setAttribute('time-data-theme', 'dark');
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
	dark();
} else {
	light();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
	if (event.matches) {
		dark();
	} else {
		light();
	}
});
