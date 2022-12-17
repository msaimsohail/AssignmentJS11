var questions = [
  {
    question: "Do you want to start Quiz?",
    answer: "",
    options: [
      "YES",
      "NO", 
    ],
  },
  {
    numb: 1,
    question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
    answer: "border-style",
    options: [
      "border-color",
      "border-decoration",
      "border-style",
      "border-line",
    ],
  },
  {
    numb: 2,
    question: "Which of the following defines a measurement in inches?",
    answer: "in",
    options: [
      "in",
      "mm",
      "pt",
      "cm",
    ],
  },
  {
    numb: 3,
    question: "The year in which HTML was first proposed _______.",
    answer: "1990",
    options: [
      "1990",
      "1995",
      "1998",
      "1992",
    ],
  },
  {
    numb: 4,
    question: "What does SQL stand for?",
    answer: "Structured Query Language",
    options: [
      "Stylish Question Language",
      "Stylesheet Query Language",
      "Statement Question Language",
      "Structured Query Language",
    ],
  },
  {
    numb: 5,
    question: "Which of the following class in Bootstrap is used to create a dropdown menu?",
    answer: ".dropdown",
    options: [
      ".dropdown",
      ".select",
      ".select-list",
      "None of the above",
    ],
  },
  {
    numb: 6,
    question: "What does XML stand for?",
    answer: "eXtensible Markup Language",
    options: [
      "eXtensible Markup Language",
      "eXecutable Multiple Language",
      "eXTra Multi-Program Language",
      "eXamine Multiple Language",
    ],
  },
  {
    numb: 7,
    question: "What are the features of bootstrap?",
    answer: "All of the above",
    options: [
      " Mobile first approach",
      "Easy to get started",
      "Browser Support",
      "All of the above",
    ],
  },
  {
    numb: 8,
    question: "Which of the following indicates a dangerous or potentially negative action?",
    answer: ".danger",
    options: [
      ".active",
      ".danger",
      "warning",
      "none of the above",
    ],
  },
  {
    numb: 9,
    question: "Offsets are a useful feature for more specialized layouts.",
    answer: "yes",
    options: [
      "yes",
      "no",
      "can be use",
      "can not say",
    ],
  },
  {
    numb: 10,
    question: " Can we make images responsive?",
    answer: "true",
    options: [
      "true",
      "false",
      "little bit",
      "can not say",
    ],
  },
];

var question = document.getElementById("question");
var questionNum = document.getElementById("questionNum");
var ansParent = document.getElementById("ansParent");
var indexNum = 0;
var marks = 0;

function showQuestion() {
  question.innerHTML = questions[indexNum].question;
  questionNum.innerHTML =
    "Question # " + (indexNum + 1) + "/" + questions.length;
  ansParent.innerHTML = "";
  for (var i = 0; i < questions[indexNum].options.length; i++) {
    ansParent.innerHTML += `<div class="col-md-6 pt-5">
    <button onclick="checkAns ('${questions[indexNum].options[i]}','${questions[indexNum].answer}')" class="btn btn-outline-warning fw-bold fst-italic py-4 mx-5 text-center px-5 rounded-pill w-75">
    ${questions[indexNum].options[i]}
    </button>
</div>`;
  }
}
showQuestion();

function nextQuestion() {
  indexNum++;
  showQuestion();
}

function checkAns(a, b) {
  if (a == b) {
    marks++;
    console.log(marks);
  }
  if (indexNum + 1 == questions.length) {
    alert("Your Result: " + marks);
} else {
  nextQuestion();
}
}
