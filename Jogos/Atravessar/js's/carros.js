let xCarro = [600, 600, 600, 600, 600, 600];
let yCarro = [40, 95, 145, 210, 270, 318];
let velocidadeCarros = [1, 2, 3, 4, 5, 6];

let comprimentoCarro = 50;
let alturaCarro = 40;


function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarro[i], yCarro[i], comprimentoCarro, alturaCarro);
  }
}  

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    xCarro[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for(let i = 0; i < imagemCarros.length; i++){
    if (pasouTodaTela(xCarro[i])){
      xCarro[i] = 600;
    }
  }
}

function pasouTodaTela(xCarro){
  return xCarro < - 50;
}