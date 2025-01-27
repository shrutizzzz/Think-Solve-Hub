let currentQuestion = 0; // Initialize currentQuestion variable
let userAnswers = []; // Initialize userAnswers array
let score = 0; // Initialize score variable

const questions = [
    {
        question: "Answer the following questions based on the data provided in the table",
        text: "1. Which agent has the lowest call resolution?",
        options: ["Agent A", "Agent B", "Agent C", "Agent D"],
        answer: "Agent D",
        table: `
            <table>
                <tr>
                    <th></th>
                    <th>Rating 1-10</th>
                    <th>Call Resolution</th>
                    <th>Average Handling Time</th>
                </tr>
                <tr>
                    <td>Employee A</td>
                    <td>8</td>
                    <td>75%</td>
                    <td>10 mins</td>
                </tr>
                <tr>
                    <td>Employee B</td>
                    <td>6</td>
                    <td>45%</td>
                    <td>14 mins</td>
                </tr>
                <tr>
                    <td>Employee C</td>
                    <td>9</td>
                    <td>88%</td>
                    <td>8 mins</td>
                </tr>
                <tr>
                    <td>Employee D</td>
                    <td>4</td>
                    <td>30%</td>
                    <td>16 mins</td>
                </tr>
            </table>
        `
    },
    {
        question: "",
        img: "/Deduction/images/ques1.png",
        text: "2. When a new employee joined, their rating was 3 points lower than the highest score. What was the rating of the new employee <br> compared to the highest score?",
        options: ["6", "7", "8", "9"],
        answer: "6",
        table: `
        <table>
            <tr>
                <th></th>
                <th>Rating 1-10</th>
                <th>Call Resolution</th>
                <th>Average Handling Time</th>
            </tr>
            <tr>
                <td>Employee A</td>
                <td>8</td>
                <td>75%</td>
                <td>10 mins</td>
            </tr>
            <tr>
                <td>Employee B</td>
                <td>6</td>
                <td>45%</td>
                <td>14 mins</td>
            </tr>
            <tr>
                <td>Employee C</td>
                <td>9</td>
                <td>88%</td>
                <td>8 mins</td>
            </tr>
            <tr>
                <td>Employee D</td>
                <td>4</td>
                <td>30%</td>
                <td>16 mins</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques1.png",
        text: "3. Find the Average call resolution percentage across the 4 agents.",
        options: ["50%", "55%", "59.5%", "62.5%"],
        answer: "59.5%",
        table: `
        <table>
            <tr>
                <th></th>
                <th>Rating 1-10</th>
                <th>Call Resolution</th>
                <th>Average Handling Time</th>
            </tr>
            <tr>
                <td>Employee A</td>
                <td>8</td>
                <td>75%</td>
                <td>10 mins</td>
            </tr>
            <tr>
                <td>Employee B</td>
                <td>6</td>
                <td>45%</td>
                <td>14 mins</td>
            </tr>
            <tr>
                <td>Employee C</td>
                <td>9</td>
                <td>88%</td>
                <td>8 mins</td>
            </tr>
            <tr>
                <td>Employee D</td>
                <td>4</td>
                <td>30%</td>
                <td>16 mins</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques1.png",
        text: "4. If agent C's average handling time goes up by 5 percent, what would be their new average call handling time after a 5% increase?",
        options: ["7.6", "7.8", "8.2", "8.4"],
        answer: "8.4",
        table: `
        <table>
            <tr>
                <th></th>
                <th>Rating 1-10</th>
                <th>Call Resolution</th>
                <th>Average Handling Time</th>
            </tr>
            <tr>
                <td>Employee A</td>
                <td>8</td>
                <td>75%</td>
                <td>10 mins</td>
            </tr>
            <tr>
                <td>Employee B</td>
                <td>6</td>
                <td>45%</td>
                <td>14 mins</td>
            </tr>
            <tr>
                <td>Employee C</td>
                <td>9</td>
                <td>88%</td>
                <td>8 mins</td>
            </tr>
            <tr>
                <td>Employee D</td>
                <td>4</td>
                <td>30%</td>
                <td>16 mins</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques2.png",
        text: "5. What is the total sales for the first five months?",
        options: ["570000", "590000", "610000", "630000"],
        answer: "610000",
        table: `
        <table>
            <tr>
                <th>Month</th>
                <th>Sales (in S)</th>
            </tr>
            <tr>
                <td>January</td>
                <td>120</td>
            </tr>
            <tr>
                <td>February</td>
                <td>95</td>
            </tr>
            <tr>
                <td>March</td>
                <td>150</td>
            </tr>
            <tr>
                <td>April</td>
                <td>110</td>
            </tr>
            <tr>
                <td>May</td>
                <td>135</td>
            </tr>
        </table>
    `  
    },
    {
        question: "",
        img: "/Deduction/images/ques2.png",
        text: "6. What is the average sales per month for the given period?",
        options: ["116000", "120000", "124000", "128000"],
        answer: "122000",
        table: `
        <table>
            <tr>
                <th>Month</th>
                <th>Sales (in S)</th>
            </tr>
            <tr>
                <td>January</td>
                <td>120</td>
            </tr>
            <tr>
                <td>February</td>
                <td>95</td>
            </tr>
            <tr>
                <td>March</td>
                <td>150</td>
            </tr>
            <tr>
                <td>April</td>
                <td>110</td>
            </tr>
            <tr>
                <td>May</td>
                <td>135</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques2.png",
        text: "7. Calculate the percentage increase in sales from February to March.",
        options: ["54", "56", "58", "60"],
        answer: "58",
        table: `
        <table>
            <tr>
                <th>Month</th>
                <th>Sales (in S)</th>
            </tr>
            <tr>
                <td>January</td>
                <td>120</td>
            </tr>
            <tr>
                <td>February</td>
                <td>95</td>
            </tr>
            <tr>
                <td>March</td>
                <td>150</td>
            </tr>
            <tr>
                <td>April</td>
                <td>110</td>
            </tr>
            <tr>
                <td>May</td>
                <td>135</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques2.png",
        text: "8. Identify the month with the highest sales and the month with the lowest sales.",
        options: ["January & February", "March & April", "April & May", "March & February"],
        answer: "March & February",
        table: `
        <table>
            <tr>
                <th>Month</th>
                <th>Sales (in S)</th>
            </tr>
            <tr>
                <td>January</td>
                <td>120</td>
            </tr>
            <tr>
                <td>February</td>
                <td>95</td>
            </tr>
            <tr>
                <td>March</td>
                <td>150</td>
            </tr>
            <tr>
                <td>April</td>
                <td>110</td>
            </tr>
            <tr>
                <td>May</td>
                <td>135</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques2.png",
        text: "9. Compare the total sales in April and May. How much higher or lower are the sales in May compared to April?",
        options: ["20000", "25000", "30000", "35000"],
        answer: "25000",
        table: `
        <table>
            <tr>
                <th>Month</th>
                <th>Sales (in S)</th>
            </tr>
            <tr>
                <td>January</td>
                <td>120</td>
            </tr>
            <tr>
                <td>February</td>
                <td>95</td>
            </tr>
            <tr>
                <td>March</td>
                <td>150</td>
            </tr>
            <tr>
                <td>April</td>
                <td>110</td>
            </tr>
            <tr>
                <td>May</td>
                <td>135</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques3.png",
        text: "10. If the trip with an arrival time of 08:00 AM and a departure time of 12:00 PM included an unexpected delay of 45 minutes,<br>At what time did the trip actually depart?",
        options: ["1145", "1200", "1245", "1300"],
        answer: "1245",
        table: `
        <table>
            <tr>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Stops in Between</th>
                <th>Cost per Person</th>
            </tr>
            <tr>
                <td>08:00 AM</td>
                <td>12:00 PM</td>
                <td>3</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>09:30 AM</td>
                <td>02:00 PM</td>
                <td>2</td>
                <td>$65</td>
            </tr>
            <tr>
                <td>10:45 AM</td>
                <td>03:30 PM</td>
                <td>4</td>
                <td>$40</td>
            </tr>
            <tr>
                <td>11:15 AM</td>
                <td>05:00 PM</td>
                <td>5</td>
                <td>$55</td>
            </tr>
            <tr>
                <td>12:30 PM</td>
                <td>06:30 PM</td>
                <td>3</td>
                <td>$70</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques3.png",
        text: "11. If the cost per person for the trip with an arrival time of 09:30 AM and a departure time of 02:00 PM increased by 15%,<br>What would be the new cost per person?",
        options: ["70.25", "72.50", "74.75", "77.00"],
        answer: "74.75",
        table: `
        <table>
            <tr>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Stops in Between</th>
                <th>Cost per Person</th>
            </tr>
            <tr>
                <td>08:00 AM</td>
                <td>12:00 PM</td>
                <td>3</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>09:30 AM</td>
                <td>02:00 PM</td>
                <td>2</td>
                <td>$65</td>
            </tr>
            <tr>
                <td>10:45 AM</td>
                <td>03:30 PM</td>
                <td>4</td>
                <td>$40</td>
            </tr>
            <tr>
                <td>11:15 AM</td>
                <td>05:00 PM</td>
                <td>5</td>
                <td>$55</td>
            </tr>
            <tr>
                <td>12:30 PM</td>
                <td>06:30 PM</td>
                <td>3</td>
                <td>$70</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques3.png",
        text: "12. Compare the average number of stops for trips that have an arrival time before 11:00 AM to those that have an arrival time<br>after 11:00 AM. Which set of trips has a higher average number of stops?",
        options: ["Trips after 11:00 AM", "Trips before 11:00 AM"],
        answer: "Trips after 11:00 AM",
        table: `
        <table>
            <tr>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Stops in Between</th>
                <th>Cost per Person</th>
            </tr>
            <tr>
                <td>08:00 AM</td>
                <td>12:00 PM</td>
                <td>3</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>09:30 AM</td>
                <td>02:00 PM</td>
                <td>2</td>
                <td>$65</td>
            </tr>
            <tr>
                <td>10:45 AM</td>
                <td>03:30 PM</td>
                <td>4</td>
                <td>$40</td>
            </tr>
            <tr>
                <td>11:15 AM</td>
                <td>05:00 PM</td>
                <td>5</td>
                <td>$55</td>
            </tr>
            <tr>
                <td>12:30 PM</td>
                <td>06:30 PM</td>
                <td>3</td>
                <td>$70</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques3.png",
        text: "13. If the total revenue generated from a trip with an arrival time of 10:45 AM and a departure time of 03:30 PM was $1750,<br>What was the average cost per person for this trip?",
        options: ["300", "325", "350", "375"],
        answer: "350",
        table: `
        <table>
            <tr>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Stops in Between</th>
                <th>Cost per Person</th>
            </tr>
            <tr>
                <td>08:00 AM</td>
                <td>12:00 PM</td>
                <td>3</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>09:30 AM</td>
                <td>02:00 PM</td>
                <td>2</td>
                <td>$65</td>
            </tr>
            <tr>
                <td>10:45 AM</td>
                <td>03:30 PM</td>
                <td>4</td>
                <td>$40</td>
            </tr>
            <tr>
                <td>11:15 AM</td>
                <td>05:00 PM</td>
                <td>5</td>
                <td>$55</td>
            </tr>
            <tr>
                <td>12:30 PM</td>
                <td>06:30 PM</td>
                <td>3</td>
                <td>$70</td>
            </tr>
        </table>
    `
    },
    {
        question: "",
        img: "/Deduction/images/ques3.png",
        text: "14. The trip with an arrival time of 12:30 PM and a departure time of 06:30 PM experienced an unexpected delay of 30 minutes at<br>one of the stops. What was the total duration of the trip after considering this delay?",
        options: ["6 hours 40 mins", "7 hours 00 mins", "6 hours 30 mins", "12 hours 40 mins"],
        answer: "6 hours 30 mins",
        table: `
        <table>
            <tr>
                <th>Arrival Time</th>
                <th>Departure Time</th>
                <th>Stops in Between</th>
                <th>Cost per Person</th>
            </tr>
            <tr>
                <td>08:00 AM</td>
                <td>12:00 PM</td>
                <td>3</td>
                <td>$50</td>
            </tr>
            <tr>
                <td>09:30 AM</td>
                <td>02:00 PM</td>
                <td>2</td>
                <td>$65</td>
            </tr>
            <tr>
                <td>10:45 AM</td>
                <td>03:30 PM</td>
                <td>4</td>
                <td>$40</td>
            </tr>
            <tr>
                <td>11:15 AM</td>
                <td>05:00 PM</td>
                <td>5</td>
                <td>$55</td>
            </tr>
            <tr>
                <td>12:30 PM</td>
                <td>06:30 PM</td>
                <td>3</td>
                <td>$70</td>
            </tr>
        </table>
    `
    }
];

// Start Button Click Event
document.getElementById("startButton").addEventListener("click", function() {
    document.querySelector(".start-screen").style.display = "none";
    document.querySelector(".instructions-box").style.display = "block"; // Show instructions box
});

// Continue Button Click Event
document.getElementById("continue").addEventListener("click", function() {
    document.querySelector(".instructions-box").style.display = "none"; // Hide instructions box
    document.querySelector(".top-bar").style.display = "flex";
    document.querySelector(".question-container").style.display = "block";

    // Show the navigation buttons when the quiz starts
    document.querySelector(".navigation").style.display = "flex"; 
    loadQuestion();
    startTimer();
});

document.getElementById("next").addEventListener("click", function() {
    // Store the user's answer
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        userAnswers[currentQuestion] = selectedOption.value;
    } else {
        userAnswers[currentQuestion] = null; // No answer selected
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        calculateScore();
        document.getElementById("finish").style.display = "block"; // Display finish button
    }
});

document.getElementById("prev").addEventListener("click", function() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});

function renderOptions() {
    const optionsList = document.getElementById('options-list');
    optionsList.innerHTML = ''; // Clear existing options

    questions[currentQuestion].options.forEach((option, index) => {
        const listItem = document.createElement('li');
        listItem.style.margin = '0 10px';

        const inputElement = document.createElement('input');
        inputElement.type = 'radio';
        inputElement.id = `option${index}`;
        inputElement.name = 'option';
        inputElement.value = option;

        const labelElement = document.createElement('label');
        labelElement.htmlFor = `option${index}`;
        labelElement.textContent = option;

        listItem.appendChild(inputElement);
        listItem.appendChild(labelElement);
        optionsList.appendChild(listItem);
    });

    // Restore the previous answer if there was one
    if (userAnswers[currentQuestion] !== undefined) {
        const previousAnswer = userAnswers[currentQuestion];
        const optionToCheck = document.querySelector(`input[name="option"][value="${previousAnswer}"]`);
        if (optionToCheck) {
            optionToCheck.checked = true;
        }
    }
}

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-text").innerHTML = question.text;

    // Display the table instead of the image
    const tableContainer = document.getElementById("table-container");
    tableContainer.innerHTML = question.table;

    // Now call renderOptions to display the options
    renderOptions();

    // Update progress
    document.querySelector(".progress").textContent = `Progress ${currentQuestion + 1}/${questions.length}`;
    const progressBarFill = document.querySelector(".progress-bar-fill");
    progressBarFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    // Enable or disable navigation buttons
    document.getElementById("prev").disabled = currentQuestion === 0;
}

function startTimer() {
    let timeLeft = 900; // 900 seconds
    const timerElement = document.getElementById("timer");
    const timerInterval = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerElement.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            calculateScore(); // Calculate score when time is up
        }
        timeLeft--;
    }, 1000);
}

function calculateScore() {
    let score = 0;
    questions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });
    showResult(score); // Display score on the result screen
}

// Function to display the result
function showResult(score) {
    const timeTaken = document.getElementById("timer").textContent; // Get the time taken from the timer
    document.getElementById('finalScore').innerText = `Final Score: ${score}/${questions.length}`; // Update score display
    document.getElementById('finalTime').innerText = `Time Taken: ${timeTaken}`; // Update time display
    document.querySelector('.score-screen').classList.remove('hidden'); // Show the score screen
    
    setInterpretation(score); // Update interpretation text based on score

    // Get the current date and time
    const currentDate = new Date().toISOString();

    // Send the score and date to the server
    const username = localStorage.getItem('username'); // Assuming username is stored in localStorage
    console.log(`Saving score for user: ${username}, score: ${score}, date: ${currentDate}`); // Log for debugging

    fetch('/save-result', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            scoretest2: score, // Send the correctAnswers as the scoretest2
            date: currentDate // Send the current date
        })
    }).then(response => response.json())
      .then(data => {
          if (data.message) {
              console.log(data.message);
          }
      }).catch(error => console.error('Error:', error));

    // Hide quiz section
    document.querySelector(".question-container").style.display = "none"; // Hide quiz container
    document.querySelector(".top-bar").style.display = "none"; // Hide top bar
}

// Function to set the interpretation text based on the score
function setInterpretation(score) {
    let interpretationText = '';

    if (score >= 0 && score <= 5) {
        interpretationText = 'A total score of ' + score + ' points indicates a <b>foundational understanding</b> of comparative analysis within the context of trip logistics. While successful in this specific dimension, there are notable <b>challenges</b> in other numeracy dimensions assessed. The individual may face <b>difficulties in interpreting and analyzing numerical data</b> related to call center performance metrics, as well as struggles in arithmetic operations and analytical thinking when examining monthly sales data. The score suggests room for <b>improvement in quantitative analysis, percentage calculations, and analytical reasoning.</b> Targeted practice in these areas would contribute to a more comprehensive and <b>well-rounded enhancement</b> of numerical skills.';
    } else if (score >= 6 && score <= 10) {
        interpretationText = 'A total score of ' + score + ' points reflects a <b>commendable proficiency</b> in various numeracy dimensions assessed. The individual has demonstrated <b>strong capabilities</b> in quantitative analysis, percentage calculations, arithmetic operations, and analytical thinking. This <b>high score</b> indicates a <b>robust foundation</b> in mathematical skills across different scenarios, such as call center performance metrics, monthly sales data, and trip logistics. The individual exhibits a <b>keen understanding<b> of numerical data interpretation and displays advanced analytical reasoning skills. This score suggests a <b>high level of comfort</b> and competence in handling mathematical concepts, showcasing an overall mastery of basic numeracy and mathematics skills.';
    } else if (score >= 11 && score <= 14) {
        interpretationText = 'An <b>outstanding</b> total score of ' + score + ' points reflects an <b>exceptional level of proficiency</b> in numeracy and mathematics across diverse scenarios. The individual has demonstrated <b>excellence</b> in quantitative analysis, percentage calculations, arithmetic operations, and analytical thinking. This <b>high score</b> indicates not only a <b>strong foundation</b> in mathematical skills but also an advanced ability to apply them in practical contexts, such as call center performance metrics, monthly sales data, and trip logistics. The individual showcases a <b>sophisticated understanding</b> of numerical data interpretation, displaying advanced analytical reasoning skills. This <b>exceptional score</b> suggests a high level of comfort, competence, and <b>mastery</b> of mathematical concepts, showcasing an <b>exceptional aptitude</b> for numeracy and mathematics skills.';
    }

    document.getElementById('interpretation-text').innerText = interpretationText;
    document.getElementById('interpretation-text').innerHTML = interpretationText;
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    document.querySelector('.score-screen').classList.add('hidden'); // Hide score screen
    document.querySelector(".start-screen").style.display = "block"; // Show start screen again
    document.querySelector(".top-bar").style.display = "none"; // Hide top bar
    document.querySelector(".question-container").style.display = 'none'; // Hide question container
}

// Back to Dashboard Button functionality
const backToDashboardButton = document.getElementById('back-to-dashboard-button');
const username = localStorage.getItem('username');
if (backToDashboardButton) {
    backToDashboardButton.addEventListener('click', function() {
        window.location.href = `/dashboard?username=${username}`;
    });
}