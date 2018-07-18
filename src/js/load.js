var App = App || {};

(function($) {

	App.Load = {

		init: function() {
			this.cacheSelectors();
			this.Events.loadData();
		},

		cacheSelectors: function() {
			this.list = $('.ul-list');
		},

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
							var data = httpRequest.response.data;
							var response = data.sort(function(a, b) {
								return Number(b.positive) - Number(a.positive);
							});

							var template = '';
								response.forEach(function(response){
									var img = response.picture;
									var totalLikes = Number(response.positive) + Number(response.negative);
									var positive = Math.round(Number(response.positive) / totalLikes * 100);
									var negative = Math.round(Number(response.negative) / totalLikes * 100);

									if (isNaN(positive)) {
										positive = 0;
									}

									if (isNaN(negative)) {
										negative = 0;
									}
									
									template += '<li class="li-item"><div class="circle-img"><img src='+img+'></div><div class="description"><h2 class="title">'+ response.name +'</h2><p class="text">' +decodeURIComponent(response.description)+'</p></div><div class="likes"><div class="likes-box"><div class="likes-box-header"><h3 class="title">Gostam</h3></div><div class="likes-box-status"><p class="text">'+positive+'%</p></div></div><div class="likes-box"><div class="likes-box-header"><h3 class="title">Não Gostam</h3></div><div class="likes-box-status"><p class="text">'+negative+'%</p></div></div></div>'
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