const questionsData= [
    {
        question: 'Who is the founder of Watchman?',
        options: [
            { label: 'A: Ac Ohanebo', isCorrect: true },
            { label: 'B: Wf KUMMYI', isCorrect: false },
            { label: 'C: Bishop Mike Okonkwo', isCorrect: false },
            { label: 'D: Apostle Sule John', isCorrect: false },
        ],
    },
    {
        question: 'Which book is the mission statement?',
        options: [
            { label: 'A: Job', isCorrect: false },
            { label: 'B: Revelations', isCorrect: false },
            { label: 'C: Hebrews', isCorrect: false },
            { label: 'D: Isaiah', isCorrect: true },
        ],
    },
    {
        question: 'In which state is the Rock-Chapel located?',
        options: [
            { label: 'A: Imo', isCorrect: true },
            { label: 'B: Lagos', isCorrect: false },
            { label: 'C: Ibadan', isCorrect: false },
            { label: 'D: Kano', isCorrect: false },
        ],
    },
    {
        question: 'Which of these is an archdiocese?',
        options: [
            { label: 'A: Benin', isCorrect: false },
            { label: 'B: Calabar', isCorrect: false },
            { label: 'C: Kano', isCorrect: false },
            { label: 'D: Ibadan', isCorrect: true },
        ],
    },
    {
        question: 'Where is the Watchman head office located?',
        options: [
            { label: 'A: Marina', isCorrect: true },
            { label: 'B: Aguda', isCorrect: false },
            { label: 'C: Awo-Omama', isCorrect: false },
            { label: 'D: ICC Land', isCorrect: false },
        ],
    },
    {
        question: 'Where was Besoth held?',
        options: [
            { label: 'A: Enugu', isCorrect: true },
            { label: 'B: PH', isCorrect: false },
            { label: 'C: Lagos', isCorrect: false },
            { label: 'D: Mgbidi', isCorrect: false },
        ],
    },
    {
        question: 'Who first used the phrase "The Best is Yet to Come"?',
        options: [
            { label: 'A: Pst Udeh Gideon', isCorrect: true },
            { label: 'B: Pst Nwogu Julius', isCorrect: false },
            { label: 'C: Pst Protase Opara', isCorrect: false },
            { label: 'D: The GS', isCorrect: false },
        ],
    },
    {
        question: 'Which of these is a Watchman-owned institution?',
        options: [
            { label: 'A: Linapps', isCorrect: true },
            { label: 'B: Felred', isCorrect: false },
            { label: 'C: Logics', isCorrect: false },
            { label: 'D: Lerede', isCorrect: false },
        ],
    },
    {
        question: 'Which of these is not a diocese?',
        options: [
            { label: 'A: Logiss Diocese', isCorrect: false },
            { label: 'B: Ibadan', isCorrect: false },
            { label: 'C: Lagos', isCorrect: false },
            { label: 'D: Delta', isCorrect: true },
        ],
    },
    {
        question: 'Which Watchman movie was the name "Tega" used?',
        options: [
            { label: 'A: Covenant Victims', isCorrect: true },
            { label: 'B: Strange Wind', isCorrect: false },
            { label: 'C: When God Goes to Prison', isCorrect: false },
            { label: 'D: The King is Coming', isCorrect: false },
        ],
    },
    {
        question: 'Who wrote the song "You Have Been My Helper"?',
        options: [
            { label: 'A: Godwin Omodiale', isCorrect: true },
            { label: 'B: Godwin Omosimale', isCorrect: false },
            { label: 'C: Godwin Omdarimi', isCorrect: false },
            { label: 'D: Godwin John', isCorrect: false },
        ],
    },
    {
        question: 'Who is the Diocesan Pastor of Jos Diocese?',
        options: [
            { label: 'A: Pst Amos', isCorrect: true },
            { label: 'B: Pst Femi', isCorrect: false },
            { label: 'C: Pst Julius', isCorrect: false },
            { label: 'D: Pst Clems', isCorrect: false },
        ],
    },
    {
        question: 'Where is ICC Land located?',
        options: [
            { label: 'A: Ogun', isCorrect: true },
            { label: 'B: Lagos', isCorrect: false },
            { label: 'C: Imo', isCorrect: false },
            { label: 'D: Benin', isCorrect: false },
        ],
    },
    {
        question: 'Which Diocese is "Get Ready" held?',
        options: [
            { label: 'A: Ibadan', isCorrect: true },
            { label: 'B: Owerri', isCorrect: false },
            { label: 'C: Jos', isCorrect: false },
            { label: 'D: Abuja', isCorrect: false },
        ],
    },
    {
        question: 'Where was the drama scenes from "The Cross" first acted?',
        options: [
            { label: 'A: Owerri', isCorrect: false },
            { label: 'B: Rockchapel', isCorrect: false },
            { label: 'C: Aguda Fellowship Center', isCorrect: true },
            { label: 'D: Ketu District', isCorrect: false },
        ],
    },
    {
        question: 'Where is the Diocese called "Blossoming" located?',
        options: [
            { label: 'A: Calabar', isCorrect: true },
            { label: 'B: Lagos', isCorrect: false },
            { label: 'C: Owerri', isCorrect: false },
            { label: 'D: Aba', isCorrect: false },
        ],
    },
    {
        question: 'Which of these is a Watchman-owned institution?',
        options: [
            { label: 'A: Linapps', isCorrect: true },
            { label: 'B: Felred', isCorrect: false },
            { label: 'C: Logics', isCorrect: false },
            { label: 'D: Lerede', isCorrect: false },
        ],
    },
    {
        question: 'Which of these is not a diocese?',
        options: [
            { label: 'A: Logiss Diocese', isCorrect: false },
            { label: 'B: Ibadan', isCorrect: false },
            { label: 'C: Lagos', isCorrect: false },
            { label: 'D: Delta', isCorrect: true },
        ],
    },
];


let currentQuestionIndex = 0;
let timer;
let timerSeconds = 60;

const questionElement = document.getElementById('question');
const answerElements = document.querySelectorAll('.answer span');
const timerElement = document.getElementById('timer');

// Add event listeners for help buttons
const fiftyFiftyBtn = document.querySelector('.help p:nth-child(1)');
const phoneAFriendBtn = document.querySelector('.help p:nth-child(2)');
const askTheAudienceBtn = document.querySelector('.help p:nth-child(3)');

fiftyFiftyBtn.addEventListener('click', handleFiftyFifty);
phoneAFriendBtn.addEventListener('click', handlePhoneAFriend);
askTheAudienceBtn.addEventListener('click', handleAskTheAudience);

// Add event listener for all answer options
answerElements.forEach((element, index) => {
    element.addEventListener('click', () => handleAnswer(index));
});

function displayQuestion() {
    resetTimer(); // Reset timer on each new question
    const currentQuestion = questionsData[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.options.forEach((option, index) => {
        answerElements[index].innerText = option.label;
    });

    // Start the timer for 60 seconds
    timer = setInterval(() => {
        updateTimer();
        if (timerSeconds <= 0) {
            handleTimeout();
        }
    }, 1000);
}

function handleAnswer(selectedIndex) {
    clearInterval(timer); // Clear the timer when an answer is selected
    const currentQuestion = questionsData[currentQuestionIndex];
    const selectedOption = currentQuestion.options[selectedIndex];

    if (selectedOption.isCorrect) {
        answerElements[selectedIndex].classList.add('true');
        // Handle correct answer logic, e.g., update prize class
    } else {
        answerElements[selectedIndex].classList.add('false');
        // Handle incorrect answer logic
    }

    setTimeout(() => {
        resetOptions();
        currentQuestionIndex++;

        if (currentQuestionIndex < questionsData.length) {
            displayQuestion();
        } else {
            // Handle game end logic
            alert('Congratulations! Game Over');
        }
    }, 1500);
}

function handleTimeout() {
    // Handle logic when the timer runs out (e.g., treat it as an incorrect answer)
    answerElements.forEach((element, index) => {
        if (questionsData[currentQuestionIndex].options[index].isCorrect) {
            element.classList.add('true');
        }
    });

    setTimeout(() => {
        resetOptions();
        currentQuestionIndex++;

        if (currentQuestionIndex < questionsData.length) {
            displayQuestion();
        } else {
            // Handle game end logic
            alert('Time is up! Game Over');
        }
    }, 1500);
}

function resetOptions() {
    answerElements.forEach((element) => {
        element.classList.remove('true', 'false');
    });
}

function resetTimer() {
    clearInterval(timer);
    timerSeconds = 60;
    updateTimer();
}

function updateTimer() {
    timerElement.innerText = timerSeconds;
    timerSeconds--;
}

// Function to handle the 50:50 help
function handleFiftyFifty() {
    disableHelpButtons(); // Disable buttons during animation
    const currentQuestion = questionsData[currentQuestionIndex];
    const correctOptionIndex = currentQuestion.options.findIndex(option => option.isCorrect);
    const availableOptions = Array.from({ length: 4 }, (_, index) => index);
    const optionsToRemove = availableOptions.filter(index => index !== correctOptionIndex);

    // Randomly select one incorrect option to remove
    const randomIndexToRemove = optionsToRemove[Math.floor(Math.random() * optionsToRemove.length)];

    // Remove two wrong options
    answerElements.forEach((element, index) => {
        if (index !== correctOptionIndex && index !== randomIndexToRemove) {
            element.classList.add('fade-out');
        }
    });

    // After a delay, remove the faded-out class and continue the game
    setTimeout(() => {
        answerElements.forEach((element, index) => {
            if (index !== correctOptionIndex && index !== randomIndexToRemove) {
                element.classList.remove('fade-out');
            }
        });
        resetOptions();
        enableHelpButtons();
        continueGame();
    }, 1000);
}

// Function to handle the Phone a Friend help
function handlePhoneAFriend() {
    disableHelpButtons(); // Disable buttons during animation
    const currentQuestion = questionsData[currentQuestionIndex];
    const correctOptionIndex = currentQuestion.options.findIndex(option => option.isCorrect);

    // Implement logic for friend's suggestion
    const friendSuggestion = suggestAnswerToFriend(correctOptionIndex);
    answerElements[friendSuggestion].classList.add('phone-friend-highlight');

    // After a delay, remove the highlight and continue the game
    setTimeout(() => {
        resetOptions();
        enableHelpButtons();
        continueGame();
    }, 1500);
}

// Function to handle the Ask the Audience help
function handleAskTheAudience() {
    // Implement logic to simulate the audience's response (e.g., randomly distribute votes)
    const audienceVotes = Array.from({ length: 4 }, () => Math.floor(Math.random() * 101));

    // Update the UI to reflect audience votes
    answerElements.forEach((element, index) => {
        element.innerText = `${element.innerText} (${audienceVotes[index]}%)`;
    });

    // After a delay, reset the UI and continue the game
    setTimeout(() => {
        answerElements.forEach((element, index) => {
            element.innerText = questionsData[currentQuestionIndex].options[index].label;
        });
        resetOptions();
        enableHelpButtons();
        continueGame();
    }, 1500);
}

// Function to enable help buttons
function enableHelpButtons() {
    fiftyFiftyBtn.disabled = false;
    phoneAFriendBtn.disabled = false;
    askTheAudienceBtn.disabled = false;
}

// Function to continue the game after using a help option
function continueGame() {
    displayQuestion();
}

// Function to disable help buttons during animation
function disableHelpButtons() {
    fiftyFiftyBtn.disabled = true;
    phoneAFriendBtn.disabled = true;
    askTheAudienceBtn.disabled = true;
}

// Start the game
displayQuestion();
