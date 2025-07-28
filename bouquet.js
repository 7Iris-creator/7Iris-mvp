
document.getElementById('quiz-fiori').addEventListener('submit', function(event) {
  event.preventDefault();

  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const q3 = document.querySelector('input[name="q3"]:checked');

  if (!q1 || !q2 || !q3) {
    alert("Per favore, rispondi a tutte le domande!");
    return;
  }

  let risultato = "";

  if (q1.value === "amore" && q2.value === "rosa" && q3.value === "dolce") {
    risultato = "💗 Bouquet Romantico – Rose rosa, peonie e gipsofila";
  } else if (q1.value === "compleanno" && q2.value === "giallo" && q3.value === "solare") {
    risultato = "🌼 Bouquet Solare – Girasoli, margherite e fiori di campo";
  } else if (q1.value === "grazie" && q2.value === "bianco" && q3.value === "raffinata") {
    risultato = "🤍 Bouquet Eleganza – Calle bianche, orchidee e verde decorativo";
  } else {
    risultato = "🌸 Bouquet Iris – Una composizione unica creata con amore per ogni occasione!";
  }

  document.getElementById('risultato-bouquet').innerText = risultato;
});
