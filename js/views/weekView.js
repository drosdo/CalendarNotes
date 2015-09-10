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
				console.log(month.get('month'))
				for (var i = 0; i < firstDay; i++) {


					this.$el.append(
						new CalendarDD.Views.Day({
							date: prevMonthDays[i],
							className:'col-md-1-7 prev-month',
							collection: this.collection.onDate(month.get('year'), month.get('month'), prevMonthDays[i])
						}).render().el);
				}
			}
			month.getWeekDates(this.week).forEach(function (date) {
				var dateObj = this.model.getDateObj(date);
				this.$el.append(new CalendarDD.Views.Day({
					date: date,
					className:'col-md-1-7',
					collection: this.collection.onDate(month.get('year'), month.get('month'), date)
				}).render().el);
			}, this);
			return this;
		}
	})
});


