window.CalendarDD = window.CalendarDD || {};

CalendarDD.Models = {};

$(function () {

	CalendarDD.Models.Note = Backbone.Model.extend({
		defaults: {
			date: '',
			title: '',
			body:''
		},
		initialize: function(options) {
			this.set('date',options.date);
			this.set('title',options.title);
			this.set('body',options.body);
		},
		date: function () {
			return new Date(this.get('date'));
		}
	});



});