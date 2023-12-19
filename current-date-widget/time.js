function textClock() {
	/* SETTINGS */
	var useMilitaryTime = true;
	
	/* END SETTINGS */
	var dt = new Date(),
		year = dt.getFullYear(),
		month = dt.getMonth() + 1,
		date = dt.getDate(),
		day = dt.getDay()
	
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
