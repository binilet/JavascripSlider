const data = [
    {
      id: 1,
      question: "Which of these fish is actually a fish?",
      answers: [
        { answer: "swordfish", isCorrect: true },
        { answer: "jellyfish", isCorrect: false },
        { answer: "starfish", isCorrect: false },
        { answer: "crayfish", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "A flutter is a group of:",
      answers: [
        { answer: "bees", isCorrect: false },
        { answer: "penguins", isCorrect: false },
        { answer: "butterflies", isCorrect: true },
        { answer: "camels", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "A group of which animals is referred to as a wake?",
      answers: [
        { answer: "bats", isCorrect: false },
        { answer: "vultures", isCorrect: true },
        { answer: "ants", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "What is Currency Pegging?",
      answers: [
        { answer: "policy of devaluing currency", isCorrect: false },
        { answer: "policy in which national governments set fixed exchange rate.", isCorrect: true },
        { answer: "act of hidding currency until it gets stronger.", isCorrect: false },
      ],
    },
  ];

  const gameScreen = document.querySelector('.game')
  const resultScreen = document.querySelector('.result')
  const question = document.querySelector('.question')
  const answerContainer = document.querySelector('.answers')
  const submit = document.querySelector('.submit')
  const play = document.querySelector('.play')

  const correct_answer = document.querySelector('.correct')
  const wrong_answer = document.querySelector('.wrong')
  const score = document.querySelector('.score')

  const answer = document.querySelector('.answer')

  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;

  const showQuestion = () => {
    selectedAnswer = null;
    let currentQ = data[qIndex];
    question.innerHTML = currentQ.question;
    currentQ.answers.forEach((choice,idx)=>{

        const div = document.createElement('div');
        div.className = 'answer';
        answerContainer.appendChild(div);
        const input = document.createElement('input');
        input.name = 'answer';
        input.type = 'radio';
        input.id = 'answer'+idx;
        input.value = choice.isCorrect;

        div.appendChild(input);
        const label = document.createElement('label');
        label.htmlFor = 'answer'+idx;
        label.innerHTML = choice.answer;
        div.appendChild(label);

    });

    selectAnswer();
  }

  const selectAnswer = ()=> {
    answerContainer.querySelectorAll('input').forEach(element=>{
        element.addEventListener('click',(e)=>{
            selectedAnswer = e.target.value;
        })
    })
  }

  submit.addEventListener('click',()=>{
    if(selectedAnswer !== null){
      let element = document.getElementById('answers');
      while(element.firstChild){
          element.removeChild(element.firstChild);
      }
      submitQuestion();
    }else{
      alert('Please select  an answer!')
    }
    
  });

  const submitQuestion = ()=> {
    if(qIndex == data.length-1){
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;

      resultScreen.style.display='flex';
      gameScreen.style.display='none';

      wrong_answer.innerHTML = `Wrong Answers: ${wrongCount}`;
      correct_answer.innerHTML = `Correct Answers: ${correctCount}`;
      score.innerHTML = `Score:${correctCount *10}`; 
    }else{
      selectedAnswer === 'true' ? correctCount++ : wrongCount++;
      qIndex++;
      showQuestion();
    }  
  }

  if(qIndex != data.length)
    showQuestion();

play.addEventListener('click',()=>{
    resultScreen.style.display='none';
    gameScreen.style.display='flex';
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion();
  });

