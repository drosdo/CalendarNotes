window.App = window.App || {};
App.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.main = options.main;
		this.calendar = options.calendar;
		App.Router.navigate = this.navigate.bind(this);
	},
	routes: {
		'': 'month',
		':year/:month': 'month'
	},
	month: function (year, month) {
		var c = this.clean(year, month);
		this.main.html(new App.Views.Month({
			collection: this.calendar,
			model: new App.Models.Month({ year: c[0], month: c[1] })
		}).render().el);
	}
});
