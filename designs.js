$(document).ready(function(){
	
	//**append rows to table**//
	
	function rows(){
		let r=$("<tr></tr>");
		$("table").append(r);
		
	}
	
	//**append rows to cell***//
	function cell(){
		let c=$("<td></td>");
		$("tr").append(c);
		
	}
			
		
	//** create table function **//
	
	function makeGrid(){
		let r=$("#input_height").val();
		let c=$("#input_width").val();
		
		for(let i=0; i<r; i++){
				rows(); // function add row
		}
		for(let i=0; i<c; i++){
			cell();  //function add cell
		}		
	}
	
	 
	   //**Create grid when click on submit**//
	$("#sizePicker").submit(function(e){
		e.preventDefault();
		$("#pixel_canvas").children().remove(); //remove table if there is one !
		
		if( $("#input_height").val()>1 &&  $("#input_width").val()>1){
		makeGrid();
		}else{
		 window.alert("Height & Width needs to be more than 1 !!!!");
		} 
	});
	
	
	      //***Coloring the cells***//
		
		$("#pixel_canvas").on("click","td",function(event){
			let col= $("#colorPicker").val();
		$(event.target).css("backgroundColor",col);
		});

		
		//**Delete color of cell on middleClick**//
		
		$("#pixel_canvas").on("mousedown","td",function(event){
			if(event.which===2){
				$(this).css("background-color","");
			}
				
		});
		
		
		
		
		
		//**Remove/Add the Grid**//
		
		 $("#removeGrid").on("click",function(event){
			event.preventDefault();
			
			$("td, tr").toggleClass("borderNone")
		});
		
	
		
		 
		
		
});
		

		
		
		
		
		
		
		

	
	
	
		
		
		