var App = App || {};

(function($) {

	App.Load = {

		init: function() {
			this.cacheSelectors();
			this.Events.loadData();
			// this.bindEvents();
		},

		cacheSelectors: function() {
			this.list = $('.ul-list');
		},

		// bindEvents: function bindEvents() {

		// },

		Events: {

			loadData: function(){
				var self = App.Load;
				var url = "json/fazenda.json";

				var httpRequest = new XMLHttpRequest();
				httpRequest.open("GET", url);
				httpRequest.responseType = "json";
				httpRequest.addEventListener("readystatechange", function () {
					if (httpRequest.readyState == 4){
						if (httpRequest.status == 200){
							var response = httpRequest.response.data;
							var template = '';

								response.forEach(function(response){
									var img = response.picture;
									template += '<li class="li-item"><div class="circle-img"><img src='+img+'></div><div class="description"><h2 class="title">'+ response.name +'</h2><p class="text">' +decodeURIComponent(response.description)+'</p></div></li>';
								});
								self.list.append(template);
						} else {
							return alert('Não foi possível carregar as informações');  
						}
					}
				});

				httpRequest.send();

			}
		}

	};

})(jQuery);