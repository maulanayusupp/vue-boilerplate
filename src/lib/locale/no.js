const localeObject = {
	name: 'no', // name String
	weekdays: 'Søndag_Mandag_Tirsdag_Onsdag_Torsdag_Fredag_Lørdag'.split('_'), // weekdays Array
	weekdaysShort: 'Søn_Man_Tir_Ons_Tor_Fre_Lør'.split('_'), // OPTIONAL, short weekdays Array, use first three letters if not provided
	weekdaysMin: 'Sø_Ma_Ti_On_To_Fr_Lø'.split('_'), // OPTIONAL, min weekdays Array, use first two letters if not provided
	weekStart: 1, // OPTIONAL, set the start of a week. If the value is 1, Monday will be the start of week instead of Sunday。
	months: 'Januar_Februar_Mars_April_Mai_Juni_Juli_August_September_Oktober_November_Desember'.split('_'), // months Array
	monthsShort: 'Jan_Feb_Mar_Apr_Mai_Jun_Jul_Aug_Sep_Okt_Nov_Des'.split('_'), // OPTIONAL, short months Array, use first three letters if not provided
	ordinal: n => `${n}º`, // ordinal Function (number) => return number + output
	formats: {
		// abbreviated format options allowing localization
		LTS: 'h:mm:ss A',
		LT: 'h:mm A',
		L: 'MM/DD/YYYY',
		LL: 'MMMM D, YYYY',
		LLL: 'MMMM D, YYYY h:mm A',
		LLLL: 'dddd, MMMM D, YYYY h:mm A',
		// lowercase/short, optional formats for localization
		l: 'D/M/YYYY',
		ll: 'D MMM, YYYY',
		lll: 'D MMM, YYYY h:mm A',
		llll: 'ddd, MMM D, YYYY h:mm A',
	},
	relativeTime: {
		// relative time format strings, keep %s %d as the same
		future: 'om %s', // e.g. in 2 hours, %s been replaced with 2hours
		past: '%s siden',
		s: 'noen få sekunder',
		m: 'ett minutt',
		mm: '%d minutter',
		h: 'en time',
		hh: '%d timer', // e.g. 2 hours, %d been replaced with 2
		d: 'en dag',
		dd: '%d dager',
		M: 'en måned',
		MM: '%d måneder',
		y: 'et år',
		yy: '%d år',
	},
	// eslint-disable-next-line
	meridiem: (hour, minute, isLowercase) => {
		// OPTIONAL, AM/PM
		return hour > 12 ? 'PM' : 'AM';
	},
};

export default localeObject;
