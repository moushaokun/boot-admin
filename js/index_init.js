(function(window,$){
	$(function(){
		//从后台加载对应数据，组装之后调用接口
		/*$.ajax({
			type:'post',
			url:'',
			data:{},
			success:function(data){
				var data = {};
				init(data);
			},
			error:function(data){
				
			}
		});*/
		//模拟调用
		mock_init();
	});
	
	function mock_init(){
		//模拟数据
		var data = {
			
		}; 
		init(data);
	}
	
	function init(data){
		
	}
	
	
	
	
})(window,jQuery);