
function setup() {
  createCanvas(500, 400);
  somDaTrilha.loop();
  
  somDaTrilha.setVolume(0.2)
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosicaoInicialDoCarro();
  
  verificaCoilisao();
  incluiPontos()
  marcaPontos();
}



