
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const risultatoDiv = document.getElementById('risultato');
  risultatoDiv.innerHTML = '';

  // Estrai alcune risposte chiave
  const energia = document.querySelector('input[name="q1"]:checked')?.value || '';
  const colore = document.querySelector('input[name="q2"]:checked')?.value || '';
  const effetto = document.querySelector('input[name="q4"]:checked')?.value || '';
  const ingredienti = document.querySelectorAll('input[name="q5"]:checked');

  const haAltro = document.querySelector('input[name="q1_altro"]').value !== '' ||
                  document.querySelector('input[name="q2_altro"]').value !== '' ||
                  document.querySelector('input[name="q3_altro"]').value !== '' ||
                  document.querySelector('input[name="q4_altro"]').value !== '' ||
                  document.querySelector('input[name="q5_altro"]').value !== '' ||
                  document.querySelector('input[name="q6_altro"]').value !== '' ||
                  document.querySelector('input[name="q7_altro"]').value !== '';

  // Analizza le risposte per assegnare un risultato
  let titolo = '';
  let descrizione = '';
  let immagine = '';

  if (haAltro) {
    titolo = '🌟 Smoothie Iris Special';
    descrizione = 'Una miscela unica creata su misura per te, ispirata al tuo mondo sensoriale. Con ingredienti selezionati e vibrazioni fuori dal comune.';
    immagine = 'img/special.png';
  } else if (colore === 'rosa' || effetto === 'dolce') {
    titolo = '💗 Smoothie Rosé';
    descrizione = 'Fragole, banana, latte di mandorla e un tocco di rosa per addolcire i tuoi pensieri.';
    immagine = 'img/rose.png';
  } else if (colore === 'verde' || effetto === 'detox') {
    titolo = '🍃 Smoothie Verde Detox';
    descrizione = 'Mela verde, cetriolo, lime e spirulina per un effetto drenante e rinvigorente.';
    immagine = 'img/verde.png';
  } else if (colore === 'viola' || effetto === 'anti_stress') {
    titolo = '💜 Smoothie Viola Relax';
    descrizione = 'Mirtilli, lavanda, avena e latte vegetale per ritrovare il tuo centro.';
    immagine = 'img/viola.png';
  } else {
    titolo = '🌞 Smoothie Energia Gialla';
    descrizione = 'Mango, curcuma, ananas e latte di cocco per una carica esplosiva e luminosa.';
    immagine = 'img/giallo.png';
  }

  // Mostra il risultato
  risultatoDiv.innerHTML = `
    <h2>${titolo}</h2>
    <p>${descrizione}</p>
    <img src="${immagine}" alt="Smoothie" style="max-width: 300px; border-radius: 12px; margin-top: 10px;">
  `;
});
