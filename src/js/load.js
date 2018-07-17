var App = App || {};

(function($) {

	App.Load = {

		init: function init() {
			this.cacheSelectors();
			this.Events.loadData();
			// this.bindEvents();
			// this.init = function(){
			// 	_this.loadData(_this.loadForm);
			// }
		},

		cacheSelectors: function cacheSelectors() {
			// this.list = $('.ul-list');
			// this.list_item = this.list.find('.li-list');
			// this.data = [];
		},

		// bindEvents: function bindEvents() {

		// },

		Events: {

			loadData: function loadData(fun){
				var self = App.Load;
				var data = [];

				var jqxhr = $.getJSON(data_json)
				.done(function(data) {
					data = data;
					fun();
				})
				.fail(function() {
					alert('Ocorreu um erro ao carregar as informações');
				});
			}

		},

	};

})(jQuery);