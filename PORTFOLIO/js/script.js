var animation = document.getElementById('animation'),
	animation2 = document.getElementById('animation2'),
		list = [
	    'un développeur web',
			'un développeur web mobile',
			'un jeune',
		],
		count_li = 0,
		count = 0,
		count_li2 = 0,
		count2 = 0,
		speed = 100;


	function write() {
		var type = list[count_li].substring(0, count);
		animation.textContent = type;
		count++;
		var time = setTimeout(write, speed);
		if(count > list[count_li].length) {
			count = 0;
			count_li++;
			clearTimeout(time);
			setTimeout(write, 2500);
		}

		if(count_li === list.length) {
			count_li = 0;
		}
	}
	function write2() {
		var type = list[count_li2].substring(0, count2);
		animation2.textContent = type;
		count2++;
		var time = setTimeout(write2, speed);
		if(count2 > list[count_li2].length) {
			count2 = 0;
			count_li2++;
			clearTimeout(time);
			setTimeout(write2, 2500);
		}

		if(count_li2 === list.length) {
			count_li2 = 0;
		}
	}


	write();
	write2();

jQuery(function($) {

	$('.feedly-list-item > a').each(function(){
		
		$(this).on('click', function(){      
			
			
		/*$('.on').removeClass('on'); -->  empeche le fait de fermer la liste*/
			
		if ( $(this).hasClass('on') ) {
			
			$(this).removeClass('on').addClass('off');
			
		} else {
			
			$(this).removeClass('off').addClass('on');
			
		} 
			
		return false;      
		  
		});
		
	});
		
})
