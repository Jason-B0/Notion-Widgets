function textClock() {
	/* SETTINGS */
	var useMilitaryTime = true;
	
	/* END SETTINGS */
	var newDate = new Date(),
		day = newDate.getDay(),
		hours = newDate.getHours(),
		minutes = newDate.getMinutes().toString(),
		seconds = newDate.getSeconds().toString();
		milliseconds = newDate.getMilliseconds().toString();

	if (useMilitaryTime == false && (hours > 12 && hours !== 0 && hours !== 23)) {
		hours = hours - 12;
	}
	
	// edit inner HTML directly
	document.getElementById("time").innerHTML = hours + ":" + minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0') + ":" + milliseconds.padStart(3, '0');
	
	setTimeout(textClock, 50);
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
