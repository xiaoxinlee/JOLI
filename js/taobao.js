$(function(){
	var inp = $('#inp');
	var sub = $('#sub');
	var uls = $('#uls');
	inp.keyup(function(){
		var txt = inp.val();
		$.ajax({
			type:"get",
			url:"https://suggest.taobao.com/sug?code=utf-8&q="+txt,
			dataType:'jsonp',
			success:function(data){
				uls.empty();
				var res = data.result
				$.each(res, function(i,v) {
					var lis = $('<li></li>')
					var lk = $('<a href="https://s.taobao.com/search?q='+v[0]+'"></a>');
					lk.html(v[0]);
					lis.append(lk);
					uls.append(lis);
				});
			}
		});
	})
	sub.click(function(){
		var txt = inp.val();
		window.location.href = "https://s.taobao.com/search?q="+txt;
	})
	$(document).click(function(){
		uls.empty();
	})
	inp.click(function(e){
		e.stopPropagation;
		inp.keyup();
	})
})
