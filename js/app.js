$(function (){


 		function random4Digit(){
 	  		return shuffle( "0123456789".split('') ).join('').substring(0,4);
 		}


 		function shuffle(o){
 		    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
 		    return o;
 		}

 		var guessNumber = random4Digit()

        console.log(guessNumber);

 		function validarepetido(numero){
 			for ( var j = 0; j < numero.length; j++ )
 			{
 				for ( var i = 0; i < numero.length; i++ )
 				{
 					if (i != j) {
 						if (numero[i] == numero[j]) {
 							return false;
 							
 						}
 					}
 				}	
 			}
 			return true;
 		}

	   $('#numeroadivinado').on('keydown',function(e){
    	 if(e.keyCode == 13){

    	 		var numDigitado = $(this).val();

    	 		if (numDigitado.length != 4) {
	 				$( "#cantidadDigitos" ).addClass( "alert" );
	 				return;
    	 		}
    	 		$( "#cantidadDigitos" ).removeClass( "alert" );

    	 		if (validarepetido(numDigitado)) {

    	 			$( "#alerta" ).removeClass( "alert" );
    	 			var picas = 0;
    	 			var fijas = 0;

    	 			for ( var i = 0; i < numDigitado.length; i++ )
    	 			{
    	 				for ( var j = 0; j < guessNumber.length; j++ )
    	 				{
    	 					if (guessNumber[j] == numDigitado[i] ) {
    	 						if (j == i) {
    	 							fijas = fijas + 1;
    	 						}else{
    	 							picas = picas + 1;
    	 						}
    	 					}
    	 				}
    	 			}

            $('tbody').append('<tr><td>'+ numDigitado +'</td><td>' + picas + '</td><td>' + fijas + '</td><tr>');
	 		
            if (fijas == 4) {
               $('#divpromedio').css('display','inline');
               document.getElementById("numeroadivinado").value = '';
            }
            else
            {
                document.getElementById("numeroadivinado").value = '';
            }
    	 		}
          else
          {
    	 			$( "#alerta" ).addClass( "alert" );
    	 		}
    	 		

    	   }
    	});
	   
       $('#button').on('click',function(){
            $('#divpromedio').css('display','none');
            $("#numbertable > tbody").html("");
            guessNumber = random4Digit();
             console.log(guessNumber);
       });

});