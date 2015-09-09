App.Views.Month = Backbone.View.extend({
	template: JST.month,
	render: function () {
		this.el.innerHTML = this.template(this.model.toJSON());
		var weeks = this.model.get('weeks');
		for (var i = 0; i < weeks; i++) {
			this.$("tbody").append(new App.Views.WeekRow({week: i,
				model: this.model,
				collection: this.collection
			}).render().el);
		}
		return this;
	},
	events: {
		'click .prev': 'prev',
		'click .next': 'next'
	},
	prev: function () {
		var route = this.model.moment()
			.subtract(1, 'month').format('YYYY/MM');
		App.Router.navigate(route, { trigger: true });
	},
	next: function () {
		var route = this.model.moment()
			.add(1, 'month').format('YYYY/MM');
		App.Router.navigate(route, { trigger: true });
	}
});


App.Views.WeekRow = Backbone.View.extend({
	tagName: 'tr',
	initialize: function (options) {
		if (options) {
			this.week = options.week;
		}
	},
	render: function () {
		var month = this.model;
		if (this.week === 0) {
			var firstDay = month.moment().day();
			for (var i = 0; i < firstDay; i++) {
				this.$el.append("<td>");
			}
		}
		month.weekDates(this.week).forEach(function (date) {
			date = month.moment().date(date);
			this.$el.append(new App.Views.DayCell({
				model: date,
				collection: this.collection.onDate(date)
			}).render().el);
		}, this);
		return this;
	}
});

onDate: function (date) {
return new App.Models.Calendar(this.filter(function (model) {
return model.start().isSame(date, 'day');
}));
}