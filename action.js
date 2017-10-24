función  pokedex () {


  var id =  " " ;
  var name =  " " ;
  var photo =  " " ;
  var type =  " " ;

  var contentPhoto =  " " ;
  var contentInfo =  " " ;
    var infoName =  " " ;
    var infoType =  " " ;
    var infoId =  " " ;
  var auxDiv =  " " ;
  var content =  " " ;

  para ( var i = 0 ; i <  pokemones . length ; i ++ ) {
    id = pokemones [i]. id ;
    name = pokemones [i]. nombre ;
    foto = pokemones [i]. foto ;
    type = pokemones [i]. tipo ;

    consola . log (id + nombre + foto + tipo);

    // constructor de div foto
    contentPhoto =  " <div class = 'photo'> "  +  " <img src = 'img / photos / "  + photo +  " .jpg'> "  +  " </ div> " ;

    // constructor de div info
    infoName =  " <h2> "  + nombre +  " </ h2> " ;
    infoId =  " <span> "  + id +  " </ span> " ;
    infoType =  " <img src = 'img / types / "  + type +  " .png'> " ;
    auxDiv =  " <div class = 'd-flex justify-content-between'> "  + infoId + infoType +  "</ div>" ;
    contentInfo =  " <div class = 'info'> "  + infoName + auxDiv +  " </ div> " ;

    // constructor de div pokemon
    contenido = contenido +  "<div class = 'pokemon'>"  + contentPhoto + contentInfo +  "</ div>" ;
  }

  documento . getElementById ( ' contenedor ' ). innerHTML  = contenido;
   consola . log (contenido);

}
