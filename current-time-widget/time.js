/* SETTINGS */
const USE_MILITARY_TIME = true;

function getZuluTime ()
{
	let newDate = new Date(),
		hours = newDate.getUTCHours(),
		minutes = newDate.getUTCMinutes().toString(),
		seconds = newDate.getUTCSeconds().toString();
		milliseconds = newDate.getUTCMilliseconds().toString();
	
	// edit inner HTML directly	
	document.getElementById("zulu-time-txt").innerHTML =
		hours.toString().padStart(2, '0')
		+ ":"
		+ minutes.padStart(2, '0')
		+ ":"
		+ seconds.padStart(2, '0')
		+ ":"
		+ milliseconds.padStart(3, '0');
	
	setTimeout(getZuluTime, 50);	
}

function getLocalTime ()
{
	let newDate = new Date(),
		day = newDate.getDay(),
		hours = newDate.getHours(),
		minutes = newDate.getMinutes().toString(),
		seconds = newDate.getSeconds().toString();
		milliseconds = newDate.getMilliseconds().toString();

	if ( USE_MILITARY_TIME == false && (hours > 12 && hours !== 0 && hours !== 23)) {
		hours = hours - 12;
	}
	
	// edit inner HTML directly	
	document.getElementById("local-time-txt").innerHTML =
		hours.toString().padStart(2, '0')
		+ ":"
		+ minutes.padStart(2, '0')
		+ ":"
		+ seconds.padStart(2, '0')
		+ ":"
		+ milliseconds.padStart(3, '0');
	
	setTimeout( getLocalTime, 50);
}

function displayTimezone ()
{
	let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
	let offset = new Date().getTimezoneOffset() / -60;
	
	timezone = timezone.split( "/" ).pop().replace( "_", " " );
	timezone = `${ timezone } (UTC${ offset >= 0 ? '+' : '' }${ offset })`;
	
	document.getElementById("timezone-txt").innerHTML = timezone;
}

displayTimezone();
getLocalTime();
getZuluTime()

