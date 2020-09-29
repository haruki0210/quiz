const quiz = [
  {
    question: 'トニースタークの誕生日は次のうちどれでしょう',
    answers: [
    '5月29日',
    '3月21日',
    '8月5日',
    '2月10日'
    ],
    correct: '5月29日'
  },  {
    question: 'ワンダの弟の名前は？',
    answers: [
    'マキシモグレイグ',
    'ピエトロクイックシルバー',
    'ラングスウィバー',
    'スロットラング'
    ],
    correct: 'ピエトロクイックシルバー'
  },  {
    question: 'おいらの身長は何センチ？',
    answers: [
    '178cm',
    '174cm',
    '176cm',
    '175cm'
    ],
    correct: '175cm'
  }

  
];

const quizlength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength) {
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => {
 　　if(quiz[quizIndex].correct === e.target.textContent) {
      window.alert('正解！');
      score++;
    } else {
      window.alert('不正解！');
    }
    quizIndex++;



if(quizIndex < quizlength) {
  setupQuiz();
} else {

  window.alert(' 終了です。あなたの正解数は' + score + '/' + quizlength + 'です！');
  }
};




//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
 $button[handlerIndex].addEventListener('click',(e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
