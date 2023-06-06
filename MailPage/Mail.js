setTimeout(ChangeArea(), 50);

document.getElementById('EmailMenu').style.display = "none";
document.getElementById('QuizMenu').style.display = "none";
document.getElementById('HomeMenu').style.display = "none";
const password = document.getElementById('password');
const passwordcheck = document.getElementById('passwordcheck');
const mailinput = document.getElementById('Mail');
const option1 = document.getElementById('Option1');
const option2 = document.getElementById('Option2');
const option3 = document.getElementById('Option3');
const option4 = document.getElementById('Option4'); 
const ContentSection = document.getElementById('ContentSection');
const SentSection = document.getElementById('SentSection');
var n = 0;

function SendingEmail() {
  let receiveremail = document.getElementById('ReceiveEmail');
  let subjectemail = document.getElementById('SubjectEmail');
  let bodyemail = document.getElementById('BodyEmail');
  let reg = new RegExp("^([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+.(.[!#-'+/-9=?A-Z^-~-]+)|[[\t -Z^-~]*])$");
  if(reg.test(receiveremail.value) === true && receiveremail.value != "" && subjectemail.value != "" && bodyemail.value != "") {
    AddMessage();
    Send(receiveremail.value, subjectemail.value, bodyemail.value);
    receiveremail.value = "";
    subjectemail.value = "";
    bodyemail.value = "";

  } else {
    alert('Wpisałeś niepoprawny email?');
  }
}

function Send(to, subject, body) {
  Email.send({
    SecureToken : "5674e0b3-9ba8-4b97-b292-40736d2a45b8",
    To : to,
    From : "rozuliony2@gmail.com",
    Subject : subject,
    Body : body
}).then(
  message => alert("Email został wysłany, dojdzie do 15 minut czasu!")
);
}

passwordcheck.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        CheckPassword();
    }
});

document.getElementById('EmailNav').addEventListener('click', () => {
  if(document.getElementById('EmailMenu').style.display === "none") {
    document.getElementById('EmailMenu').style.display = "block";
    document.getElementById('Sign1').innerHTML = "-";
  } else {
    document.getElementById('EmailMenu').style.display = "none";
    document.getElementById('Sign1').innerHTML = "+";
  }
});

document.getElementById('QuizNav').addEventListener('click', () => {
  if(document.getElementById('QuizMenu').style.display === "none") {
    document.getElementById('QuizMenu').style.display = "block";
    document.getElementById('Sign2').innerHTML = "-";
  } else {
    document.getElementById('QuizMenu').style.display = "none";
    document.getElementById('Sign2').innerHTML = "+";
  }
});

document.getElementById('HomeNav').addEventListener('click', () => {
  if(document.getElementById('HomeMenu').style.display === "none") {
    document.getElementById('HomeMenu').style.display = "block";
    document.getElementById('Sign3').innerHTML = "-";
  } else {
    document.getElementById('HomeMenu').style.display = "none";
    document.getElementById('Sign3').innerHTML = "+";
  }
});

function CheckAnswer() {
  let reg = new RegExp("^([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'+/-9=?A-Z^-~-]+.(.[!#-'+/-9=?A-Z^-~-]+)|[[\t -Z^-~]*])$");
  if(reg.test(mailinput.value) === false) {
    alert('Wpisałeś nie poprawny Email!');
  } else if(password.value === "") {
    alert('Nie wpisałeś żadnego hasła!');
  } else if(password.value.length < 8) {
    alert('Twoje hasło jest za krótkie!');
  } else if(option1.checked === false && option2.checked === false && option3.checked === false && option4.checked === false) {
    alert('Nie zaznaczyłeś odpowiedzi!')
  } else if(option1.checked === true || option2.checked === true || option4.checked === true) {
    alert('Zaznaczyłeś niepoprawną odpowiedź, jesteś robotem?!')
  } else if(reg.test(mailinput.value) === true && option3.checked === true && password.value != "") {
    localStorage.setItem('password', password.value);
    Send(mailinput.value,'Pierwsze logowanie ukończone sukcesem!', 'Witam! Utworzyłeś swoje unikatowe hasło do mojej strony na tym urządzeniu! Na innych urządzeniach będziesz musiał ponownie przejść wstępne logowanie! Twoje ustawione hasło to: "' + password.value + '", zostaje ci tutaj przesłane aby nie zapomnieć go! Możesz teraz korzystać z mojej strony do woli, rozwiązywać ankiety/quizy oraz wysyłać maile! Miłego korzystania!');
    setTimeout(function(){document.getElementById('FirstLogin2').style.animationName = "hiding";},1000);
    setTimeout(function(){document.getElementById('ActualPage').style.animationName = "showing";document.getElementById('ActualPage').style.display = "block";},1000);
  }
}
if(localStorage.getItem('password') === null) {
  document.getElementById('FirstLogin').style.display = "block";
  setTimeout(function(){document.getElementById('FirstLogin').style.animationName = "hiding";},1000);
  setTimeout(function(){document.getElementById('FirstLogin2').style.animationName = "showing";document.getElementById('FirstLogin2').style.display = "block";},1000);
} else {
  document.getElementById('SecondLogin').style.display = "block";
}

function CheckPassword() {
  if(passwordcheck.value === localStorage.getItem('password')) {
    setTimeout(function(){document.getElementById('SecondLogin').style.animationName = "hiding";},1000);
    setTimeout(function(){document.getElementById('ActualPage').style.animationName = "showing";document.getElementById('ActualPage').style.display = "block";},1000);
  } else if (passwordcheck.value != localStorage.getItem('password')) {
    alert('Wpisałeś niepoprawne hasło! Zapomniałeś go?');
  }
}

function RadioChange(id) {
  const radio = document.getElementById('Option' + id);
  for(i = 1; i <= 4;i++) {
    if(i != id) {
      document.getElementById('Option' + i).checked = false;
    } 
  }
}

function NewLogin() {
  localStorage.removeItem('password');
  setTimeout(function(){document.getElementById('SecondLogin').style.animationName = "hiding";},1000);
  setTimeout(function(){document.getElementById('SecondLogin').style.display = 'none';document.getElementById('FirstLogin2').style.animationName = "showing";document.getElementById('FirstLogin2').style.display = "block";},2000);
}

function ChangeArea() {
  document.getElementById('FirstLogin').style.height = window.innerHeight + "px";
  document.getElementById('FirstLogin').style.width = window.innerWidth + "px";
  document.getElementById('FirstLogin2').style.height = window.innerHeight + "px";
  document.getElementById('FirstLogin2').style.width = window.innerWidth + "px";
  document.getElementById('SecondLogin').style.height = window.innerHeight + "px";
  document.getElementById('SecondLogin').style.width = window.innerWidth + "px";
  document.getElementById('ActualPage').style.height = window.innerHeight + "px";
  document.getElementById('ActualPage').style.width = window.innerWidth + "px";
  if(window.innerWidth > 700) {
    document.getElementById('NormalQuizSection').style.height = window.innerHeight / 1.5 + "px";
    document.getElementById('NormalQuizSection').style.width = window.innerWidth / 2 + "px";
    document.getElementById('LogicQuizSection').style.height = window.innerHeight / 1.5 + "px";
    document.getElementById('LogicQuizSection').style.width = window.innerWidth / 2 + "px";
  } else {
    document.getElementById('NormalQuizSection').style.height = window.innerHeight / 1.2 + "px";
    document.getElementById('NormalQuizSection').style.width = window.innerWidth / 1.5 + "px";
    document.getElementById('LogicQuizSection').style.height = window.innerHeight / 1.2 + "px";
    document.getElementById('LogicQuizSection').style.width = window.innerWidth / 1.5 + "px";
  }
}

function Displaying() {
  document.getElementById('ContentSection').style.alignItems = "center";
  document.getElementById('ContentSection').style.justifyContent = "center";
  document.getElementById('ContentSection').style.display = "flex";
}

function DisplayReset() {
  document.getElementById('ContentSection').style.alignItems = "center";
  document.getElementById('ContentSection').style.justifyContent = "center";
  document.getElementById('ContentSection').style.display = "block";
}

function RemoveItems() {
  document.getElementById('ContentSection').style.overflowY = "unset";
  LSLength = 0;
  x = 0;
  do {
      if(isNaN(localStorage.key(x)) === false) {
          LSLength += 1;
      }
      x++;
  }
  while(localStorage.key(x) != null)
  EndLength = localStorage.length - LSLength - 5;
  xx = 0;
  do {
    if(EndLength != 0) {
      if(document.getElementById("E" + xx) != null) {
        SentSection.removeChild(document.getElementById('E' + xx));
        EndLength = EndLength - 1;
      }
      xx++;
    }
  } while (EndLength != 0)
}

document.getElementById('Home').addEventListener('click', () => {
  window.location = "../index.html";
});
 
document.getElementById('SendingContent').addEventListener('click', () => {
  if(document.getElementById('SendingSection').style.display === "none") {
    Displaying();
    if(document.getElementById('SentSection').style.display === "block") {
      RemoveItems();
    }
    document.getElementById('SendingSection').style.display = "block";
    document.getElementById('SentSection').style.display = "none";
    document.getElementById('StatisticQuizSection').style.display = "none";
    document.getElementById('LogicQuizSection').style.display = "none";
    document.getElementById('NormalQuizSection').style.display = "none";
    document.getElementById('Quiz').style.display = "none";
  }
});

document.getElementById('SentContent').addEventListener('click', () => {
  if(document.getElementById('SentSection').style.display === "none") {
  DisplayReset();
  GetItems();
  document.getElementById('SendingSection').style.display = "none";
  document.getElementById('SentSection').style.display = "block";
  document.getElementById('StatisticQuizSection').style.display = "none";
  document.getElementById('LogicQuizSection').style.display = "none";
  document.getElementById('NormalQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "none";
  }
});

document.getElementById('StatisticQuiz').addEventListener('click', () => {
  if(document.getElementById('StatisticQuizSection').style.display === "none") {
  Displaying();
  if(document.getElementById('SentSection').style.display === "block") {
    RemoveItems();
  }
  document.getElementById('SendingSection').style.display = "none";
  document.getElementById('SentSection').style.display = "none";
  document.getElementById('StatisticQuizSection').style.display = "block";
  document.getElementById('LogicQuizSection').style.display = "none";
  document.getElementById('NormalQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "none";
  }
});

document.getElementById('LogicQuiz').addEventListener('click', () => {
  if(document.getElementById('LogicQuizSection').style.display === "none") {
  DisplayReset();
  if(document.getElementById('SentSection').style.display === "block") {
    RemoveItems();
  }
  document.getElementById('SendingSection').style.display = "none";
  document.getElementById('SentSection').style.display = "none";
  document.getElementById('StatisticQuizSection').style.display = "none";
  document.getElementById('LogicQuizSection').style.display = "block";
  document.getElementById('NormalQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "none";
  }
});

document.getElementById('NormalQuiz').addEventListener('click', () => {
  if(document.getElementById('NormalQuizSection').style.display === "none") {
  DisplayReset();
  if(document.getElementById('SentSection').style.display === "block") {
    RemoveItems();
  }
  document.getElementById('SendingSection').style.display = "none";
  document.getElementById('SentSection').style.display = "none";
  document.getElementById('StatisticQuizSection').style.display = "none";
  document.getElementById('LogicQuizSection').style.display = "none";
  document.getElementById('NormalQuizSection').style.display = "block";
  document.getElementById('Quiz').style.display = "none";
  }
});

window.addEventListener("resize", () => {setTimeout( ChangeArea, 50)});


function AddMessage() {
  GetItems();
  RemoveItems();
  let receiveremail = document.getElementById('ReceiveEmail');
  let subjectemail = document.getElementById('SubjectEmail');
  let bodyemail = document.getElementById('BodyEmail');
  LSLength = 0;
  x = 0;
  do {
      if(isNaN(localStorage.key(x)) === false) {
          LSLength += 1;
      }
      x++;
  }
  while(localStorage.key(x) != null)
  EndLength = localStorage.length - LSLength - 5;
  const Div = document.createElement("div");
  Div.className = 'MessageContainer';
  Div.id = "E" + n;
  SentSection.appendChild(Div);
  document.getElementById('E' + n).style.display = "none";
  check = false;
  nn = n;
  EndLength2 = EndLength;
  GetItems();
  do{
    if(document.getElementById('EI' + nn) === null) {
      Div.innerHTML = '<div class="SubjectInfo">' + subjectemail.value + '</div><div class="BodyInfo">' + bodyemail.value + '</div><div class="ReceiverInfo">' + receiveremail.value + '</div><img class="TrashIcon" id="EI' + nn + '"src="../images/trash.png">';
      check = true;
    } else {
      nn++;
    }
  } while(check != true)
  RemoveItems();
  n++;
  localStorage.setItem("E" + EndLength2, JSON.stringify(Div.innerHTML));
  SentSection.removeChild(Div);
}

function SetCounters() {
  let Lcounter = parseInt(localStorage.getItem('LogicQuizCounter'));
  let NCounter = parseInt(localStorage.getItem('NormalQuizCounter'));
  document.getElementById('CounterQuizDone').innerHTML = Lcounter + NCounter;
  document.getElementById('CounterLogicQuizDone').innerHTML = Lcounter;
  document.getElementById('CounterNormalQuizDone').innerHTML = NCounter;
}

function LogicQuizIncrement() {
  let actuallogiccounter = parseInt(document.getElementById('CounterLogicQuizDone').innerHTML);
  let allcounter = parseInt(document.getElementById('CounterQuizDone').innerHTML);
  document.getElementById('CounterLogicQuizDone').innerHTML = actuallogiccounter + 1;
  document.getElementById('CounterQuizDone').innerHTML = allcounter + 1;
  localStorage.setItem('LogicQuizCounter', actuallogiccounter + 1);
}

function NormalQuizIncrement() {
  let actualnormalcounter = parseInt(document.getElementById('CounterNormalQuizDone').innerHTML);
  let allcounter = parseInt(document.getElementById('CounterQuizDone').innerHTML);
  document.getElementById('CounterNormalQuizDone').innerHTML = actualnormalcounter + 1;
  document.getElementById('CounterQuizDone').innerHTML = allcounter + 1;
  localStorage.setItem('NormalQuizCounter', actualnormalcounter + 1);
}

function GetItems() {
  n = 0;
  document.getElementById('ContentSection').style.overflowY = "scroll";
  LSLength = 0;
  x = 0;
  do {
      if(isNaN(localStorage.key(x)) === false) {
          LSLength += 1;
      }
      x++;
  }
  while(localStorage.key(x) != null)
  EndLength = localStorage.length - LSLength - 5;
  for(j = 0;;j++) {
      let ii = 0;
      for(jj = 0; ii < EndLength;jj++) {
          if(j != 0) {
              break;
          } else if (localStorage.getItem("E" + jj) === null) {
              continue;
          } else { 
              object = localStorage.getItem("E" + jj);
              localStorage.removeItem("E" + jj);
              localStorage.setItem("E" + ii, object);
              ii++;
          }
      }
      const Div = document.createElement("div");
      Div.className = 'MessageContainer';
      Div.id = "E" + n;
      if(localStorage.getItem("E" + j) === null ) {
          break;
      }
      SentSection.appendChild(Div);
      document.getElementById('E' + n).style.display = "block";
      n++;
      Div.innerHTML = JSON.parse(localStorage.getItem("E" + j));
      
  } 
}

document.addEventListener('click', function(e) {
  e = e || window.event;
  var target = e.target || e.srcElement,
      text = target.id;   
  if(text.startsWith('EI')) {
    let textid = text.replace("I", "");
    textid = document.getElementById(text).parentElement.id;
    alert(textid);
    SentSection.removeChild(document.getElementById(textid));
    localStorage.removeItem(textid);
  }
}, false);

window.onload = SetCounters();

function ShowQuizOne() {
  document.getElementById('NormalQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "flex";
  selectedQuiz.innerHTML = "quizDataOne";
  TypeOfQuiz.innerHTML = 'Normal';
  ShowQuiz(quizDataOne);
}

function ShowQuizTwo() {
  document.getElementById('NormalQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "flex";
  selectedQuiz.innerHTML = "quizDataTwo";
  TypeOfQuiz.innerHTML = 'Normal';
  ShowQuiz(quizDataTwo);
}

function ShowLogicQuizOne() {
  document.getElementById('LogicQuizSection').style.display = "none";
  document.getElementById('Quiz').style.display = "flex";
  selectedQuiz.innerHTML = "LogicQuizDataOne";
  TypeOfQuiz.innerHTML = 'Logic';
  ShowQuiz(LogicquizDataOne);
}

const quiz= document.getElementById('Quiz');
const answerEls = document.querySelectorAll('.Answer');
const questionEl = document.getElementById('Question');
const a_text = document.getElementById('A_text');
const b_text = document.getElementById('B_text');
const c_text = document.getElementById('C_text');
const d_text = document.getElementById('D_text');
const submitBtn = document.getElementById('Submit');
const reloadBtn = document.getElementById('Reload');
const leaveBtn = document.getElementById('Leave');
const selectedQuiz = document.getElementById('WybranyQuiz');
const TypeOfQuiz = document.getElementById('RodzajQuiz');

let currentQuiz = 0;
let score = 0;

function ShowQuiz(quizData) {
  deselectAnswers()
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
  let answer;
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id;
      }
  })
  return answer;
}

submitBtn.addEventListener('click', () => {
  if(selectedQuiz.innerHTML === "quizDataOne") {
    quizData = quizDataOne;
  } else if(selectedQuiz.innerHTML === "quizDataTwo") {
    quizData = quizDataTwo;
  } else if(selectedQuiz.innerHTML === "LogicQuizDataOne") {
    quizData = LogicquizDataOne;
  }
  const answer = getSelected();
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++;
     }
     currentQuiz++;
     if(currentQuiz < quizData.length) {
         ShowQuiz(quizData);
     } else {
         document.getElementById('Quiz').style.display = 'none';
         document.getElementById('QuizScore').style.display = 'block';
         document.getElementById('Score').innerHTML = 'Odpowiedziałeś ' + score + '/' + quizData.length + ' pytań poprawnie';
         if(TypeOfQuiz.innerHTML === 'Normal') {
          NormalQuizIncrement();
         } else if (TypeOfQuiz.innerHTML === 'Logic') {
          LogicQuizIncrement();
         }
     }
  }
})

function ReloadQuiz() {
  currentQuiz = 0;
  score = 0;
  document.getElementById('QuizScore').style.display = "none";
  document.getElementById('Quiz').style.display = "flex";
  if(selectedQuiz.innerHTML === "quizDataOne") {
    ShowQuizOne();
  } else if(selectedQuiz.innerHTML === "quizDataTwo") {
    ShowQuizTwo();
  } else if(selectedQuiz.innerHTML === "LogicQuizDataOne") {
    ShowLogicQuizOne();
  }
  deselectAnswers()
}

function LeaveQuiz() {
  currentQuiz = 0;
  score = 0;
  document.getElementById('QuizScore').style.display = "none";
  document.getElementById('Quiz').style.display = "none";
  if(TypeOfQuiz.innerHTML === 'Logic') {
    document.getElementById('LogicQuizSection').style.display = "block";
  } else if(TypeOfQuiz.innerHTML === 'Normal') {
    document.getElementById('NormalQuizSection').style.display = "block";
  }
  selectedQuiz.innerHTML = "";
  TypeOfQuiz.innerHTML = "";
}

const quizDataOne = [
  {
      question: "Niedobór jednej lub kilku witamin w organizmie to:",
      a: "Hipowitaminoza",
      b: "Hiperwitaminoza",
      c: "Superwitaminoza",
      d: "Miniwitaminoza",
      correct: "A",
  },
  {
      question: "W którym wieku powstał Kanał Sueski?",
      a: "XVIII",
      b: "XX",
      c: "XIX",
      d: "XVII",
      correct: "C",
  },
  {
      question: "Opera Aida została zamówiona przez Ismaila Paszę, kedywa Egiptu, na uroczyste otwarcie Kanału Sueskiego. Kto skomponował tę operę?",
      a: "Giacomo Puccini",
      b: "Giuseppe Verdi",
      c: "Gioachino Rossini",
      d: "Richard Wagner",
      correct: "B",
  },
  {
      question: "Ile niedziel poprzedzających Wigilię obejmuje Adwent?",
      a: "4",
      b: "5",
      c: "3",
      d: "2",
      correct: "A",
  },
  {
    question: "Która część Trylogii Henryka Sienkiewicza kończy się zdaniem: 'Na tym kończy się ten szereg książek pisanych w ciągu kilku lat i w niemałym trudzie - dla pokrzepienia serc.",
    a: "Potop",
    b: "Pan Tadeusz",
    c: "Ogniem i mieczem",
    d: "Pan Wołodyjowski",
    correct: "D",
  },
  {
    question: "Czy truteń ma żądło?",
    a: "Nie",
    b: "Tak",
    c: "Truteń nie istnieje",
    d: "Ma ale tylko do pierwszego roku życia",
    correct: "A",
  },
  {
    question: "Pirofobia to chorobliwy lęk przed?",
    a: "Piraniami",
    b: "Ogniem",
    c: "Czerwienieniem się",
    d: "Piratami",
    correct: "B",
  },
  {
    question: "Strajk polegający na wykonywaniu przez pracowników obowiązków służbowych w sposób skrajnie drobiazgowy, co powoduje blokadę działania zakładu, to strajk?",
    a: "Francuski",
    b: "Hiszpański",
    c: "Angielski",
    d: "Włoski",
    correct: "D",
  },
  {
    question: "Akord to współbrzmienie co najmniej trzech dźwięków o różnej wysokości i nazwie?",
    a: "Tak",
    b: "Nie",
    c: "Zależy od instrumentu",
    d: "Akord nie ma współbrzmienia",
    correct: "A",
  },
  {
    question: "Jakiej narodowości był Anders Celsius, fizyk i astronom, który w 1742 roku opracował skalę temperatur nazwaną skalą Celsjusza?",
    a: "Duńskiej",
    b: "Niemieckiej",
    c: "Szwedzkiej",
    d: "Austriackiej",
    correct: "C",
  },
];

const quizDataTwo = [
  {
      question: "Cięciwa to inna nazwa średnicy?",
      a: "Prawda",
      b: "Fałsz",
      c: "Nie istnieje coś takiego jak cięciwa",
      d: "Cięciwa nie jest nazwą",
      correct: "B",
  },
  {
      question: "-3 do potęgi 3 to:",
      a: "Liczba ujemna",
      b: "Liczba dodatnia",
      c: "0",
      d: "Nie można tego policzyć",
      correct: "A",
  },
  {
      question: "Trójkąt mający 3 kąty po 60 stopni to trójkąt?",
      a: "Prostokątny",
      b: "Okrągły",
      c: "Równoboczny",
      d: "Żadna z powyższych odpowiedzi nie jest prawidłowa",
      correct: "C",
  },
  {
      question: "Ile wynosi pole kwadratu o boku 1,5 cm?",
      a: "3,25 cm^2",
      b: "2,25 dm^2",
      c: "3,25 dm^2",
      d: "2,25 cm^2",
      correct: "D",
  },
  {
    question: "7 x 77 = ?",
    a: "539",
    b: "449",
    c: "499",
    d: "49",
    correct: "A",
  },
  {
    question: "28 - 15 x 2 - 16 = ?",
    a: "42",
    b: "56",
    c: "-18",
    d: "24",
    correct: "C",
  },
  {
    question: "2 + 2 + 4 x 4 = ?",
    a: "20",
    b: "32",
    c: "16",
    d: "14",
    correct: "A",
  },
  {
    question: "Wzór na pole kwadratu: ",
    a: "a + a",
    b: "a^2",
    c: "a^4",
    d: "2a + 2a",
    correct: "B",
  },
  {
    question: "Ile ścian ma graniastosłup pięciokątny?",
    a: "5",
    b: "10",
    c: "7",
    d: "Żadna z powyższych odpowiedzi nie jest prawidłowa",
    correct: "C",
  },
  {
    question: "Ile kątów ma trapez?",
    a: "3",
    b: "6",
    c: "5",
    d: "4",
    correct: "D",
  },
];

const LogicquizDataOne = [
  {
      question: "Zawsze przyjdzie, ale nigdy nie przyjdzie dzisiaj. Co to takiego?",
      a: "Dzień",
      b: "Doba",
      c: "Jutro",
      d: "Wczoraj",
      correct: "C",
  },
  {
      question: "Co jest na końcu tęczy?",
      a: "A",
      b: "Garniec złota",
      c: "Nic",
      d: "Nie wiadomo",
      correct: "A",
  },
  {
      question: "Szły gęsi gęsiego - jedna za drugą. Ile było gęsi?",
      a: "Jedna",
      b: "Dwie",
      c: "Trzy",
      d: "Cztery",
      correct: "C",
  },
  {
      question: "Gdzie czwartek jest przed środą?",
      a: "W kalendarzu Majów",
      b: "Nigdzie",
      c: "Zawsze czwartek jest przed środą",
      d: "W słowniku",
      correct: "D",
  },
  {
    question: "Jeśli troje dzieci i ich trzy psy nie znajdowało się pod parasolem, to jak to się stało, że żadne z nich nie zmokło?",
    a: "Miały płaszcz",
    b: "Były na słońcu",
    c: "Nie padało",
    d: "Jest to niemożliwe",
    correct: "C",
  },
  {
    question: "W pokoju są 4 kąty i kilka kotów. Każdy z kotów widzi pozostałe koty w trzech pozostałych kątach pokoju. Ile jest kotów?",
    a: "Jeden",
    b: "Dwa",
    c: "Trzy",
    d: "Cztery",
    correct: "D",
  },
  {
    question: "Co łapie, ale nie rzuca?",
    a: "Piłka",
    b: "Zawodnik",
    c: "Śnieżka",
    d: "Mróz",
    correct: "D",
  },
  {
    question: "Jakie zwierzę może skakać wyżej niż budynek?",
    a: "Żadne",
    b: "Każde",
    c: "Kangury",
    d: "Koty",
    correct: "B",
  },
  {
    question: "Jeśli kupisz koguta i spodziewasz się, że złoży 5 jajek na tydzień, ile zbierzesz jajek przez miesiąc?",
    a: "Żadnego",
    b: "20",
    c: "25",
    d: "15",
    correct: "A",
  },
  {
    question: "Mama Kasi ma pięć córek. Jeśli imiona jej córek to odpowiednio Klara, Karolina, Klaudia, Kinga, to jakie będzie imię piątej córki?",
    a: "Kalinka",
    b: "Kasia",
    c: "Kinga",
    d: "Kamila",
    correct: "B",
  },
];
