//variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2;

//velocidade da bolinha
let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variaveis do oponenente
let xRaqueteOpnente = 585;
let yRaqueteOponente = 150;
let velocidadeyOponente;

let colidiu = false;
// placar do jogo
let meuspontos = 0;
let 

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0, 0, 0);
  mostraBolinha();
  movimentaBolinha();
  mostraRaqueteOponente();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaMinhaRaquete();
  movimentaRaqueteOponente();
  //verificaColisaoRaquete();
  colisaoMinhaRaqueteBiblioteca();
  colisaoRaqueteOponente();
}
incluiPlacar ();
marcaPonto ();
function mostraBolinha() {
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha() {
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function verificaColisaoBorda() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    velocidadexBolinha *= -1;
  }
  if (yBolinha + raio > height || yBolinha - raio < 0) {
    velocidadeyBolinha *= -1;
  }
}

function mostraRaquete() {
  rect(xRaquete, yRaquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente() {
  rect(xRaqueteOponente, yRaqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete() {
  if (keyIsDown(UP_ARROW)) {
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yRaquete += 10;
  }
}

function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadexBolinha *= -1;
  }
}

function colisaoMinhaRaqueteBiblioteca() {
  colidiu = collideRectCircle(
    xRaquete,
    yRaquete,
    raqueteComprimento,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}


function mostraRaqueteOponente();{
  velocidadeyOponente = yBolinha - yraqueteOponente - raqueteAltura / 2-50 ; yRaqueteOponente += velocidadeyOponente;
  }
  }
  
function verificaColisaoRaquete() {
  if (
    xBolinha - raio < xRaquete + raqueteComprimento &&
    yBolinha - raio < yRaquete + raqueteAltura &&
    yBolinha + raio > yRaquete
  ) {
    velocidadexBolinha *= -1;
  }
}

function colisaoRaqueteOponente() {
  colidiu = collideRectCircle(
    xRaqueteOponente,
    yRaqueteOponente,
    raqueteComprimento,
    xBolinha,
    yBolinha,
    raio
  );
  if (colidiu) {
    velocidadexBolinha *= -1;
  }
}

function incluiPlacar() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 470, 26);
}
function marcaPonto() {
  if (xBolinha + raio >= 599) {
    meusPontos += 1;
    ponto.play();
  }
  if (xBolinha - raio <= 1) {
    pontosDoOponente += 1;
    ponto.play();
  }
}