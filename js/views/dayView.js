
window.CalendarDD = window.CalendarDD || {};

CalendarDD.Views = {};

$(function () {
	CalendarDD.Views.Day = Backbone.View.extend({

		template: _.template($('#tmpl_day').html()),
		/*events: {
			'click': 'switchToDayView'
		},*/
		initialize: function (options) {
			this.date = options.date
		},
		render: function () {
			this.$el.html( this.template( {
				date: this.date
			}));
			return this;
		}

	});

	/*ДНЮ НАДО ЗНАТЬ СВОЮ ДАТУ. Не только класс прошлого месяца или след*/


});
