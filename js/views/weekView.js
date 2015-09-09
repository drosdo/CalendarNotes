window.CalendarDD = window.CalendarDD || {};

CalendarDD.Views = {};

$(function () {
	CalendarDD.Views.Week = Backbone.View.extend({
		className : 'row days',
		initialize: function (options) {
			if (options) {
				this.week = options.week;
			}
		},
		render: function () {
			var month = this.model;
			if (this.week === 0) {
				var firstDay = month.getStartDay();
				var prevMonthDays = month.getPrevMonthDays();
				for (var i = 0; i < firstDay; i++) {
					var dateObj = this.model.getDateObj(prevMonthDays[i]);

					this.$el.append(
						new CalendarDD.Views.Day({
							date: prevMonthDays[i],
							className:'col-md-1-7 prev-month',
							collection: this.collection.onDate(date)
						}).render().el);
				}
			}
			month.getWeekDates(this.week).forEach(function (date) {
				this.$el.append(new CalendarDD.Views.Day({
					date: date,
					className:'col-md-1-7'
				}).render().el);
			}, this);
			return this;
		}
	})
});


