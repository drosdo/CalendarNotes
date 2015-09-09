/**
 * Created by drosdo on 26.08.15.
 */
/*models*/

window.App = window.App || {};
App.Models = {};

App.Models.Event = Backbone.Model.extend({});

/*collections*/

App.Models.Calendar = Backbone.Collection.extend({
	model: App.Models.Event,
	url: "/events",
});

App.Models.Month = Backbone.Model.extend({
	defaults: {
		year : moment().year(),
		month: moment().month()
	},
	initialize: function (options) {
		var m = this.moment();
		this.set('name', m.format('MMMM'));
		this.set('days', m.daysInMonth());
		this.set('weeks', Math.ceil((this.get('days') + m.day()) / 7));
	},
	moment: function () {
		return moment([this.get('year'), this.get('month')]);
	},
	weekDates: function (num) {
		var days = 7,
			dates = [],
			start = this.moment().day();
		if (num === 0) {
			days -= start;
			start = 0;
		}
		var date = num * 7 + 1 - start,
			end = date + days;
		for (; date < end; date++) {
			if (date > this.get('days')) continue;
			dates.push(date);
		}
		return dates;
	}
});