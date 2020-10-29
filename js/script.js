// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.



// pc genera 16 numeri random da 1 a 100 non duplicati

  var elencoNumRan = getRandom(1, 100, 16)
    console.log ("16 numeri random: " + elencoNumRan);


// chiedo i numeri all'utente
var esito = chiedoNumUte(84);


// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
document.getElementById('titolo').innerHTML = "Il tuo punteggio è: " + esito;




// FUNZIONI


//funzione per creare numeri e mettere nell arrey
function getRandom(min, max, reps){
    var numeri=[];
    var i = 1;
    while (numeri.length < reps &&  i <= reps + 1){
        var a = Math.floor(Math.random() * (max - min + 1)) + min;
        if (numeri.includes(a) === false){
            numeri.push(a);
            i++;
        } else{
          i--;
        }
        }
    return numeri;
  }



// funzione per chiedere numeroUtente

function chiedoNumUte(x)
{
  var conteggioPunti = 0;
  for (var y = 0; (y < x && y != x); y++)
  {
    var numeroUtente = parseInt(prompt("scrivi un numero compreso tra 1 e 100"));
    console.log("L'utente ha inserito: " + numeroUtente);
    var controllo = 0;
    for (var i = 0; i < elencoNumRan.length; i++)
    {
      var ok = elencoNumRan[i]
      if (numeroUtente === ok)
      {
      var controllo = 1;
      }
    }
    if (controllo == 1)
    {
      // console.log("Hai preso una bomba!");
      document.getElementById('perso').innerHTML = "Hai scelto: " + numeroUtente +  "<br>" + " Hai preso una bomba! ";
      y = x;
    } else
    {
      // console.log("Non hai preso una bomba, vai avanti!");
      document.getElementById('avanza').innerHTML = "Hai scelto: " + numeroUtente + "<br>" + " Non hai preso una bomba, vai avanti! ";
      conteggioPunti = conteggioPunti + 1;
    }
  }
  console.log("Punteggio: " + conteggioPunti,);
  return conteggioPunti;
}
