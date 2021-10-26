/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  // TODO útfæra
  if (bestOf = (bestOf < MAX_BEST_OF && bestOf%2==1)){
    return true;
  } else{
    return false;
  }
}
// console.assert(isValidBestOf(1) === true, '1 er valid best of');
// console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
// console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  // TODO útfæra
  if (play == '1'){
    console.log('1 táknar skæri');
  }
  else if (play == '2'){
    console.log('2 táknar blað');
  }
  else if (play == '3'){
    console.log('3 táknar steinn');
  }else{
    console.log('annað er óþekkt');
  }

}
// console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
// console.assert(playAsText('2') === 'Blað', '2 táknar blað');
// console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
// console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  // TODO útfæra
  if (player === null){
    return 20;
  }else{
    console.log('þú:');
    playAsText(player);
    console.log('tölvan:');
    playAsText(computer);
    switch (player){
      case '1':
        if (computer == '2'){
          console.log('Skæri vinnur blað');
          return +1;
        }else if (computer == '3'){
          console.log('skæri tapar fyrir stein');
          return -1;
        }else if (computer == '1'){
          console.log('skæri og skæri eru jafntefli');
          return 0;
        }  
      
        case '2':
          if (computer == '3'){
            console.log('blað vinnur stein');
            return +1;
          }else if (computer == '1'){
            console.log('blað tapar fyrir skæri');
            return -1;
          }else if (computer == '2') {
            console.log('blað og blað eru jafntefli');
          return 0;
        }
      case '3': 
        if (computer == '1'){
          console.log('steinn vinnur skæri');
          return +1;
        }else if (computer == '2'){
          console.log('steinn tapar fyrir blað');
          return -1;
        }else if (computer == '3'){
          console.log('steinn og steinn eru jafntefli');
          return 0;
        }
      default :
        console.log('Ógild umferð, tölvan vinnur');
        return -1;
      }
  }
}
// console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
// console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
// console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
// console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  console.log('Hvaða tákn viltu? 1=blað, 2=skæri,3=steinn.')
  let player = prompt(message= '1=blað,2=skæri,3=steinn');
  let computer = Math.floor(Math.random() * 3) + 1;
  let x = checkGame(player,computer);
  if (x == +1){
    console.log('Þú vinnur þessa umferð');
    return +1;
  }else if (x == 0){
    console.log('Jafntefli');
    return 0;
  }else if (x == -1){
    console.log('Tölvan vinnur þessa umferð');
    return -1;
  }else if (x == 20){
    return 20;
  }
  // TODO útfæra
  // 1. Spyrja um hvað spilað, ef cancel, hætta
  // 2. Ef ógilt, tölva vinnur
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 3) + 1` sem skilar heiltölu á [1, 3]
  // 4. Nota `checkGame()` til að finna hver vann
  // 5. Birta hver vann
  // 6. Skila hver vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  // TODO útfæra
  console.log('Hversu marga leiki viltu spila?');
  bestOf = prompt(message='Hversu marga leiki? milli 0 og 10, bara oddatölur.');
  let test = isValidBestOf(bestOf)
  if ( test == true){
    let leikir = 0;
    let stada = 0;
    while ((leikir + stada) < bestOf && (leikir - stada) < bestOf){
    let x = round();
    if (x == +1){
      stada = stada + 1;
      leikir = leikir + 1;
    }else if (x == -1){
      stada = stada - 1;
      leikir = leikir + 1;
    }else if (x == 20){
      console.log('leikur stöðvaður')
      return;
    }
    }
    if (stada > 0){
      console.log('Þú ert hetja mannkynsins og hefur sigrað tölvuna');
      wins = wins + 1;
    }if (stada < 0){
      console.log('Allt er tapað, tölvan hefur unnið. Öll von er úti \n Nema þú viljir reyna aftur?');
      losses = losses + 1;
    }
  }else {
    console.log('ógildur fjöldi leikja, leikir verða að vera oddatala \n stærri en 0, minni en 10');
  }
  // 1. Spyrja um fjölda leikja
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur
  // 4. Birta hvort spilari eða tölva vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */
function games() {
  // TODO útfæra
  let margir = losses + wins;
  let winsH = (wins/margir) * 100;
  let lossesH = (losses/margir) * 100;
  let winsHlutf = winsH.toFixed(2);
  let lossesHlutf = lossesH.toFixed(2);
  if(margir ==! 0){
    console.log('þú hefur spilað ' + margir + ' leiki')
    console.log('Þú hefur unnið ' + wins + ', eða ' + winsHlutf + '% af heild.')
    console.log('Þú hefur tapað ' + losses + ', eða ' + lossesHlutf + '% af heild.')
  }else {
    console.log('Þú hefur spilað 0 leiki.')
  }
}