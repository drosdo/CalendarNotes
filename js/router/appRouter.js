window.CalendarDD = window.CalendarDD || {};

CalendarDD.Router = {};

$(function () {

	CalendarDD.Router = Backbone.Router.extend({
		initialize: function (options) {

			this.main = options.main;
			this.notes = options.notes;

			CalendarDD.Router.navigate = this.navigate.bind(this);
			this.month(2014,0)
		},
		routes: {
			'': 'month',
			':year/:month': 'month'
		},
		month: function (year, month) {
			this.main.html(new CalendarDD.Views.Month({
				model: new CalendarDD.Models.Month({ year: year, month: month }),
				collection : this.notes
			}).render().el);
		}
	});
	var app = new CalendarDD.Router({
		main: $('.main'),
		notes: new CalendarDD.Collections.Notes([
				{ "title": "note one", "date": "2014 01 06", "body": "asdasdasdasdasd asdsa as"},
				{ "title": "note two", "date": "2014 01 07", "body": "x`zx asdsa as"},
				{ "title": "note three", "date": "2014 01 14", "body": "x`zx asdsa as"}
			])
	}).navigate()
});
