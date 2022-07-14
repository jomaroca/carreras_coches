$(document).ready(function () {
  //DECLARACIONES DE VARIABLES
  var cantidadJugadores = [];
  var recorrido = $("#container").width() - 115;

  //OCULTAR BOTÓN DE REINICIAR
  $("#reiniciar").hide();

  //FUNCIÓN PARA CREAR UN ARRAY Y PINTAR LOS JUGADORES
  $("#listaJugadores").click(function () {
    let jugadores = $("#listaJugadores").val();
    cantidadJugadores = new Array(parseInt(jugadores));
    $("#carrera").empty();

    for (let index = 1; index <= cantidadJugadores.length; index++) {
      let contenedorJugadores = `<div id='road${index}'><img id='car${index}' src='img/car${index}.png'></img></div>`;
      $("#carrera").append(contenedorJugadores);
      $("#road" + index).css(
        "backgroundImage",
        "url(img/road.png)"
      );
      $("#road" + index).css("backgroundSize", "85px");
      $("#car" + index).css("width", "115px");
    }
  });

  //FUNCIÓN PARA MOVER LOS COCHES
  $("#iniciar").click(function () {
    let contadorPosiciones = 1;

    for (let index = 1; index <= cantidadJugadores.length; index++) {
      $("#car" + index).animate(
        { marginLeft: recorrido },
        Math.random() * 10000,
        function () {
          $("#road" + index).prepend(
            "<div class='posicion'>Posicion " + contadorPosiciones++ + "</div>"
          );
        }
      );
    }

    $(this).hide();
    $("#reiniciar").show();
  });

  //FUNCIÓN PARA PARAR Y REINICIAR LOS COCHES
  $("#reiniciar").click(function () {
    for (let index = 1; index <= cantidadJugadores.length; index++) {
      $("#car" + index).stop();
      $("#car" + index).css("marginLeft", "0px");
      $(".posicion").empty();
    }
    $(this).hide();
    $("#iniciar").show();
  });
});