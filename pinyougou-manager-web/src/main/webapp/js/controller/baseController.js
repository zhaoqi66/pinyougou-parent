app.controller('baseController' ,function($scope){			
   
	//重新加载列表 数据
	$scope.reloadList=function(){
		 //切换页码  
	$scope.findPage( $scope.paginationConf.currentPage, $scope.paginationConf.itemsPerPage);
	}
	//分页控件配置 
	$scope.paginationConf = {
			 currentPage: 1,
			 totalItems: 10,
			 itemsPerPage: 10,
			 perPageOptions: [10, 20, 30, 40, 50],
			 onChange: function(){
			        	 $scope.reloadList();//重新加载
			 }
	}; 
	//分页
	$scope.findPage=function(page,rows){	
		$http.get('../brand/findPage.do?page='+page+'&size='+rows).success(
				function(response){
					$scope.list=response.rows;	
					$scope.paginationConf.totalItems=response.total;//更新总记录数
				}			
		);
	}
	
	
	//提取json字符串数据中某个属性，返回拼接字符串 逗号分隔
	$scope.jsonToString=function(jsonString,key){
		var json=JSON.parse(jsonString);//将json字符串转换为json对象
		var value="";
		for(var i=0;i<json.length;i++){		
			if(i>0){
				value+=","
			}
			value+=json[i][key];			
		}
		return value;
	}

	
});	