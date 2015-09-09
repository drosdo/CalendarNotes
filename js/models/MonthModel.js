window.CalendarDD = window.CalendarDD || {};

CalendarDD.Models = {};

$(function () {

	CalendarDD.Models.Month = Backbone.Model.extend({

		defaults: {
			year: "",
			month: "",
			day: "",
			dayNames: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
			monthsNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		},
		initialize: function (options) {
			this.set('name', this.getName());
			this.set('days', this.getDaysInMonth());
			this.set('weeks', this.getWeeks());
			this.set('start', this.getStartDay());
		},
		getName: function () {
			return this.get('monthsNames')[this.get('month')-1];
		},
		getWeeks: function () {
			return Math.ceil((this.get('days') + this.getStartDay()) / 7);
		},
		getDaysInMonth: function () {
			return new Date(this.get('year'), this.get('month'), 0).getDate();
		},
		getDate: function (date){
			return new Date(this.get('year'), this.get('month'), date).getDate();
		},
		getDateObj: function (date){
			return new Date(this.get('year'), this.get('month'), date);
		},
		getPrevMonthDays: function () {
			var days =  new Date(this.get('year'), this.get('month') - 1, 0).getDate(),
				prevDaysLength = days - this.getStartDay()+1,
				prevDays = [];
			for (var i = prevDaysLength; i <= days; i++) {
				prevDays.push(i);
			}
			return prevDays;
		},
		getNextMonthDays : function () {
			var days =  new Date(this.get('year'), this.get('month'), 0).getDate(),
				firstDayNext = new Date(this.get('year'), this.get('month'), 1).getUTCDay(),
				nextDays = [];
			for (var i = lastDaysLength; i <= days; i++) {
				nextDays.push(i);
			}
			return nextDays;
		},
		getStartDay : function(){
			return new Date(this.get('year'), this.get('month') - 1, 1).getUTCDay();
		},
		getWeekDates: function (weekNumber) {
			var days = 7,
				dates = [],
				start = this.get('start');
			if (weekNumber === 0) {
				//first week
				days -= start;
				start = 0;
			}
			var date = weekNumber * 7 + 1 - start,
				end = date + days;
			 for (; date < end; date++) {
				 if (date > this.get('days')) continue;
				 dates.push(date);
			 }
			 return dates;

		}
	});

});