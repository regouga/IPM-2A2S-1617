var x;
var y;
var sVolume = 50;
var audioVolume = 0.5;
var currentSong = 0;
var music;
var playingBefore = 0;
var pedidosV = [];
var pedidoCount = 0;
var songFile = ["tdcc", "gd", "lp", "cf", "coldplay", "pedro", "adele", "ed", "daft", "bruno", "muse", "pearl", "or", "u2", "mumford", "xx"];
var track = ["Sun", "Boulevard Of Broken Dreams", "In The End", "Teresa", "Hymn For The Weekend", "Momento (Uma Espécie de Céu)", "Remedy", "Thinking Out Loud", "Get Lucky (feat. Pharrell Williams)", "Locked Out Of Heaven", "Mercy", "Future Days", "If I Lose Myself Tonight", "Sunday Bloody Sunday", "The Cave", "Intro"];
var artists = ["Two Door Cinema Club", "Green Day", "Linkin Park", "Capitão Fausto", "Coldplay", "Pedro Abrunhosa", "Adele", "Ed Sheeran", "Daft Punk", "Bruno Mars", "Muse", "Pearl Jam", "OneRepublic", "U2", "Mumford & Sons", "The xx"];
var album = ["Beacon", "American Idiot", "Hybrid Theory", "Gazela", "A Head Full of Dreams", "Momento", "25", "X", "Random Access Memories", "Unorthodox Jukebox", "Drones", "Lighting Bolt", "Native", "War", "Sigh No More", "xx"];
var cover = ["assets/music-control/album-artwork/tdcc.png", "assets/music-control/album-artwork/gd.png", "assets/music-control/album-artwork/lp.png", "assets/music-control/album-artwork/cf.png", "assets/music-control/album-artwork/coldplay.png", "assets/music-control/album-artwork/pedro.png", "assets/music-control/album-artwork/adele.png", "assets/music-control/album-artwork/ed.png", "assets/music-control/album-artwork/daft.png", "assets/music-control/album-artwork/bruno.png", "assets/music-control/album-artwork/muse.png", "assets/music-control/album-artwork/pearl.png", "assets/music-control/album-artwork/or.png", "assets/music-control/album-artwork/u2.png", "assets/music-control/album-artwork/mumford.png", "assets/music-control/album-artwork/xx.png"]
var mulheres = 5;
var estado_mulheres = 1;
var homens = 0;
var estado_homens = 0;
var currentChannel = 0;
var votos = [6, 6, 6, 6, 8, 10];
var barra = [135, 135, 135, 135, 180, 225];
var canais = ["RTP1", "RTP2", "SIC", "TVI", "SPORT TV", "BENFICA TV"];
var canal1 = 0;
var canal2 = 0;
var canal3 = 0; //canais mais votados para fazer o grafico
var numero_votos =  15;
var currentScreen = 0;
var aviso_wc = document.getElementById('aviso_wc');
var aviso_pedido = document.getElementById('aviso_pedido');
var confirm_dinheiro = document.getElementById('confirmacao_dinheiro');
var confirm_multibanco = document.getElementById('confirmacao_multibanco');
var info_pratos_div = document.getElementById('info_pratos_div');
var pop_personalizar = document.getElementById('pop_personalizar');
var botao_fechar = document.getElementsByClassName("fechar")[0];
var botao_fechar_pedido = document.getElementsByClassName("fechar_pedido")[0];
var botao_fechar_confirm = document.getElementsByClassName("fechar_confirm")[0];
var botao_fechar_cancel = document.getElementsByClassName("fechar_cancel")[0];
var tempo_homem = 1;
var tempo_mulher = 1;
var countdown_homens;
var countdown_mulheres;
var em_espera_homem = 0;
var em_espera_mulher = 0;
var mais_votado_1 = mais_votado_2 = mais_votado_3 = 0;
var tabelaI = 0;
var precoTotal = 0;
var precoParcial = 0;
var items_totais = 0;
var clonePedido;
var z = 1;
var bitoques = [], polvos = [], paos = [], azeitonas = [], pates = [], queijos = [], aguas = [], colas = [], nesteas = [];
var picanhas = [], burgers = [], douradas = [], atuns = [], doces = [], mousses = [], babas = [];
var countBitoques = 0, countPolvo = 0, countPao = 0, countAzeitonas = 0, countPates = 0, countQueijos = 0, countAguas = 0; countColas = 0; countNesteas = 0;
var countPicanhas = 0, countBurgers = 0, countDouradas = 0, countAtuns = 0, countDoces = 0, countMousses = 0, countBabas = 0;

var bitoquesE = [], polvosE = [], paosE = [], azeitonasE = [], patesE = [], queijosE = [], aguasE = [], colasE = [], nesteasE = [];
var picanhasE = [], burgersE = [], douradasE = [], atunsE = [], docesE = [], moussesE = [], babasE = [];
var countBitoquesE = 0, countPolvoE = 0, countPaoE = 0, countAzeitonasE = 0, countPatesE = 0, countQueijosE = 0, countAguasE = 0; countColasE = 0; countNesteasE = 0;
var countPicanhasE = 0, countBurgersE = 0, countDouradasE = 0, countAtunsE = 0, countDocesE = 0, countMoussesE = 0, countBabasE = 0;

var bitoquesC = [], polvosC = [], paosC = [], azeitonasC = [], patesC = [], queijosC = [], aguasC = [], colasC = [], nesteasC = [];
var picanhasC = [], burgersC = [], douradasC = [], atunsC = [], docesC = [], moussesC = [], babasC = [];
var countBitoquesC = 0, countPolvoC = 0, countPaoC = 0, countAzeitonasC = 0, countPatesC = 0, countQueijosC = 0, countAguasC = 0; countColasC = 0; countNesteasC = 0;
var countPicanhasC = 0, countBurgersC = 0, countDouradasC = 0, countAtunsC = 0, countDocesC = 0, countMoussesC = 0, countBabasC = 0;

// POSICAO DO MENU

function statusbar_empty () {
  document.getElementById("menu_position").innerHTML=""
}

function statusbar_novo_pedido() {
  document.getElementById("menu_position").innerHTML="Novo Pedido"
}

function statusbar_servicos() {
  document.getElementById("menu_position").innerHTML="Serviços"
}

function statusbar_ajuda() {
  document.getElementById("menu_position").innerHTML="Ajuda"
}

function statusbar_chamar_empregado() {
  document.getElementById("menu_position").innerHTML="Chamar o Empregado"
}

function statusbar_estado_pedido() {
  document.getElementById("menu_position").innerHTML="Ver e Alterar Pedidos"
}

function statusbar_conta() {
  document.getElementById("menu_position").innerHTML="Ver ou Pagar Conta"
}

function statusbar_musica() {
  document.getElementById("menu_position").innerHTML="Serviços <br>\xa0\xa0\xa0\xa0\xa0\xa0> Controlo de Música"
}

function statusbar_tv() {
  document.getElementById("menu_position").innerHTML="Serviços <br>\xa0\xa0\xa0\xa0\xa0\xa0> Votação do Canal de TV"
}

function statusbar_wc() {
  document.getElementById("menu_position").innerHTML="Serviços <br>\xa0\xa0\xa0\xa0\xa0\xa0> Ocupação dos W.C.'s"
}

function pratos_carnes() {
  document.getElementById("pratosselecionados").innerHTML="Carnes";
  show(pratos_de_carnes);
  hide(pratos_de_peixes);
  hide(pratos_do_dia);
  hide(pratos_de_bebidas);
  hide(pratos_de_sobremesas);
  hide(pratos_de_entradas);
}

function pratos_peixes() {
  document.getElementById("pratosselecionados").innerHTML="Peixes";
  show(pratos_de_peixes);
  hide(pratos_de_carnes);
  hide(pratos_do_dia);
  hide(pratos_de_bebidas);
  hide(pratos_de_sobremesas);
  hide(pratos_de_entradas);
}

function pratos_pratosdodia() {
  document.getElementById("pratosselecionados").innerHTML="Pratos do Dia";
  show(pratos_do_dia);
  hide(pratos_de_peixes);
  hide(pratos_de_carnes);
  hide(pratos_de_bebidas);
  hide(pratos_de_sobremesas);
  hide(pratos_de_entradas);
}

function pratos_bebidas() {
  document.getElementById("pratosselecionados").innerHTML="Bebidas";
  show(pratos_de_bebidas);
  hide(pratos_de_peixes);
  hide(pratos_do_dia);
  hide(pratos_de_carnes);
  hide(pratos_de_sobremesas);
  hide(pratos_de_entradas);
}

function pratos_sobremesas() {
  document.getElementById("pratosselecionados").innerHTML="Sobremesas";
  show(pratos_de_sobremesas);
  hide(pratos_de_peixes);
  hide(pratos_do_dia);
  hide(pratos_de_bebidas);
  hide(pratos_de_carnes);
  hide(pratos_de_entradas);
}

function pratos_entradas() {
  document.getElementById("pratosselecionados").innerHTML="Entradas";
  show(pratos_de_entradas);
  hide(pratos_de_peixes);
  hide(pratos_do_dia);
  hide(pratos_de_bebidas);
  hide(pratos_de_sobremesas);
  hide(pratos_de_carnes);
}

// RELOGIO

function GetClock(){
  var d=new Date();
  var nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
  if(nyear<1000) nyear+=1900;
  var nhour=d.getHours(),nmin=d.getMinutes();
  if(nmin<=9) nmin="0"+nmin

  document.getElementById('clock').innerHTML=""+nhour+":"+nmin+"\xa0\xa0\xa0"+ndate+"/"+(nmonth+1)+"/"+nyear+" ";
}



// MOSTRAR VOLUME (MUSICA)

function showVolume() {
  document.getElementById("volume_div").innerHTML ="Volume: " + sVolume;
}



// MOSTRAR INFO DA MUSICA

function showMusic() {
  document.getElementById("artwork").innerHTML ="<img src=\"" + cover[currentSong] + "\" style=\"height: 180px; width: 180px; border:5px solid black\">"
  document.getElementById("musica_div").innerHTML ="<p style=\"font-size: 30px;\"><b>" + track[currentSong] + "</b></p><p><b>" + artists[currentSong] + "</b> &mdash; " + album[currentSong];
}


// LOAD DE FUNCOES

window.onload=function(){
        GetClock();
        setInterval(GetClock,1);
        showMusic();
        setInterval(showMusic,1);
        showVolume();
        setInterval(showVolume,1);
        showPrecoTotal();
        setInterval(showPrecoTotal,1);
        showPrecoParcial();
        setInterval(showPrecoParcial,1);
        autoNext();
        setInterval(autoNext, 50);
        unlockFinalizar();
        setInterval(unlockFinalizar, 1);
        verifyPedidos();
        setInterval(verifyPedidos, 1);
}



// HIDE E SHOW DE DIVS

function hideandshow(x, y) {
	x.style.display = 'none';
	y.style.display = 'inline';
}

function show(y) {
  y.style.display = 'inline';
}

function show_alt(y){
  y.style.display = 'inline-block';
}

function hide(y) {
  y.style.display = 'none';
}



// MENU MUSICA

function autoNext () {
  music = document.getElementById(songFile[currentSong]);
  if (music.ended) {
    nextMusic();
    playAudio();
  }
}

function playAudio() {
  music = document.getElementById(songFile[currentSong]);
  music.play();
  music.volume = audioVolume;
}

function pauseAudio () {
  music.pause();
}

function nextMusic () {
  music = document.getElementById(songFile[currentSong]);
  if (!music.paused) {
    pauseAudio();
    music.currentTime = 0;
  }
  else {
    playingBefore = 1;
    music.currentTime = 0;
  }
  if (currentSong != 15) currentSong++;
  else currentSong = 0;
  if (music.paused && playingBefore == 0) playAudio();
  playingBefore = 0;
}

function previousMusic () {
  music = document.getElementById(songFile[currentSong]);
  if (!music.paused) {
    pauseAudio();
    music.currentTime = 0;
  }
  else {
    playingBefore = 1;
    music.currentTime = 0;
  }
  if (currentSong != 0) currentSong--;
  else currentSong = 15;
  if (music.paused && playingBefore == 0) playAudio();
  playingBefore = 0;
}

function moreVolume () {
  if (sVolume!= 100) {
    sVolume += 10;
    audioVolume += 0.1;
    music.volume = audioVolume;
  }
}

function lessVolume () {
  if (sVolume!= 0) {
    sVolume -=10;
    audioVolume -= 0.1;
    music.volume = audioVolume;
  }
}

function selectedButton(x){
  x.style.boxShadow="5px 5px 5px #444444";
}

function clearButtons5(x, y, z, q, t){
  x.style.boxShadow="none";
  y.style.boxShadow="none";
  z.style.boxShadow="none";
  q.style.boxShadow="none";
  t.style.boxShadow="none";
}

function clearButtons(x, y){
  x.style.boxShadow="none";
  y.style.boxShadow="none";
}

function clearButton(x){
  x.style.boxShadow="none";
}

function checkMulheres(){
  document.getElementById('span1').innerHTML= 'OCUPADO';
}

document.getElementById('timer').innerHTML = 05 + ":" + 00;

function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  //if(m<0){alert('timer completed')}

  document.getElementById('timer').innerHTML =
    m + ":" + s;
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

function hide_aguarde() {
  document.getElementById("esperar").style.display = 'none';
}


//MENU TV

function sortWithIndeces(toSort) {
  for (var i = 0; i < toSort.length; i++) {
    toSort[i] = [toSort[i], i];
  }
  toSort.sort(function(left, right) {
    return left[0] < right[0] ? -1 : 1;
  });
  toSort.sortIndices = [];
  for (var j = 0; j < toSort.length; j++) {
    toSort.sortIndices.push(toSort[j][1]);
    toSort[j] = toSort[j][0];
  }
}

function votarCanal(x){
  currentChannel = canais[x];
}

function showCanal(x){
   if (x == 1) document.getElementById("canal_escolhido").innerHTML="A sua escolha: RTP1";
   if (x == 2) document.getElementById("canal_escolhido").innerHTML="A sua escolha: RTP2";
   if (x == 3) document.getElementById("canal_escolhido").innerHTML="A sua escolha: SIC";
   if (x == 4) document.getElementById("canal_escolhido").innerHTML="A sua escolha: TVI";
   if (x == 5) document.getElementById("canal_escolhido").innerHTML="A sua escolha: SPORTTV";
   if (x == 6) document.getElementById("canal_escolhido").innerHTML="A sua escolha: BTV";

}

function adicionarVoto(x){

  votos[x]++;
  barra[x]+= 15;
  updateVotos();

}

function indice(x) {
  for (i=0; i<votos_index.length; i++) {
    if (votos_index[i] = x) return i;
  }
}

function updateVotos() {

  ordenar();

  document.getElementById("1omaisvotado").innerHTML= votos[mais_votado_1];
  document.getElementById("1omaisvotado").style.width = barra[mais_votado_1] +"px";
  document.getElementById("canal1").innerHTML = canais[mais_votado_1];

  document.getElementById("2omaisvotado").innerHTML= votos[mais_votado_2];
  document.getElementById("2omaisvotado").style.width = barra[mais_votado_2] +"px";
  document.getElementById("canal2").innerHTML = canais[mais_votado_2];

  document.getElementById("3omaisvotado").innerHTML= votos[mais_votado_3];
  document.getElementById("3omaisvotado").style.width = barra[mais_votado_3] +"px";
  document.getElementById("canal3").innerHTML = canais[mais_votado_3];

}

function getMax(xx) {
  return Math.max.apply(null, xx);
}

function ordenar () {
  var votos_aux = votos.slice();

  mais_votado_1 = votos_aux.indexOf(getMax(votos_aux));
  votos_aux[mais_votado_1] = -1;
  mais_votado_2 = votos_aux.indexOf(getMax(votos_aux));
votos_aux[mais_votado_2] = -1;
  mais_votado_3 = votos_aux.indexOf(getMax(votos_aux));
votos_aux[mais_votado_3] = -1;
}


function hideCanais(a, b, c, d, e) {
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
}

function timeoutCanais() {

  setTimeout(clickableCanais(), 5000);
}

function nonClickableCanais() {

  document.getElementById("rtp1").disabled = true;
  document.getElementById("rtp1").style.opacity = "0.6";
  document.getElementById("rtp1").style.cursor = "not-allowed";

  document.getElementById("rtp2").disabled = true;
  document.getElementById("rtp2").style.opacity = "0.6";
  document.getElementById("rtp2").style.cursor = "not-allowed";

  document.getElementById("sic").disabled = true;
  document.getElementById("sic").style.opacity = "0.6";
  document.getElementById("sic").style.cursor = "not-allowed";

  document.getElementById("tvi").disabled = true;
  document.getElementById("tvi").style.opacity = "0.6";
  document.getElementById("tvi").style.cursor = "not-allowed";

  document.getElementById("sporttv").disabled = true;
  document.getElementById("sporttv").style.opacity = "0.6";
  document.getElementById("sporttv").style.cursor = "not-allowed";

  document.getElementById("benficatv").disabled = true;
  document.getElementById("benficatv").style.opacity = "0.6";
  document.getElementById("benficatv").style.cursor = "not-allowed";

}

function clickableCanais() {

  document.getElementById("rtp1").disabled = false;
  document.getElementById("rtp1").style.opacity = "1";
  document.getElementById("rtp1").style.cursor = "auto";

  document.getElementById("rtp2").disabled = false;
  document.getElementById("rtp2").style.opacity = "1";
  document.getElementById("rtp2").style.cursor = "auto";

  document.getElementById("sic").disabled = false;
  document.getElementById("sic").style.opacity = "1";
  document.getElementById("sic").style.cursor = "auto";

  document.getElementById("tvi").disabled = false;
  document.getElementById("tvi").style.opacity = "1";
  document.getElementById("tvi").style.cursor = "auto";

  document.getElementById("sporttv").disabled = false;
  document.getElementById("sporttv").style.opacity = "1";
  document.getElementById("sporttv").style.cursor = "auto";

  document.getElementById("benficatv").disabled = false;
  document.getElementById("benficatv").style.opacity = "1";
  document.getElementById("benficatv").style.cursor = "auto";

}


// MENU WC

function addFilaHomens(){
    homens++;
    estado_homens = 1;
}

function addFilaMulheres(){
  mulheres++;
  estado_mulheres = 1;
}

function remFilaHomens(){
  if(homens > 0)
    homens--;
  if (homens == 0)
    estado_homens = 0;
  countdownHomens();
}

function remFilaMulheres(){
  if(mulheres > 0)
    mulheres--;
  if (mulheres == 0)
    estado_mulheres = 0;
  countdownMulheres();
}

function countdownHomens(){
  if(em_espera_homem == 1){
    if(countdown_homens > 0){
      countdown_homens--;
    }
    if(countdown_homens == 0){
      notifyHomens();
    }
  }
}

function countdownMulheres(){
  if(em_espera_mulher == 1){
    if(countdown_mulheres > 0){
      countdown_mulheres--;
    }
    if(countdown_mulheres == 0){
      notifyMulheres();
    }
  }
}


function showEstadoHomens(){
  if(estado_homens == 1){
    document.getElementById("texto_estado_homens").style.color = "red";
    document.getElementById("texto_estado_homens").innerHTML="OCUPADO";
  }
  if(estado_homens == 0){
    document.getElementById("texto_estado_homens").style.color = "green";
    document.getElementById("texto_estado_homens").innerHTML="LIVRE";
  }
  if(estado_homens == 2){
    document.getElementById("texto_estado_homens").style.color = "green";
    document.getElementById("texto_estado_homens").innerHTML="SUA VEZ!";
  }
}


function showEstadoMulheres(){
  if(estado_mulheres == 1){
    document.getElementById("texto_estado_mulheres").style.color = "red";
    document.getElementById("texto_estado_mulheres").innerHTML="OCUPADO";
  }
  if(estado_mulheres == 0){
    document.getElementById("texto_estado_mulheres").style.color = "green";
    document.getElementById("texto_estado_mulheres").innerHTML="LIVRE";
  }
  if(estado_mulheres == 2){
    document.getElementById("texto_estado_mulheres").style.color = "green";
    document.getElementById("texto_estado_mulheres").innerHTML="SUA VEZ!";
  }
}

function nrHomens(){
  document.getElementById("var_homens").innerHTML=homens;
}

function nrMulheres(){
  document.getElementById("var_mulheres").innerHTML=mulheres;
}

function vezHomens(){
  countdown_homens = homens - 1;
  em_espera_homem = 1;
}

function notifyHomens(){
  estado_homens = 2;
  aviso_wc.style.display = "block";
  em_espera_homem = 0;
}


function vezMulheres(){
  countdown_mulheres = mulheres - 1;
  em_espera_mulher = 1;
}

function notifyMulheres(){
  estado_mulheres = 2;
  aviso_wc.style.display = "block";
  em_espera_mulher = 0;
}

function aFrenteHomens(){
  if(em_espera_homem == 1)
    document.getElementById("nr_frente").innerHTML= countdown_homens;
}

function aFrenteMulheres(){
  if(em_espera_mulher == 1)
    document.getElementById("nr_frente").innerHTML= countdown_mulheres;
}


function setCurrentScreen (x) {
  currentScreen = x;
}

function showEmpregado() {
  hideandshow(empregado_main_2, empregado_main_1);
  hideandshow(botao_voltar, botoes_sim_nao);
}

function back() {
  hide(botao_voltar);

  if (currentScreen == 0) { // MAIN MENU
    hideandshow(empregado_main, mainmenu);
    show(botao_voltar);
    statusbar_empty();
  }

  if (currentScreen == 1) { // CONTROLO DA MUSICA
    hideandshow(empregado_main, controlo_da_musica);
    show(botao_voltar);
    show(servicos_div);
    statusbar_musica();
  }

  if (currentScreen == 2) { // CANAL DE TV
    hideandshow(empregado_main, canal_tv);
    show(botao_voltar);
    show(servicos_div);
    statusbar_tv();
  }

  if (currentScreen == 3) { // OCUPACAO DOS WCS
    hideandshow(empregado_main, ocupacao_dos_wcs);
    show(botao_voltar);
    show(servicos_div);
  }

    if (currentScreen == 4) { // SERVICOS MAIN
    hideandshow(empregado_main, servicos_div);
    show(botao_voltar);
    statusbar_servicos();
  }

  if (currentScreen == 5) { // NOVO PEDIDO
  hideandshow(empregado_main, newpedido);
  show(botao_voltar);
  statusbar_novo_pedido();
  }

  if (currentScreen == 6) { // NOVO PEDIDO
  hideandshow(empregado_main, contafinal);
  show(botao_voltar);
  statusbar_conta();
  }
}

function backAjuda() {
  if (currentScreen == 0) {
    hideandshow(ajuda_main, mainmenu);
    statusbar_empty();
  }

  if (currentScreen == 1) { // CONTROLO DA MUSICA
    hideandshow(ajuda_main, servicos_div);
    show(controlo_da_musica);
    statusbar_musica();
  }

  if (currentScreen == 2) { // CANAL DE TV
    hideandshow(ajuda_main, servicos_div);
    show(canal_tv);
    statusbar_tv();
  }

  if (currentScreen == 3) { // OCUPACAO DOS WCS
    hideandshow(ajuda_main, servicos_div);
    show(ocupacao_dos_wcs);
    statusbar_wc();
  }

    if (currentScreen == 4) { // SERVICOS MAIN
    hideandshow(ajuda_main, servicos_div);
    statusbar_servicos();
  }

  if (currentScreen == 5) { // SERVICOS MAIN
  hideandshow(ajuda_main, newpedido);
  statusbar_novo_pedido();
}

  if (currentScreen == 6) { // SERVICOS MAIN
  hideandshow(ajuda_main, contafinal);
  statusbar_conta();
  }

  hide(ajuda_principal);
  hide(ajuda_musica);
  hide(ajuda_wc);
  hide(ajuda_servicos);
  hide(ajuda_tv);
  hide(ajuda_novopedido);
  hide(ajuda_conta);

}


function lockButton(x){
  document.getElementById(x).disabled = true;
  document.getElementById(x).style.opacity = "0.6";
  document.getElementById(x).style.cursor = "not-allowed";
}

function unlockButton(x){
  document.getElementById(x).disabled = false;
  document.getElementById(x).style.opacity = "1";
  document.getElementById(x).style.cursor = "pointer";
}

function lockButtonClasse(x){
  var bar = document.getElementsByClassName(x)
  for (var i = 0; i < bar.length; i++) {
    bar[i].disabled = true;
    bar[i].style.opacity = "0.6";
    bar[i].style.cursor = "not-allowed";
  }
}

function unlockButtonClasse(x){

  var bar = document.getElementsByClassName(x)
  for (var i = 0; i < bar.length; i++) {
    bar[i].disabled = false;
    bar[i].style.opacity = "1";
    bar[i].style.cursor = "pointer";
  }
}

botao_fechar.onclick = function() {
    aviso_wc.style.display = "none";
    unlockButton('confirm_homem');
    hide(esperar_wc);
    unlockButton('confirm_mulher');
    clearButton(botao_homem);
    clearButton(botao_mulher);
  }

/*botao_fechar_pedido.onclick = function() {
    aviso_pedido.style.display = "none";
}*/


function fecharConfirm(x) {
  pop_personalizar.style.display = "none";
  x.style.display = "none";
}

function fecharCancel(x, y) {
  pop_personalizar.style.display = "none";
  x.style.display = "none";
  document.getElementById(y).reset();
}

  function addField (x) {
        var myTable = document.getElementById("myTable");
        var currentIndex = myTable.rows.length;
        var currentRow = myTable.insertRow(tabelaI);
        var items = items_totais;


        var currentCell = currentRow.insertCell(-1);
        if (x == 1) currentCell.innerHTML = "Bitoque";
        if (x == 2) currentCell.innerHTML = "Polvo à Lagareiro";

        if (x == 18) currentCell.innerHTML = "Cesto de Pão";
        if (x == 3) currentCell.innerHTML = "Azeitonas";
        if (x == 4) currentCell.innerHTML = "Paté de Atum";
        if (x == 5) currentCell.innerHTML = "Queijo";

        if (x == 6) currentCell.innerHTML = "Água Luso";
        if (x == 7) currentCell.innerHTML = "Coca-Cola";
        if (x == 8) currentCell.innerHTML = "Nestea Pêssego";

        if (x == 9) currentCell.innerHTML = "Bitoque";
        if (x == 10) currentCell.innerHTML = "Picanha";
        if (x == 11) currentCell.innerHTML = "Burger";

        if (x == 12) currentCell.innerHTML = "Dourada no Forno";
        if (x == 13) currentCell.innerHTML = "Polvo à Lagareiro";
        if (x == 14) currentCell.innerHTML = "Bifes de Atum";

        if (x == 15) currentCell.innerHTML = "Doce da Casa";
        if (x == 16) currentCell.innerHTML = "Mousse de Chocolate";
        if (x == 17) currentCell.innerHTML = "Baba de Camelo";




        currentCell = currentRow.insertCell(-1);
        if (x == 1) currentCell.innerHTML = "€5.00";
        if (x == 2) currentCell.innerHTML = "€8.00";

        if (x == 18) currentCell.innerHTML = "€0.65";
        if (x == 3) currentCell.innerHTML = "€0.85";
        if (x == 4) currentCell.innerHTML = "€0.50";
        if (x == 5) currentCell.innerHTML = "€0.70";

        if (x == 6) currentCell.innerHTML = "€1.00";
        if (x == 7) currentCell.innerHTML = "€1.30";
        if (x == 8) currentCell.innerHTML = "€1.30";

        if (x == 9) currentCell.innerHTML = "€5.00";
        if (x == 10) currentCell.innerHTML = "€8.50";
        if (x == 11) currentCell.innerHTML = "€5.50";

        if (x == 12) currentCell.innerHTML = "€6.00";
        if (x == 13) currentCell.innerHTML = "€8.00";
        if (x == 14) currentCell.innerHTML = "€5.00";

        if (x == 15) currentCell.innerHTML = "€2.50";
        if (x == 16) currentCell.innerHTML = "€2.00";
        if (x == 17) currentCell.innerHTML = "€2.00";


        currentCell = currentRow.insertCell(-1);

        if(items_totais == 0){
          unlockButton('finalizar_pedido');
        }
        items_totais++;

        if (x == 1) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_bitoque); \">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(1, tabelaI - 1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 2) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_polvo); \">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(2, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 18) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(18, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 3) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(3, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 4) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(4, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 5) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(5, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 6) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_agua);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(9, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 7) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_cola);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(10, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 8) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_nestea);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(11, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 9) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_bitoque);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(9, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 10) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_picanha);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(10, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 11) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_hamburguer);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(11, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 12) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_dourada);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(12, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 13) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_polvo);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(13, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 14) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_atum);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(14, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 15) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(15, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 16) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(16, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 17) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(17, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"


        if (x == 1) addPreco(5);
        if (x == 2) addPreco(8)

        if (x == 18) addPreco(0.65);
        if (x == 3) addPreco(0.85);
        if (x == 4) addPreco(0.50);
        if (x == 5) addPreco(0.70);

        if (x == 6) addPreco(1.00);
        if (x == 7) addPreco(1.30);
        if (x == 8) addPreco(1.30);

        if (x == 9) addPreco(5.00);
        if (x == 10) addPreco(8.50);
        if (x == 11) addPreco(5.50);

        if (x == 12) addPreco(6.00);
        if (x == 13) addPreco(8.00);
        if (x == 14) addPreco(5.00);

        if (x == 15) addPreco(2.50);
        if (x == 16) addPreco(2.00);
        if (x == 17) addPreco(2.00);

        pedidosV[pedidoCount] = x;
        pedidoCount++;

        tabelaI++;
    }


     function addFieldEstado (x) {
        var myTable = document.getElementById("tabela_estado_pedidos");
        var currentIndex = myTable.rows.length;
        var currentRow = myTable.insertRow(tabelaI);
        var items = items_totais;


        var currentCell = currentRow.insertCell(-1);
        if (x == 1) currentCell.innerHTML = "Bitoque";
        if (x == 2) currentCell.innerHTML = "Polvo à Lagareiro";

        if (x == 18) currentCell.innerHTML = "Cesto de Pão";
        if (x == 3) currentCell.innerHTML = "Azeitonas";
        if (x == 4) currentCell.innerHTML = "Paté de Atum";
        if (x == 5) currentCell.innerHTML = "Queijo";

        if (x == 6) currentCell.innerHTML = "Água Luso";
        if (x == 7) currentCell.innerHTML = "Coca-Cola";
        if (x == 8) currentCell.innerHTML = "Nestea Pêssego";

        if (x == 9) currentCell.innerHTML = "Bitoque";
        if (x == 10) currentCell.innerHTML = "Picanha";
        if (x == 11) currentCell.innerHTML = "Burger";

        if (x == 12) currentCell.innerHTML = "Dourada no Forno";
        if (x == 13) currentCell.innerHTML = "Polvo à Lagareiro";
        if (x == 14) currentCell.innerHTML = "Bifes de Atum";

        if (x == 15) currentCell.innerHTML = "Doce da Casa";
        if (x == 16) currentCell.innerHTML = "Mousse de Chocolate";
        if (x == 17) currentCell.innerHTML = "Baba de Camelo";


        currentCell = currentRow.insertCell(-1);

        if(items_totais == 0){
          unlockButton('finalizar_pedido');
        }
        items_totais++;

        if (x == 1) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_bitoque); \">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(1, tabelaI - 1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 2) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_polvo); \">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(2, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 18) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(18, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 3) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(3, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 4) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(4, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 5) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(5, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 6) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_agua);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(9, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 7) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_cola);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(10, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 8) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_nestea);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(11, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 9) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_bitoque);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(9, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 10) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_picanha);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(10, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 11) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_hamburguer);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(11, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 12) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_dourada);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(12, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 13) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_polvo);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(13, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 14) currentCell.innerHTML = "<table style=\"display: inline-block;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"personalizar_button\" id=\"voltar\" onclick=\"show(pop_personalizar); show(pop_personalizar_atum);\">Personalizar</button></div></td><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(14, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        if (x == 15) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(15, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 16) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(16, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"
        if (x == 17) currentCell.innerHTML = "<table style=\"display: inline-block; margin-left: 153.5px;\"><tr><td class=\"apenas\"><div style=\"margin-top: 16px; display: inline-block;\"><button class=\"delete_button\" id=\"voltar\" onclick=\"dtabelai(17, tabelaI-1);\"><img src=\"assets/cross.png\" style=\"width: 25px; height: 25px; margin-top: 2px;\"></button></div></td></tr></table>"

        tabelaI++;
    }

function dtabelai(x, y) {

  myTable.deleteRow(y);

  if (x == 1) removePreco(5);
  if (x == 2) removePreco(8);

  if (x == 3) removePreco(0.85);
  if (x == 4) removePreco(0.50);
  if (x == 5) removePreco(0.70);

  if (x == 6) removePreco(1.00);
  if (x == 7) removePreco(1.30);
  if (x == 8) removePreco(1.30);

  if (x == 9) removePreco(5.00);
  if (x == 10) removePreco(8.50);
  if (x == 11) removePreco(5.50);

  if (x == 12) removePreco(6.00);
  if (x == 13) removePreco(8.00);
  if (x == 14) removePreco(5.00);

  if (x == 15) removePreco(2.50);
  if (x == 16) removePreco(2.00);
  if (x == 17) removePreco(2.00);

  if (x == 18) removePreco(0.65);

  tabelaI--;
  items_totais--;

  if(items_totais == 0){
    lockButton('finalizar_pedido');
  }

  var index = pedidosV.indexOf(x);
  if (index > -1) {
    pedidosV.splice(index, 1);
}

   pedidoCount--;

}

function showPrecoTotal() {
  document.getElementById("preco_conta_span").innerHTML ="€" + parseFloat(Math.round(precoTotal * 100) / 100).toFixed(2);
  document.getElementById("preco_total_dinheiro").innerHTML = "€" + parseFloat(Math.round(precoTotal * 100) / 100).toFixed(2);
  document.getElementById("preco_total_multibanco").innerHTML = "€" + parseFloat(Math.round(precoTotal * 100) / 100).toFixed(2);
}

function addPrecoTotal (x) {
  precoTotal += x;
}

function removePrecoTotal(x){
  precoTotal -= x;
}

function showPrecoParcial() {
  document.getElementById("preco_div").innerHTML ="Total: €" + parseFloat(Math.round(precoParcial * 100) / 100).toFixed(2);
}

function addPrecoParcial (x) {
  precoParcial += x;
}

function removePrecoParcial(x){
  precoParcial -= x;
}

function addPreco(x){
  precoTotal += x;
  precoParcial += x;
}

function removePreco(x){
  precoTotal -= x;
  precoParcial -= x;
}


function clearPedido(){
  while(myTable.rows.length > 0) {
  myTable.deleteRow(0);
  }
  precoTotal = 0;
  tabelaI = 0;
  items_totais = 0;
}


function showPedidos() {

  for (i=0; i<pedidosV.length; i++) {
    addFieldEstado(pedidosV[i]);
  }
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}



function duplicate() {
    var original = document.getElementById('duplicater');
    var clone = original.cloneNode(true); // "deep" clone
    clone.id = "";
    original.parentNode.appendChild(clone);
}


function unlockFinalizar () {
  if(items_totais > 0) {
    unlockButton('finalizar_pedido');
    unlockButton('ver_e_alterar_estado_pedido');
    unlockButton('ver_ou_pagar_conta');

  }
  else if (items_totais == 0) {
    lockButton('finalizar_pedido');
    lockButton('ver_e_alterar_estado_pedido');
    lockButton('ver_ou_pagar_conta');
  }
}

function addBitoque() {
  var myDiv = document.getElementById("table_bitoque");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  bitoques[countBitoques++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(5);
  items_totais++;
  addBitoqueEstado();
  addBitoqueConta();
}

function removeBitoque() {
  var myDiv = document.getElementById(bitoques[--countBitoques]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(5);
  items_totais--;
  removeBitoqueEstado();
  removeBitoqueConta();
}



function addPolvo() {
  var myDiv = document.getElementById("table_polvo");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  polvos[countPolvo++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(8);
  items_totais++;
  addPolvoEstado();
   addPolvoConta();
}

function removePolvo() {
  var myDiv = document.getElementById(polvos[--countPolvo]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(8);
  items_totais--;
  removePolvoEstado();
   removePolvoConta();
}



function addPao() {
  var myDiv = document.getElementById("table_pao");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  paos[countPao++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(0.65);
  items_totais++;
  addPaoEstado();
   addPaoConta();
}

function removePao() {
  var myDiv = document.getElementById(paos[--countPao]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(0.65);
  items_totais--;
  removePaoEstado();
   removePaoConta();

}



function addAzeitonas() {
  var myDiv = document.getElementById("table_azeitonas");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  azeitonas[countAzeitonas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(0.85);
  items_totais++;
  addAzeitonasEstado();
   addAzeitonasConta();
}

function removeAzeitonas() {
  var myDiv = document.getElementById(azeitonas[--countAzeitonas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(0.85);
  items_totais--;
  removeAzeitonasEstado();
   removeAzeitonasConta();
}


function addPate() {
  var myDiv = document.getElementById("table_pate");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  pates[countPates++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(0.50);
  items_totais++;
  addPateEstado();
   addPateConta();
}

function removePate() {
  var myDiv = document.getElementById(pates[--countPates]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(0.50);
  items_totais--;
  removePateEstado();
   removePateConta();
}


function addQueijo() {
  var myDiv = document.getElementById("table_queijo");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  queijos[countQueijos++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(0.70);
  items_totais++;
  addQueijoEstado();
   addQueijoConta();
}

function removeQueijo() {
  var myDiv = document.getElementById(queijos[--countQueijos]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(0.70);
  items_totais--;
  removeQueijoEstado();
   removeQueijoConta();

}



function addAgua() {
  var myDiv = document.getElementById("table_agua");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  aguas[countAguas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(1.00);
  items_totais++;
  addAguaEstado();
   addAguaConta();
}

function removeAgua() {
  var myDiv = document.getElementById(aguas[--countAguas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(1.00);
  items_totais--;
  removeAguaEstado();
   removeAguaConta();
}

function addCola() {
  var myDiv = document.getElementById("table_cola");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  colas[countColas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(1.30);
  items_totais++;
  addColaEstado();
   addColaConta();
}

function removeCola() {
  var myDiv = document.getElementById(colas[--countColas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(1.30);
  items_totais--;
  removeColaEstado();
   removeColaConta();
}

function addNestea() {
  var myDiv = document.getElementById("table_nestea");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  nesteas[countNesteas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(1.30);
  items_totais++;
  addNesteaEstado();
   addNesteaConta();
}

function removeNestea() {
  var myDiv = document.getElementById(nesteas[--countNesteas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(1.30);
  items_totais--;
  removeNesteaEstado();
   removeNesteaConta();
}


function addPicanha() {
  var myDiv = document.getElementById("table_picanha");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  picanhas[countPicanhas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(8.50);
  items_totais++;
  addPicanhaEstado();
   addPicanhaConta();
}

function removePicanha() {
  var myDiv = document.getElementById(picanhas[--countPicanhas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(8.50);
  items_totais--;
  removePicanhaEstado();
   removePicanhaConta();

}

function addBurger() {
  var myDiv = document.getElementById("table_burger");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  burgers[countBurgers++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(5.50);
  items_totais++;
  addBurgerEstado();
   addBurgerConta();
}

function removeBurger() {
  var myDiv = document.getElementById(burgers[--countBurgers]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(5.50);
  items_totais--;
  removeBurgerEstado();
   removeBurgerConta();

}

function addDourada() {
  var myDiv = document.getElementById("table_dourada");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  douradas[countDouradas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(6.00);
  items_totais++;
  addDouradaEstado();
   addDouradaConta();
}

function removeDourada() {
  var myDiv = document.getElementById(douradas[--countDouradas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(6.00);
  items_totais--;
  removeDouradaEstado();
   removeDouradaConta();

}


function addAtum() {
  var myDiv = document.getElementById("table_atum");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  atuns[countAtuns++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(5.00);
  items_totais++;
  addAtumEstado();
   addAtumConta();
}

function removeAtum() {
  var myDiv = document.getElementById(atuns[--countAtuns]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(5.00);
  items_totais--;
  removeAtumEstado();
   removeAtumConta();
}

function addDoce() {
  var myDiv = document.getElementById("table_doce");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  doces[countDoces++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(2.50);
  items_totais++;
  addDoceEstado();
   addDoceConta();
}

function removeDoce() {
  var myDiv = document.getElementById(doces[--countDoces]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(2.50);
  items_totais--;
  removeDoceEstado();
   removeDoceConta();

}

function addMousse() {
  var myDiv = document.getElementById("table_mousse");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  mousses[countMousses++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(2.00);
  items_totais++;
  addMousseEstado();
   addMousseConta();
}

function removeMousse() {
  var myDiv = document.getElementById(mousses[--countMousses]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(2.00);
  items_totais--;
  removeMousseEstado();
   removeMousseConta();

}

function addBaba() {
  var myDiv = document.getElementById("table_baba");
  var tabela = document.getElementById("tabela_pedido");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  babas[countBabas++] = myDiv.id;
  myDiv.style.display = "inline-block";
  addPreco(2.00);
  items_totais++;
  addBabaEstado();
  addBabaConta();
}

function removeBaba() {
  var myDiv = document.getElementById(babas[--countBabas]);
  var tabela = document.getElementById("tabela_pedido");
  tabela.removeChild(myDiv);
  removePreco(2.00);
  items_totais--;
  removeBabaEstado();
  removeBabaConta();

}



function addBitoqueEstado() {
  var myDiv = document.getElementById("table_bitoque_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  bitoquesE[countBitoquesE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBitoqueEstado() {
  var myDiv = document.getElementById(bitoquesE[--countBitoquesE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addPolvoEstado() {
  var myDiv = document.getElementById("table_polvo_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  polvosE[countPolvoE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePolvoEstado() {
  var myDiv = document.getElementById(polvosE[--countPolvoE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addDouradaEstado() {
  var myDiv = document.getElementById("table_dourada_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  douradasE[countDouradasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeDouradaEstado() {
  var myDiv = document.getElementById(douradasE[--countDouradasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addPaoEstado() {
  var myDiv = document.getElementById("table_pao_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  paosE[countPaoE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePaoEstado() {
  var myDiv = document.getElementById(paosE[--countPaoE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addAzeitonasEstado() {
  var myDiv = document.getElementById("table_azeitonas_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  azeitonasE[countAzeitonasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAzeitonasEstado() {
  var myDiv = document.getElementById(azeitonasE[--countAzeitonasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addPateEstado() {
  var myDiv = document.getElementById("table_pate_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  patesE[countPatesE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePateEstado() {
  var myDiv = document.getElementById(patesE[--countPatesE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addQueijoEstado() {
  var myDiv = document.getElementById("table_queijo_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  queijosE[countQueijosE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeQueijoEstado() {
  var myDiv = document.getElementById(queijosE[--countQueijosE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addPicanhaEstado() {
  var myDiv = document.getElementById("table_picanha_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  picanhasE[countPicanhasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePicanhaEstado() {
  var myDiv = document.getElementById(picanhasE[--countPicanhasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addBurgerEstado() {
  var myDiv = document.getElementById("table_burger_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  burgersE[countBurgersE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBurgerEstado() {
  var myDiv = document.getElementById(burgersE[--countBurgersE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addAtumEstado() {
  var myDiv = document.getElementById("table_atum_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  atunsE[countAtunsE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAtumEstado() {
  var myDiv = document.getElementById(atunsE[--countAtunsE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addAguaEstado() {
  var myDiv = document.getElementById("table_agua_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  aguasE[countAguasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAguaEstado() {
  var myDiv = document.getElementById(aguasE[--countAguasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addColaEstado() {
  var myDiv = document.getElementById("table_cola_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  colasE[countColasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeColaEstado() {
  var myDiv = document.getElementById(colasE[--countColasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addNesteaEstado() {
  var myDiv = document.getElementById("table_nestea_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  nesteasE[countNesteasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeNesteaEstado() {
  var myDiv = document.getElementById(nesteasE[--countNesteasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}


function addBabaEstado() {
  var myDiv = document.getElementById("table_baba_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  babasE[countBabasE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBabaEstado() {
  var myDiv = document.getElementById(babasE[--countBabasE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addMousseEstado() {
  var myDiv = document.getElementById("table_mousse_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  moussesE[countMoussesE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeMousseEstado() {
  var myDiv = document.getElementById(moussesE[--countMoussesE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function addDoceEstado() {
  var myDiv = document.getElementById("table_doce_estado");
  var tabela = document.getElementById("tabela_estado");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "table_bitoque" + ++z;
  docesE[countDocesE++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeDoceEstado() {
  var myDiv = document.getElementById(docesE[--countDocesE]);
  var tabela = document.getElementById("tabela_estado");
  tabela.removeChild(myDiv);
}

function removeAll() {

  var tabela = document.getElementById("tabela_pedido");
    var children = tabela.children;
for (var i = 0; i < children.length; i++) {
  var tableChild = children[i];
  tableChild.style.display = "none";
  }

}

function removeAllE() {

  var tabela = document.getElementById("tabela_estado");
    var children = tabela.children;
for (var i = 0; i < children.length; i++) {
  var tableChild = children[i];
  tableChild.style.display = "none";
  }

}

function removeAllC() {

  var tabela = document.getElementById("tabela_estado");
    var children = tabela.children;
for (var i = 0; i < children.length; i++) {
  var tableChild = children[i];
  tableChild.style.display = "none";
  }

}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function runEstado() {
  timeoutSetProgressBarBitoque();
  timeoutSetProgressBarPolvo();
  timeoutSetProgressBarPao();
  timeoutSetProgressBarAzeitonas();
  timeoutSetProgressBarPate();
  timeoutSetProgressBarQueijo();
  timeoutSetProgressBarPicanha();
  timeoutSetProgressBarBurger();
  timeoutSetProgressBarDourada();
  timeoutSetProgressBarAtum();
  timeoutSetProgressBarNestea();
  timeoutSetProgressBarAgua();
  timeoutSetProgressBarCola();
  timeoutSetProgressBarMousse();
  timeoutSetProgressBarDoce();
  timeoutSetProgressBarBaba();

}




function timeoutSetProgressBarBitoque() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(50000, 60000);
  var random4 = getRndInteger(60000, 70000);
  var random5 = getRndInteger(70000, 80000);
  setTimeout(changePrepararBitoque, random1);
  setTimeout(changeConfecionarBitoque, random2);
  setTimeout(changeEntregarBitoque, random3);
  setTimeout(changeEntregueBitoque, random4);
}

function changePrepararBitoque() {
  var bar = document.getElementsByClassName("progress_bar_preparar_bitoque");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarBitoque() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_bitoque");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_bitoque');
}

function changeEntregarBitoque() {
  var bar = document.getElementsByClassName("progress_bar_entregar_bitoque");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntregueBitoque() {
  var bar = document.getElementsByClassName("progress_bar_entregue_bitoque");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarPicanha() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(30000, 40000);
  var random4 = getRndInteger(40000, 50000);
  var random5 = getRndInteger(50000, 60000);
  setTimeout(changePrepararPicanha, random1);
  setTimeout(changeConfecionarPicanha, random2);
  setTimeout(changeEntregarPicanha, random3);
  setTimeout(changeEntreguePicanha, random4);
}

function changePrepararPicanha() {
  var bar = document.getElementsByClassName("progress_bar_preparar_picanha");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarPicanha() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_picanha");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_picanha');
}

function changeEntregarPicanha() {
  var bar = document.getElementsByClassName("progress_bar_entregar_picanha");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntreguePicanha() {
  var bar = document.getElementsByClassName("progress_bar_entregue_picanha");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}



function timeoutSetProgressBarBurger() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(30000, 40000);
  var random4 = getRndInteger(40000, 50000);
  var random5 = getRndInteger(50000, 60000);
  setTimeout(changePrepararBurger, random1);
  setTimeout(changeConfecionarBurger, random2);
  setTimeout(changeEntregarBurger, random3);
  setTimeout(changeEntregueBurger, random4);
}

function changePrepararBurger() {
  var bar = document.getElementsByClassName("progress_bar_preparar_burger");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarBurger() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_burger");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_burger');
}

function changeEntregarBurger() {
  var bar = document.getElementsByClassName("progress_bar_entregar_burger");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntregueBurger() {
  var bar = document.getElementsByClassName("progress_bar_entregue_burger");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}



function timeoutSetProgressBarPolvo() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(30000, 40000);
  var random4 = getRndInteger(40000, 50000);
  var random5 = getRndInteger(50000, 60000);
  setTimeout(changePrepararPolvo, random1);
  setTimeout(changeConfecionarPolvo, random2);
  setTimeout(changeEntregarPolvo, random3);
  setTimeout(changeEntreguePolvo, random4);
}

function changePrepararPolvo() {
  var bar = document.getElementsByClassName("progress_bar_preparar_polvo");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarPolvo() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_polvo");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_polvo');
}

function changeEntregarPolvo() {
  var bar = document.getElementsByClassName("progress_bar_entregar_polvo");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntreguePolvo() {
  var bar = document.getElementsByClassName("progress_bar_entregue_polvo");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}



function timeoutSetProgressBarDourada() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(30000, 40000);
  var random4 = getRndInteger(40000, 50000);
  var random5 = getRndInteger(50000, 60000);
  setTimeout(changePrepararDourada, random1);
  setTimeout(changeConfecionarDourada, random2);
  setTimeout(changeEntregarDourada, random3);
  setTimeout(changeEntregueDourada, random4);
}

function changePrepararDourada() {
  var bar = document.getElementsByClassName("progress_bar_preparar_dourada");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarDourada() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_dourada");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_dourada');
}

function changeEntregarDourada() {
  var bar = document.getElementsByClassName("progress_bar_entregar_dourada");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntregueDourada() {
  var bar = document.getElementsByClassName("progress_bar_entregue_dourada");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}


function timeoutSetProgressBarAtum() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  var random3 = getRndInteger(30000, 40000);
  var random4 = getRndInteger(40000, 50000);
  var random5 = getRndInteger(50000, 60000);
  setTimeout(changePrepararAtum, random1);
  setTimeout(changeConfecionarAtum, random2);
  setTimeout(changeEntregarAtum, random3);
  setTimeout(changeEntregueAtum, random4);
}

function changePrepararAtum() {
  var bar = document.getElementsByClassName("progress_bar_preparar_atum");
    for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeConfecionarAtum() {
  var bar = document.getElementsByClassName("progress_bar_confecionar_atum");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
  lockButtonClasse('personalizar_atum');
}

function changeEntregarAtum() {
  var bar = document.getElementsByClassName("progress_bar_entregar_atum");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
}

function changeEntregueAtum() {
  var bar = document.getElementsByClassName("progress_bar_entregue_atum");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}



function timeoutSetProgressBarPao() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarPao, random1);
  setTimeout(changeEntreguePao, random2);
}

function changeEntregarPao() {
  var bar = document.getElementsByClassName("progress_bar_entregar_pao");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_pao');
}

function changeEntreguePao() {
  var bar = document.getElementsByClassName("progress_bar_entregue_pao");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}


function timeoutSetProgressBarAzeitonas() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarAzeitonas, random1);
  setTimeout(changeEntregueAzeitonas, random2);
}

function changeEntregarAzeitonas() {
  var bar = document.getElementsByClassName("progress_bar_entregar_azeitonas");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_azeitonas');
}

function changeEntregueAzeitonas() {
  var bar = document.getElementsByClassName("progress_bar_entregue_azeitonas");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarPate() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarPate, random1);
  setTimeout(changeEntreguePate, random2);
}

function changeEntregarPate() {
  var bar = document.getElementsByClassName("progress_bar_entregar_pate");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_pate');
}

function changeEntreguePate() {
  var bar = document.getElementsByClassName("progress_bar_entregue_pate");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarQueijo() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarQueijo, random1);
  setTimeout(changeEntregueQueijo, random2);
}

function changeEntregarQueijo() {
  var bar = document.getElementsByClassName("progress_bar_entregar_queijo");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_queijo');
}

function changeEntregueQueijo() {
  var bar = document.getElementsByClassName("progress_bar_entregue_queijo");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarAgua() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarAgua, random1);
  setTimeout(changeEntregueAgua, random2);
}

function changeEntregarAgua() {
  var bar = document.getElementsByClassName("progress_bar_entregar_agua");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_agua');
}

function changeEntregueAgua() {
  var bar = document.getElementsByClassName("progress_bar_entregue_agua");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarCola() {
  var random1 = getRndInteger(30000, 40000);
  var random2 = getRndInteger(40000, 50000);
  setTimeout(changeEntregarCola, random1);
  setTimeout(changeEntregueCola, random2);
}

function changeEntregarCola() {
  var bar = document.getElementsByClassName("progress_bar_entregar_cola");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_cola');
}

function changeEntregueCola() {
  var bar = document.getElementsByClassName("progress_bar_entregue_cola");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarNestea() {
  var random1 = getRndInteger(10000, 20000);
  var random2 = getRndInteger(20000, 30000);
  setTimeout(changeEntregarNestea, random1);
  setTimeout(changeEntregueNestea, random2);
}

function changeEntregarNestea() {
  var bar = document.getElementsByClassName("progress_bar_entregar_nestea");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_nestea');
}

function changeEntregueNestea() {
  var bar = document.getElementsByClassName("progress_bar_entregue_nestea");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}





function timeoutSetProgressBarDoce() {
  var random1 = getRndInteger(100000, 100000);
  var random2 = getRndInteger(110000, 110000);
  setTimeout(changeEntregarDoce, random1);
  setTimeout(changeEntregueDoce, random2);
}

function changeEntregarDoce() {
  var bar = document.getElementsByClassName("progress_bar_entregar_doce");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_doce');
}

function changeEntregueDoce() {
  var bar = document.getElementsByClassName("progress_bar_entregue_doce");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarMousse() {
  var random1 = getRndInteger(100000, 100000);
  var random2 = getRndInteger(110000, 110000);
  setTimeout(changeEntregarMousse, random1);
  setTimeout(changeEntregueMousse, random2);
}

function changeEntregarMousse() {
  var bar = document.getElementsByClassName("progress_bar_entregar_mousse");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_mousse');
}

function changeEntregueMousse() {
  var bar = document.getElementsByClassName("progress_bar_entregue_mousse");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function timeoutSetProgressBarBaba() {
  var random1 = getRndInteger(100000, 100000);
  var random2 = getRndInteger(110000, 110000);
  setTimeout(changeEntregarBaba, random1);
  setTimeout(changeEntregueBaba, random2);
}

function changeEntregarBaba() {
  var bar = document.getElementsByClassName("progress_bar_entregar_baba");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#A9A9A9";
    }
    lockButtonClasse('personalizar_baba');
}

function changeEntregueBaba() {
  var bar = document.getElementsByClassName("progress_bar_entregue_baba");
   for (var i = 0; i < bar.length; i++) {
        bar[i].style.backgroundColor="#82FA58";
    }
}

function verifyPedidos() {
  if (items_totais > 0) hide(sempedidos);
  else if (items_totais == 0) show_alt(sempedidos);
}

function setPrecoParcial(x){
  precoParcial = x;
}

function setPrecoTotal(x){
  precoTotal = x;
}

function addBitoqueConta() {
  var myDiv = document.getElementById("conta_bitoque");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_bitoque" + ++z;
  bitoquesC[countBitoquesC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBitoqueConta() {
  var myDiv = document.getElementById(bitoquesC[--countBitoquesC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addPolvoConta() {
  var myDiv = document.getElementById("conta_polvo");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_polvo" + ++z;
  polvosC[countPolvoC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePolvoConta() {
  var myDiv = document.getElementById(polvosC[--countPolvoC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addDouradaConta() {
  var myDiv = document.getElementById("conta_dourada");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_dourada" + ++z;
  douradasC[countDouradasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeDouradaConta() {
  var myDiv = document.getElementById(douradasC[--countDouradasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addPaoConta() {
  var myDiv = document.getElementById("conta_pao");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_pao" + ++z;
  paosC[countPaoC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePaoConta() {
  var myDiv = document.getElementById(paosC[--countPaoC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addAzeitonasConta() {
  var myDiv = document.getElementById("conta_azeitonas");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_azeitonas" + ++z;
  azeitonasC[countAzeitonasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAzeitonasConta() {
  var myDiv = document.getElementById(azeitonasC[--countAzeitonasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addPateConta() {
  var myDiv = document.getElementById("conta_pate");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_pate" + ++z;
  patesC[countPatesC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePateConta() {
  var myDiv = document.getElementById(patesC[--countPatesC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addQueijoConta() {
  var myDiv = document.getElementById("conta_queijo");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_queijo" + ++z;
  queijosC[countQueijosC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeQueijoConta() {
  var myDiv = document.getElementById(queijosC[--countQueijosC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addPicanhaConta() {
  var myDiv = document.getElementById("conta_picanha");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_picanha" + ++z;
  picanhasC[countPicanhasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removePicanhaConta() {
  var myDiv = document.getElementById(picanhasC[--countPicanhasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addBurgerConta() {
  var myDiv = document.getElementById("conta_burger");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_burger" + ++z;
  burgersC[countBurgersC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBurgerConta() {
  var myDiv = document.getElementById(burgersC[--countBurgersC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addAtumConta() {
  var myDiv = document.getElementById("conta_atum");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_atum" + ++z;
  atunsC[countAtunsC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAtumConta() {
  var myDiv = document.getElementById(atunsC[--countAtunsC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addAguaConta() {
  var myDiv = document.getElementById("conta_agua");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_agua" + ++z;
  aguasC[countAguasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeAguaConta() {
  var myDiv = document.getElementById(aguasC[--countAguasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addColaConta() {
  var myDiv = document.getElementById("conta_cola");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_cola" + ++z;
  colasC[countColasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeColaConta() {
  var myDiv = document.getElementById(colasC[--countColasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addNesteaConta() {
  var myDiv = document.getElementById("conta_nestea");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_nestea" + ++z;
  nesteasC[countNesteasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeNesteaConta() {
  var myDiv = document.getElementById(nesteasC[--countNesteasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}


function addBabaConta() {
  var myDiv = document.getElementById("conta_baba");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_baba" + ++z;
  babasC[countBabasC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeBabaConta() {
  var myDiv = document.getElementById(babasC[--countBabasC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addMousseConta() {
  var myDiv = document.getElementById("conta_mousse");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_mousse" + ++z;
  moussesC[countMoussesC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeMousseConta() {
  var myDiv = document.getElementById(moussesC[--countMoussesC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function addDoceConta() {
  var myDiv = document.getElementById("conta_doce");
  var tabela = document.getElementById("tabela_conta");
  tabela.appendChild(myDiv.cloneNode(true));
  myDiv.id = "conta_doce" + ++z;
  docesC[countDocesC++] = myDiv.id;
  myDiv.style.display = "inline-block";
}

function removeDoceConta() {
  var myDiv = document.getElementById(docesC[--countDocesC]);
  var tabela = document.getElementById("tabela_conta");
  tabela.removeChild(myDiv);
}

function hide_middle(){
  document.getElementById("middletable2").style.display = 'none';
}
