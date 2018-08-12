$(document).ready(function() {
	//when the button is clicked the values entered are gathered and inserted
	//into the string that will be the url route.
	$('#button').click(function(){
		var x = $('#x').val() || 0;
		var y = $('#y').val() || 0;
		var url = 'api/math/add/' + x + '/' + y;
		
		//the get method takes the route and then has a function waiting
		//for the response which will take the data and insert it into the HTML
		$.get(url, function(data){
			$('#result').text(data);
		});
	});
	
	$('#avail').click(function(){
		$.ajax({
			type: "GET",
			url: "/api/chat",
			data: {id : "id", name: "name", content: "content"},
			contentType: "application/json;charset=utf-8",
			dataType: "json",
			success: function(data) {
				var result = "";
				$.each(data, function(id, dog){
					result += '<b>Id : </b>' + dog.id + '<br/>' +
								'<b>Name : </b>' + dog.name + '<br/>' +
								'<b>Content : </b>' + dog.content + '<hr/>'
					$('#dogs').html('');
					$('#dogs').html(result);
				})
				
			},
			error: function(result){
				alert('error');
			}
		});

	});
});