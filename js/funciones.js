$(document).ready(function(){
	
	var tipojuego=30;
	var puntajeq1=0;
	var puntajeq2=0;

	$("#inic").on("click",iniciar);
	$(".tipojuego").on("click",function(){
		selecjuego(this.id);
	});
	$(".sumrest").on("click",function(){
		puntos(this.id);
		dibuja();
	});

	$("#limpiar").on("click",finalizar);

	function iniciar() {
		$("#inicio").removeClass("visible").addClass("oculta");
		
		$("#juego").removeClass("oculta").addClass("visible");
		
		$("#nomeq1").text($('#eq1').val()); 
		$("#nomeq2").text($('#eq2').val());
		$("#pteq1").text(puntajeq1);
		$("#pteq2").text(puntajeq2);

		console.log("selecciona juego");
		if (tipojuego==30){
			console.log("juego30");
			$("#ptmax").text("a 30");
		 }else {
		 	console.log("juego24");
		 	$("#ptmax").text("a 24");

		 };
		
	};

	function selecjuego(n){
		n=n.replace('btn','');
		n=parseInt(n);
		tipojuego=n;
		console.log(n);
		if (tipojuego==30){
			$('#btn24').removeClass("activo").addClass("inactivo");
			$('#btn30').removeClass("inactivo").addClass("activo");
			console.log("30 activo");
		}else {
			$('#btn30').removeClass("activo").addClass("inactivo");
			$('#btn24').removeClass("inactivo").addClass("activo");
			console.log("24 activo");
		};
	};


	function puntos(n){
		n=n.replace('btn','');
		n=parseInt(n);
		switch (n){
			case 1:
				if (puntajeq1<tipojuego){puntajeq1++;}; 
				break;

			case 2:
				if (puntajeq2<tipojuego){puntajeq2++;}; 
				break;

			case 3:
				if (puntajeq1>0){puntajeq1--;};
				 break;

			case 4:
				if (puntajeq2>0){puntajeq2--;}; 
				break;
		};
		$("#pteq1").text(puntajeq1);
		$("#pteq2").text(puntajeq2);
	};

	function dibuja(){
		var fos5eq1=0;
		var fos5eq2=0;
		var modeq1=0;
		var modeq2=0;
		var cantfos=tipojuego/6;
		fos5eq1=parseInt(puntajeq1/cantfos);
		fos5eq2=parseInt(puntajeq2/cantfos);
		modeq1=puntajeq1%cantfos;
		modeq2=puntajeq2%cantfos;

//fosoforos eq1
		for (var i = 1; i <= fos5eq1; i++) {
			$('#e1p'+ i).attr( "src" , "img/"+ cantfos + ".png");	
		};

		vacio=fos5eq1+1;
				
		for (var i = vacio; i <= 6; i++) {
			$('#e1p'+ i).attr( "src" , "img/0.png" );	
		};

		$('#e1p'+ vacio).attr( "src" , "img/"+ modeq1 + ".png" );


//fosoforos eq2

		for (var i = 1; i <= fos5eq2; i++) {
			$('#e2p'+ i).attr( "src" , "img/" + cantfos + ".png");	
		};

		vacio=fos5eq2+1;
		
		for (var i = vacio; i <= 6; i++) {
			$('#e2p'+ i).attr( "src" , "img/0.png" );	
		};

		$('#e2p'+ vacio).attr( "src" , "img/"+ modeq2 + ".png" );
	
	};

	function finalizar(){
		puntajeq1=0;
		puntajeq2=0;
		dibuja();
		$("#juego").removeClass("visible").addClass("oculta");
		
		$("#inicio").removeClass("oculta").addClass("visible");

		$('#eq1').val("");
		$('#eq2').val("");
	};




});
