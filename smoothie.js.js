
document.getElementById('quiz-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const risultatoDiv = document.getElementById('risultato');
  risultatoDiv.innerHTML = '';

  const colore = document.querySelector('input[name="q2"]:checked')?.value || '';
  const effetto = document.querySelector('input[name="q4"]:checked')?.value || '';

  let titolo = '';
  let descrizione = '';
  let immagine = '';

  if (colore === 'rosa' || effetto === 'dolce') {
    titolo = '💗 Smoothie Rosé';
    descrizione = 'Fragole, banana e latte di mandorla. Una dolce coccola rosa.';
    immagine = 'img/rose.png';
  } else if (colore === 'verde' || effetto === 'detox') {
    titolo = '🍃 Smoothie Verde Detox';
    descrizione = 'Mela verde, lime e spirulina. Fresco e rinvigorente.';
    immagine = 'img/verde.png';
  } else if (colore === 'viola' || effetto === 'anti_stress') {
    titolo = '💜 Smoothie Viola Relax';
    descrizione = 'Mirtilli, lavanda e latte vegetale. Rilassante e armonioso.';
    immagine = 'img/viola.png';
  } else {
    titolo = '🌞 Smoothie Energia Gialla';
    descrizione = 'Mango, ananas e curcuma. Una carica esplosiva.';
    immagine = 'img/giallo.png';
  }

  risultatoDiv.innerHTML = `
    <h2>${titolo}</h2>
    <p>${descrizione}</p>
    <img src="${immagine}" alt="Smoothie" style="max-width: 300px; border-radius: 12px; margin-top: 10px;">
  `;
});
