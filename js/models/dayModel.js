window.CalendarDD = window.CalendarDD || {};

CalendarDD.Models = {};

$(function () {
	CalendarNotes.Models.Day = Backbone.Model.extend({
		defaults: {
			note: null,
			number: null
		}
	});
});
