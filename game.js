var sprite = {
  grass:  "images/Grass%20Block.png",
  dirt:   "images/Dirt%20Block.png",
  wall:   "images/Wall%20Block.png",
  water:  "images/Water%20Block.png",
  key:    "images/Key.png",
  chest:  "images/Chest%20Closed.png",
  chest_open: "images/Chest%20Open.png"
 };

var allowed = [sprite.grass, sprite.dirt];

var frame = document.getElementById('sprites');
var text = document.getElementById('text');


var player = {
  x: 0,
  y: 1,
  object: document.getElementById("player"),
  setCharacter: function(name){
    this.object.setAttribute("src", "images/" + name + ".png");
  }
}

var max_row = 5;
var max_column = 5;
var block_width = 100;
var block_height = 171;
var check = function(){};

var map = [];
var object = [];

function init(row = 5, column = 5){
  max_row = row;
  max_column = column;
  for(var i = 0; i < max_row; i++){
    map[i] = [];
    object[i] = [];
  }
}

function draw(){
  frame.innerHTML = "";
  for(var i = 0; i < map.length; i++){
    var row = document.createElement("div");
    for(var x = 0; x < map[i].length; x++){
      var block = document.createElement("div");
      block.className = "blok";
      block.setAttribute("id", "block_"+x+"_" + i);
      block.style.backgroundImage = "url('"+map[i][x]+"')";
      if(object[i][x] != undefined){
      	img = document.createElement("img");
      	img.setAttribute("src", object[i][x]);
      	img.setAttribute("id", "object_"+x+"_" + i);
      	img.className = "object";
      	block.appendChild(img);
      }
      row.appendChild(block);
    }
    frame.appendChild(row);
    frame.style.width = (max_column * block_width) + "px";
  }
  frame.style.height = (max_row * (block_height - 84)) + "px";

}

function hideElement(x, y, spin = false){
  if(spin){
    document.getElementById("object_" + x + "_" + y).className = document.getElementById("object_" + x + "_" + y).className  + " hidden";  
  } else {
    document.getElementById("object_" + x + "_" + y).style.opacity = 0;
  }
}

function changeElement(x, y, sprite){
  setTimeout(function(){
    document.getElementById("object_" + x + "_" + y).setAttribute("src", sprite);
  }, 350);
}

function setText(f_text, color = "black"){
  text.innerHTML = f_text;
  text.style.color = color;
  text.className = text.className + " show";
  setTimeout(function(){
    text.className = text.className.replace(" show", "");
  }, 2000);
}

function isValidMove(x, y){
  if(allowed.includes(document.getElementById("block_" + x + "_" + y).style.backgroundImage.replace('url("', "").replace('")', ""))){
    return true;
  } else {
    return false;
  }
}

/* Keystrokes and update */

window.addEventListener('keydown', function (event) {
  switch (event.keyCode) {
    case 40: // down arrow
      if(player.y + 1 < max_row && isValidMove(player.x, player.y + 1)){
        player.y = player.y + 1;  
      } 
      break;
    case 39:
      if(player.x + 1 < max_column && isValidMove(player.x + 1, player.y)){
        player.x = player.x + 1;  
      }    
      break;
    case 37:
      if(player.x - 1 >= 0  && isValidMove(player.x - 1, player.y)){
         player.x = player.x - 1;
      }
    	break;
    case 38:
      if(player.y - 1 >= 0 && isValidMove(player.x, player.y - 1)){
        player.y = player.y - 1;  
      }
    	break;
    default:
      break;
    }
    player.object.style.top = ((block_height - 84) * player.y - 87 ) + "px"; 
    player.object.style.left = (block_width * player.x  ) + "px"; 
   	check();
});
