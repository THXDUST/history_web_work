const questions = [
  {
    question: "Quando ocorreu a Revolução de Fevereiro, que iniciou a Revolução Russa de 1917?",
    options: ["Março de 1917", "Janeiro de 1917", "Fevereiro de 1917", "Dezembro de 1916"],
    correct: 0,
    explanation: "A data de inicio da fase de fevereiro da revolução é 8 de Março de 1917."
  },
  {
    question: "Qual foi o principal líder da Revolução de Outubro de 1917?",
    options: ["Josef Stalin", "Leon Trotsky", "Vladimir Lenin", "Nikolai Bukharin"],
    correct: 2,
    explanation: "Quando Lenin assumiu o poder, a Rússia se retirou da primeira guerra."
  },
  {
    question: "Que partido político liderou a Revolução de Outubro de 1917?",
    options: ["Mencheviques", "Socialistas-Revolucionários", "Bolcheviques", "Cadetes"],
    correct: 2,
    explanation: "Os bolcheviques chegaram ao poder por meio de um levante armado."
  },
  {
    question: "Qual foi o nome do tratado que retirou a Rússia da Primeira Guerra Mundial?",
    options: ["Tratado de Brest-Litovsk", "Tratado de Versalhes", "Tratado de Paris", "Tratado de Tordesilhas"],
    correct: 0,
    explanation: "Quando Lenin assumiu o poder, a Rússia saiu primeira guerra por meio da assinatura do tratado de Brest-Litovisk"
  },
  {
    question: "Quem foi o último czar da Rússia antes da Revolução Russa?",
    options: ["Nicolau I", "Alexandre II", "Alexandre III", "Nicolau II"],
    correct: 3,
    explanation: "Nicolau II foi o sucessor de Alexandre III no período de 1894 a 1917, sendo o último Czar da Rússia Imperial."
  },
  {
    question: "Qual foi o papel de Leon Trotsky na Revolução Russa?",
    options: ["Ele foi um líder dos Mencheviques", "Ele foi um líder dos Cadetes", "Ele foi o líder do Exército Vermelho", "Ele foi o último czar da Rússia"],
    correct: 2,
    explanation: "Leon Trotsky foi o organizador e comandante do Exército Vermelho e fundador do Poliburo do PCUS, fundado em 1917 para gerenciar a Revolução Bolchevique."
  },
  {
    question: "Em que ano foi criado o Partido Comunista da União Soviética?",
    options: ["1918", "1919", "1920", "1921"],
    correct: 0,
    explanation: "A revolução no fim da primeira guerra, somado a todas as crises da época levou ao recaimento do império Russo e formação da União Soviética."
  },
  {
    question: "Qual foi o evento que marcou o início da Guerra Civil Russa?",
    options: ["A abdicação do czar Nicolau II", "A assinatura do Tratado de Brest-Litovsk", "A Revolução de Outubro de 1917", "A dissolução da Assembleia Constituinte"],
    correct: 2,
    explanation: "A guerra civil se deu inicio devido a Revolução de Outubro pelo controle do poder."
  },
  {
    question: "Qual foi a principal causa da Revolução de Fevereiro de 1917?",
    options: ["A insatisfação com a política externa russa", "A derrota na Primeira Guerra Mundial e as condições econômicas", "A influência de ideias socialistas", "A crise agrária"],
    correct: 1,
    explanation: "Com a saída da Rússia da guerra por falta das condições do país, isso gerou uma insatisfação na população com o governo, e assim começou a revolução."
  },
  {
    question: "Qual foi a consequência imediata da Revolução de Outubro de 1917?",
    options: ["A ascensão de Josef Stalin ao poder", "A abdicação do czar Nicolau II", "A criação do Governo Provisório", "A tomada do poder pelos Bolcheviques"],
    correct: 3,
    explanation: "Lenin, um dos Bolcheviques, tomou o poder e estabeleceu uma burocracia na Rússia."
  }
];

let currentQuestionIndex = 0;
let score = 0;

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function renderQuestion() {
  const question = questions[currentQuestionIndex];
  const options = [...question.options];
  const correctAnswer = options[question.correct];

  shuffleArray(options);

  document.getElementById('title').innerText = question.question;
  const optionsContainer = document.getElementById('options');
  const explan = document.getElementById('explanation');
  optionsContainer.innerHTML = '';
  explan.innerHTML = '';

  let row = document.createElement('div');

  options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = `${String.fromCharCode(65 + index)}. ${option}`;
    button.onclick = () => checkAnswer(option === correctAnswer, button);

    row.appendChild(button);

    if ((index + 1) % 2 === 0) {
      optionsContainer.appendChild(row);
      row = document.createElement('div');
    }
  });

  if (row.children.length > 0) {
    optionsContainer.appendChild(row);
  }
}

function checkAnswer(isCorrect, button) {
  const question = questions[currentQuestionIndex];
  const options = [...question.options];
  const correctAnswer = options[question.correct];

  document.getElementById('explanation').innerText = question.explanation;
  if (isCorrect) {
    button.classList.add('correct');
    score++;
  } else {
    button.classList.add('wrong');
  }

  // Highlight the correct answer
  const buttons = document.querySelectorAll('#options button');
  buttons.forEach(btn => {
    if (btn.innerText.includes(correctAnswer)) {
      btn.classList.add('correct');
    }
    btn.disabled = true;
  });

  document.getElementById('score').innerText = `Corretas: ${score}/10`;

  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      renderQuestion();
    } else {
      document.getElementById('main').innerHTML = `<p>Quiz completo! Você acertou ${score} de ${questions.length} perguntas.</p>`;
    }
  }, 7145);
}

document.addEventListener('DOMContentLoaded', (event) => {
  renderQuestion();
});
