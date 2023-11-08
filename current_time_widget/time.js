function textClock() {
	/* SETTINGS */
	var useMilitaryTime = true;
	
	/* END SETTINGS */
	var newDate = new Date(),
		day = newDate.getDay(),
		hours = newDate.getHours(),
		minutes = newDate.getMinutes().toString(),
		seconds = newDate.getSeconds().toString();

	if (useMilitaryTime == false && (hours > 12 && hours !== 0 && hours !== 23)) {
		hours = hours - 12;
	}
	
	// edit inner HTML directly
	document.getElementById("time").innerHTML = hours + ":" + minutes.padStart(2, '0') + ":" + seconds.padStart(2, '0');
	setTimeout(textClock, 1000);
}

textClock();
