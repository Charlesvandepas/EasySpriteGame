// init(row, column)
function level1(){
  /* Init Level */
  init(5, 5);
  player.setCharacter("HornGirl");
  setText("Welkom bij dit avonturenspel. Open de chest", "black");
  /* Level vars */ 
  var hasKey = false;
  /* Map and Objects */
  map[0][0] = sprite.grass;
  map[0][1] = sprite.water;
  map[0][2] = sprite.water;
  map[0][3] = sprite.grass;
  map[0][4] = sprite.dirt;

  map[1][0] = sprite.grass;
  map[1][1] = sprite.dirt;
  map[1][2] = sprite.grass;
  object[1][2] = sprite.key;
  map[1][3] = sprite.wall;
  map[1][4] = sprite.grass;

  map[2][0] = sprite.grass;
  map[2][1] = sprite.dirt;
  map[2][2] = sprite.grass;
  map[2][3] = sprite.wall;
  map[2][4] = sprite.grass;

  map[3][0] = sprite.grass;
  map[3][1] = sprite.dirt;
  map[3][2] = sprite.dirt;
  map[3][3] = sprite.dirt;
  map[3][4] = sprite.grass;
  object[3][4] = sprite.chest;

  map[4][0] = sprite.grass;
  map[4][1] = sprite.grass;
  map[4][2] = sprite.dirt;
  map[4][3] = sprite.grass;
  map[4][4] = sprite.grass;
  // Check 
  check = function(){
    if(player.x == 2 && player.y == 1){
      hideElement(player.x,player.y, "spin");
      hasKey = true;
    }
    if(player.x == 4 && player.y == 4){
      if(hasKey){
        changeElement(4, 3, sprite.chest_open);
        setTimeout(function(){
          level2();
        }, 2000);
      } else {
        setText("Je hebt de sleutel nog niet", "red");
      }
    }
  }
  draw();
}

function level2(){
  /* Init Level */
  init(5, 5);
  player.setCharacter("Boy");
  setText("Succes met level 2", "black");
  /* Level vars */ 
  var hasKey = false;
    /* Map and Objects */
  map[0][0] = sprite.water;
  map[0][1] = sprite.water;
  map[0][2] = sprite.water;
  map[0][3] = sprite.water;
  map[0][4] = sprite.water;

  map[1][0] = sprite.grass;
  map[1][1] = sprite.dirt;
  object[1][1] = sprite.key;
  map[1][2] = sprite.water;
  map[1][3] = sprite.wall;
  map[1][4] = sprite.grass;
  object[1][4] = sprite.chest;

  map[2][0] = sprite.grass;
  map[2][1] = sprite.dirt;
  map[2][2] = sprite.water;
  map[2][3] = sprite.wall;
  map[2][4] = sprite.grass;

  map[3][0] = sprite.grass;
  map[3][1] = sprite.dirt;
  map[3][2] = sprite.water;
  map[3][3] = sprite.dirt;
  map[3][4] = sprite.grass;

  map[4][0] = sprite.grass;
  map[4][1] = sprite.grass;
  map[4][2] = sprite.grass;
  map[4][3] = sprite.grass;
  map[4][4] = sprite.grass;

  check = function(){
    if(player.x == 1 && player.y == 1){
      hideElement(player.x,player.y, "spin");
      hasKey = true;
    }
    if(player.x == 4 && player.y == 2){
      if(hasKey){
        changeElement(4, 1, sprite.chest_open);
       setText("Gefeliciteerd, je hebt het spel uitgespeeld!", "green");
      } else {
        setText("Je hebt de sleutel nog niet", "red");
      }
    }
  }

  draw();
}
level1();