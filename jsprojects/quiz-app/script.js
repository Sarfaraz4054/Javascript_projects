// Quiz questions and answers
const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      correct: 0
    },
    {
      question: "Who developed JavaScript?",
      options: ["Brendan Eich", "Tim Berners-Lee", "James Gosling", "Guido van Rossum"],
      correct: 0
    },
    {
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correct: 3
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      correct: 1
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
      correct: 0
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  // Function to load a question and its options
  function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('nextButton');
    
    // Get current question data
    const currentQuestion = quizData[currentQuestionIndex];
    
    // Set the question text
    questionElement.textContent = currentQuestion.question;
    
    // Clear previous options
    optionsElement.innerHTML = '';
  
    // Add options dynamically
    currentQuestion.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.textContent = option;
      li.onclick = () => checkAnswer(index);
      optionsElement.appendChild(li);
    });
  
    // Hide the "Next Question" button initially
    nextButton.style.display = "none";
  }
  
  // Function to check if the selected option is correct
  function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
    
    // Disable further clicks on options
    const options = document.querySelectorAll('#options li');
    options.forEach(option => {
      option.style.pointerEvents = "none"; // Disable clicks
    });
    
    // Show "Next Question" button
    document.getElementById('nextButton').style.display = "block";
  }
  
  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }
  
  // Function to show the final result
  function showResult() {
    document.getElementById('quiz').style.display = "none";
    document.getElementById('score-container').classList.remove('hidden');
    document.getElementById('score').textContent = score;
  }
  
  // Function to restart the quiz
  function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('quiz').style.display = "block";
    document.getElementById('score-container').classList.add('hidden');
    loadQuestion();
  }
  
  // Load the first question on page load
  loadQuestion();
  