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
    question: 'ワンダの兄の名前は？',
    answers: [
    'マキシモグレイグ',
    'ピエトロクイックシルバー',
    'ラングスウィバー',
    'スロットラング'
    ],
    correct: 'ピエトロクイックシルバー'
  },  {
    question: 'デシメーションで家族を失い自暴自棄になり世界中の悪人を殺しまわっていたのは誰か？',
    answers: [
    'キャップ',
    'トニースターク',
    'ホークアイ',
    'ファルコン'
    ],
    correct: 'ホークアイ'
  },   {
    question: '量子力学を用いたタイムトラベルを提案したヒーローといえば？',
    answers: [
    'トニースターク',
    'スコットラング',
    'ハルク',
    'ブラックウィドウ'
    ],
    correct: 'スコットラング'
  }, 　 {
    question: 'デシメーション以後に生まれた、トニーとペッパーの娘の名前は？',
    answers: [
    'キャロル',
    'モーガン',
    'ハッピー',
    'ピーチ'
    ],
    correct: 'モーガン'
  },　　{
    question: 'ソーは誰をアスガルドの王に任命したか？',
    answers: [
    'ロキ',
    'グルート',
    'ヴァルキリー',
    '自分'
    ],
    correct: 'ヴァルキリー'
  },　　　{
    question: 'クリントとナターシャが惑星ヴォーミアで回収しようとしたインフィニティ・ストーンは何ストーンか？',
    answers: [
    'パワーストーン',
    'ソウルストーン',
    'タイムストーン',
    'ドクターストーン'
    ],
    correct: 'ソウルストーン'
  },　　　{
    question: 'キャプテン・マーベルが今作までアベンジャーズたちの危機に助けに来なかった理由は？',
    answers: [
    '地球で起きていることを知らなかった',
    '地球以外のヒーロー活動で忙しい',
    'そもそもヒーローじゃない',
    'ヒーローの座をはるちゃんに託したから'
    ],
    correct: '地球以外のヒーロー活動で忙しい'
  },


  
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

  window.alert(' 終わりや！あなたの正解数は' + score + '/' + quizlength + 'です！');
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
