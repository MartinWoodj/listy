$(document).ready(function(){	
	$('#item').keyup(function(e){
		if(e.keyCode == 13) {
			inputItem = $('#item').val();		
			$('#item').val('');
		};	
	});
	
	$( "#submit_btn" ).submit(function(e) {
		inputItem = $('#item').val();
		e.preventDefault();
		$('#item').val('');
		$('#list').prepend('<li class="listItem"><input type="checkbox" />' + inputItem + '<img class="trashCan" src="images/trash.svg" width="13" height="16"></li>');
	});
	
	
	$('#list, #itemDone').on('click','input[type="checkbox"]',function(){
            if($(this).is(":checked")){
				$(this).closest('li').removeClass("listItem").addClass("checked");
				$('.checked').appendTo($("#itemDone"));
            }
            
            else if($(this).is(":not(:checked)")){
                $(this).closest('li').removeClass("checked").addClass("listItem").prependTo($("#list"));
                $('.listItem').appendTo($("#list"));
            }
	});
	
	$('#list, #itemDone').on("click", "img", function(e){
		$(this).closest('li').remove();
	});	

});