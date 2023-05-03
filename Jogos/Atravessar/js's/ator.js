//ator

let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW) && yAtor<366){
    yAtor += 3;
  }
}
function voltaAtorParaInicio(){
  yAtor = 366;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255,255,0));
  text(meusPontos, width/5, 25 )  
}
function marcaPontos(){
    if(yAtor<15){
      meusPontos +=1;
      voltaAtorParaInicio();
      somDoPonto.play();
      somDoPonto.setVolume(0.1)
    }
}
function verificarPontos(){
    if(meusPontos>0){
      meusPontos -=1;
    }
}


function verificaCoilisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for (let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarro[i], yCarro[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15);
    if(colisao){
      voltaAtorParaInicio();
      somDaColisao.play();
      somDaColisao.setVolume(0.2)
      verificarPontos();
    }
  }
}