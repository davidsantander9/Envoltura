var temp = 1;
$(document).ready(function(){
	$("#imgPanditas").click(function(){
		var img = $("#imgPanditas");
		//img.attr("src", img.attr("src").replace("src", "https://nutriciongrupobimbo.com/sites/default/files/bimbo-panditas-suaves_0.png"));	
		
		if(temp == 1){
			img.attr('src', 'http://pngimg.com/uploads/cocacola/cocacola_PNG22.png').delay( 800 ).fadeIn( 400 );
			temp = 2;
		}
		else if(temp == 2){
			img.attr('src', 'http://lacriaturacreativa.com/wp-content/uploads/2014/05/coca-cola-el-sol.png.png').delay( 800 ).fadeIn( 400 );
			temp = 1;
		}

	});
	
	$("figure img").click(function(){
		$("#figCap").toggle();
	});

	$("#btnSabor").click(function(){
		var sabor = $("progress").val();
		sabor += 5; 
		 $("progress").val(sabor);
	});
});

function move() {
  var elem = document.getElementById("saborBar");   
  var width = 10;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++; 
      elem.style.width = width + '%'; 
      elem.innerHTML = width * 1  + '%';
    }
  }
}