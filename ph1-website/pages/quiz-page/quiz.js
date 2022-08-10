'use strict';

// function hello(name,age){
//     console.log("こんにちは" + name + age + "才");
// }

// hello("kouta",19);


// function create(quizNumber,quizText){
//     const main = document.getElementById("quizSection");


// let quiz = `<div class="quizQuestion">
// <div class="quizNumber">Q ${quizNumber}</div>
// <p class="quizText">${quizText}</p>
// <img class="quizImg" src="../../img/quiz/img-quiz0${quizNumber}.png" alt="">
// <div class="quizAnswer">A</div>
// <ul class="quizList">
//   <li class="quizChoice">約28万人<img src="../../img/icon/icon-arrow.svg" alt=""></li>
//   <li class="quizChoice">約79万人<img src="../../img/icon/icon-arrow.svg" alt=""></li>
//   <li class="quizChoice">約183万人<img src="../../img/icon/icon-arrow.svg" alt=""></li>
// </ul>
// <div class="quizReference"><img src="../../img/icon/icon-note.svg" alt="">　経済産業省 2019年3月 － IT 人材需給に関する調査</div>
// </div>`
// main.insertAdjacentHTML("beforeend",quiz)
// }

// create(1,"日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？");
// create(2,"既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？");
// create(3,"IoTとは何の略でしょう？");

{/* <div class="quizQuestion">
            <div class="quizNumber">Q 1</div>
            <p id="quizText"></p>
            <img class="quizImg" src="../../img/quiz/img-quiz01.png" alt="">
            <div class="quizAnswer">A</div>
            <ul id="quizChoices"></ul>
            <div id="quizCorrect">
              <h2>正解！</h2>
              <p><span>A</span></p>
            </div>
            <div id="quizWrong">
              <h2>不正解...</h2>
              <p><span>A</span></p>
            </div>
            <div class="quizReference"><img src="../../img/icon/icon-note.svg" alt="">　経済産業省 2019年3月 － IT 人材需給に関する調査</div>
        </div> */}

{
    const quizSection = document.getElementById("quizSection");
    const quizText = document.getElementById("quizText");
    const quizChoices = document.getElementById("quizChoices");
    const quizCorrect = document.getElementById("quizCorrect");
    const quizWrong = document.getElementById("quizWrong");

    const quizSet = shuffle([
        { id: 1, q: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？", c: ["約79万人", "約28万人", "約183万人"], note:"経済産業省 2019年3月 － IT 人材需給に関する調査" },
        { id: 2, q: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？", c: ["X-TECH", "BIZZTECH", "INTECH"] },
        { id: 3, q: "IoTとは何の略でしょう？", c: ["Internet of Things", "Integrate into Technology", "Information  on Tool"] },
        { id: 4, q: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？", c: ["Society 5.0", "CyPhy", "SDGs"], note: "Society5.0 - 科学技術政策 - 内閣府" },
        { id: 5, q: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？", c: ["Web3.0", "NFT", "メタバース"] },
        { id: 6, q: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？", c: ["約5倍", "約2倍", "約11倍"], note: "Accenture Technology Vision 2021 " }
    ]);

    let currentNum = 0;
    let isAnswered;

    function shuffle(arr) {
        for (let i = arr.length - 1; i >= 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered === true) {
            return;
        }
        isAnswered = true;
        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add("correct");
            quizCorrect.classList.add("correct");
        } else {
            li.classList.add("wrong");
            quizWrong.classList.add("wrong");
        }
    }

    function setQuiz() {
        isAnswered = false;
        quizText.textContent = quizSet[currentNum].q;

        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        shuffledChoices.forEach(choice => {
            const li = document.createElement("li");
            const img = document.createElement("img");
            img.src = "../../img/icon/icon-arrow.svg";
            li.textContent = choice;
            li.appendChild(img);
            li.addEventListener("click", () => {
                checkAnswer(li);
            });
            quizChoices.appendChild(li);
        });
    }
    setQuiz();
}
