//var da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raio = diametroBolinha/2;

//velocidade da bolinha
let velocidadeX = 6;
let velocidadeY = 6;


//var da raquete
let xRaquete = 30;
let yRaquete = 150;
let larguraRaquete = 10;
let alturaRaquete = 80;

let colidiu = false;

//var da raquete do oponente
let xRaqueteOponente = 560;
let yRaqueteOponente = 150;
let velocidadeYOponente;

//placar
let pm = 0;
let po = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("mp3's/trilha.mp3");
  ponto = loadSound("mp3's/ponto.mp3");
  raquetada = loadSound("mp3's/raquetada.mp3");

}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
  trilha.setVolume(0.2)
}

function draw() {
  background(55,48,107);
  
  mostraBolinha();
  movimentaBolinha();
  verificarColisaoBorda();
  
  mostrarRaquete(xRaquete, yRaquete);
  mostrarRaquete(xRaqueteOponente, yRaqueteOponente);
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  
  movimentaMinhaRaquete();  
  movimentacaoRaqueteOponente();
  
  marcaPonto();
  incluirPlacar();
}


function mostraBolinha(){
  circle(xBolinha,yBolinha,diametroBolinha);
  
  stroke(color(210,118,133));
  
  fill(color(55,48,107));
  
}

function movimentaBolinha(){
  xBolinha += velocidadeX;
  yBolinha += velocidadeY;
}

function verificarColisaoBorda(){
  if (xBolinha + raio > width || xBolinha < 0){
    velocidadeX *= -1; 
  }  
  if (yBolinha + raio > height|| yBolinha < 0){
    velocidadeY *= -1;
  }
}



function mostrarRaquete(x, y){
  rect(x ,y , larguraRaquete, alturaRaquete);
  
  stroke(color(210,118,133));
  fill(color(55,48,107));
  
}

function movimentaMinhaRaquete(){
  if(keyIsDown(87)){
    yRaquete -= 10;
  }
   if(keyIsDown(83)){
    yRaquete += 10;
  }
  
}



function colisaoRaquete(x, y){
  colidiu =
  collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if (colidiu) {
        velocidadeX *= -1;
    raquetada.play();
    raquetada.setVolume(0.2)
    }
}

function movimentacaoRaqueteOponente(){

let larguraRaquete = 10;
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguraRaquete / 2 - 30
  yRaqueteOponente += velocidadeYOponente
  // if(keyIsDown(38)){
  //   yRaqueteOponente -= 10;
  // }
  //  if(keyIsDown(40)){
  //   yRaqueteOponente += 10;
  // }
}


function incluirPlacar(){
  stroke(color(210,118,133));
  fill(color(55,48,107));
  rect(180,18,40,20);
  rect(380,18,40,20);
  textSize(16);
  textAlign(CENTER);
  fill(255);
  text(pm, 200, 33);
  text(po, 400, 33);
}

function marcaPonto(){
  if(xBolinha<0){
    po+=1;
    ponto.play();
    ponto.setVolume(0.2)
  }
  if(xBolinha>590){
    pm+=1;
    ponto.play();
    ponto.setVolume(0.2)
  }
}