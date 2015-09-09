window.CalendarDD = window.CalendarDD || {};

CalendarDD.Helpers = {};

$(function () {

	CalendarNotes.Helpers.Date = {
		days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
		getDaysInMonth: function (month, year) {
			return new Date(year, month, 0).getDate();
		}
	};
});