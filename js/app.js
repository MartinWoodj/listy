$(document).ready(function(){
	// Enter key adds items
	$('#item').keyup(function(e){
		if(event.keyCode == 13) {
// 			$('#add').click();
			inputItem = $('#item').val();
			$('#item').val('');
				console.log("You pressed enter!");
			$('#list').prepend('<li class="listItem"><input type="checkbox" />' + inputItem + '</li>');
			$('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                console.log("Checkbox is checked.");
                $(".listItem").removeClass("listItem").addClass("checked");
            	}
            else if($(this).is(":not(:checked)")){
                console.log("Checkbox is unchecked.");
                $(".checked").removeClass("checked").addClass("listItem");
            	}
			});
		};

	});

	
});




/*
- Type new item into text box - DONE
- Hit "enter" for item to be added to list
- List item will display with checkbox left of item
- Clicking inside checkbox will strike through item
- Strike through item will then be dropped to the bottom of the list
- List item that is completed with a strike through and a checkmark is also greyed out
- Unchecking a checked item moves the list item back to the top of the list
- *Figure out how to permanently remove an item from the list
  
  





  
    
*/





