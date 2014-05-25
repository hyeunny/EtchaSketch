$(document).ready(function(){

var input = 3;

if(input >= 1 && input <= 128)
{
	var square_size = $('#grid_container').width()/input - 2;

	for(var y = 1; y <= input; y++)
	{
		for(var x = 1; x <= input; x++)
		{
			$('#grid_container').append('<div class="grid_square"></div>');
		}
	}

	$('.grid_square').css('height', square_size);
	$('.grid_square').css('width', square_size);

	

	
	

	$('.grid_square').dblclick(function(){
		$(this).addClass('grid_square_litp2');
	});

	$('.grid_square').click(function(){
		$(this).addClass('grid_square_lit');
	});

	$('button').click(function(){
		$('.grid_square').removeClass('grid_square_lit').removeClass('grid_square_litp2');
	});

}

else
{
	alert("That is an invalid input.")
}





});
