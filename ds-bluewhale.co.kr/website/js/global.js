var ajaxbtn = {
	init : function(){
		if($('._ajax-btn').length > 0){
			this.action();
		}
	},
	action : function(){
		var spd = 500;

		$(document).on('click','._ajax-btn',function(){
			var href = $(this).attr('href');
			var idx = $(this).data('idx');
			var type = $(this).data('type');

			if(type == undefined){
				type = 'GET';
			}

			$.ajax({
				type: type,
				url: href,
				data : idx,
				success : function(data) {
					$('body').find('._pop-ajax').remove().end().append(data).find('._pop-ajax').fadeIn(spd);
				}
			});
			return false;
		});

		$(document).on('click','._pop-ajax ._bg, ._pop-ajax ._close',function(){
			$('._pop-ajax').fadeOut(spd,function(){$(this).remove()});
			return false;
		});

	}
}


var gnb = {
	init : function(){
		this.action();
	},
	action : function(){
		var a = $('#header');
		var gnb = a.find('.gnb');
		var pos = [75,243];
		var spd = 500;
		var ani = 'easeInOutExpo';

		gnb.on('mouseenter',function(){
			a.animate({'height':pos[1]},spd,ani);
		});
		a.on('mouseleave',function(){
			a.stop(true).animate({'height':pos[0]},spd,ani);
		});
	}
}



var premium = {
	init : function(){
		this.action();
	},
	action : function(){
		var roll = $('#premium .roll');
		roll.bxSlider({
			auto: true,
			pager: false,
			useCSS: false,
			pause: 7000,
			speed: 700,
			touchEnabled: false,
			stopAutoOnClick: true,
			easing: 'easeInOutExpo'
		});
	}
}



var vis = {
	init : function(){
		this.action();
	},
	action : function(){
		var a = $('#vis');
		var roll = a.find('.roll');
		var visNum = 0;

		function visAction(num){
			setTimeout(function(){
				a.find('.vis').eq(num).addClass('active').siblings().removeClass('active');
			},500);
		}
		visAction(visNum);

		var slider = roll.bxSlider({
			mode: 'fade',
			auto: true,
			controls: false,
			useCSS: false,
			pause: 7000,
			speed: 1000,
			touchEnabled: false,
			stopAutoOnClick: true,
			easing: 'easeInOutExpo',
			onSlideBefore: function(){
				visNum = slider.getCurrentSlide();
				visAction(visNum);
			}
		});
	}
}




var space = {
	init : function(){
		this.action();
	},
	action : function(){
		var a = $('#space');
		var roll = a.find('.roll');
		var spaceNum = 4;
		
		function spaceAction(num){
			a.attr('class','action'+num+'');
		}
		setTimeout(function(){
			spaceAction(spaceNum);
		},500);

		var spaceSlider = roll.bxSlider({
			auto: true,
			pager: false,
			useCSS: false,
			pause: 7000,
			speed: 500,
			slideWidth: 900,
			touchEnabled: false,
			stopAutoOnClick: true,
			moveSlides: 1,
			minSlides: 3,
			maxSlides: 3,
			startSlide: 4,
			slideMargin: 200,
			easing: 'easeInOutExpo',
			onSlideBefore: function(){
				spaceNum = spaceSlider.getCurrentSlide();
				spaceAction(spaceNum);
			}
		});
	}
}

$(document).ready(function(){
	gnb.init();
	ajaxbtn.init();
});