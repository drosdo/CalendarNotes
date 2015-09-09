window.CalendarDD = window.CalendarDD || {};

CalendarDD.Collections = {};

$(function () {

	CalendarDD.Collections.Notes = Backbone.Collection.extend({
		model: CalendarDD.Models.Note,
		url: "/notes",
		onDate : function (date) {
			return new CalendarDD.Collections.Notes(
				this.filter(function (model) {
					console.log(model.date())

				}
			));
		}
	});
});
