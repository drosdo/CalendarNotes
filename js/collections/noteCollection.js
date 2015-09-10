window.CalendarDD = window.CalendarDD || {};

CalendarDD.Collections = {};

$(function () {

	CalendarDD.Collections.Notes = Backbone.Collection.extend({
		model: CalendarDD.Models.Note,
		url: "/notes",
		onDate : function (year, month, date) {
			return new CalendarDD.Collections.Notes(
				this.filter(function (model) {
					var d1 = model.date(),
						d2 = new Date(year, month, date);

					if(d1.getTime() == d2.getTime()){
						console.log(model)
						return model;
					}



				}
			));
		}
	});
});
