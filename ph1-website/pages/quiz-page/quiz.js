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

{
    const quizText = document.getElementById("quizText");
    const quizChoices = document.getElementById("quizChoices");

    const quizSet = [
        {q: "日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？", c:["約28万人", "約79万人", "約183万人"]},
        {q: "既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？", c:["INTECH", "BIZZTECH", "X-TECH"]},
        {q: "IoTとは何の略でしょう？", c:["Internet of Things", "Integrate into Technology", "Information  on Tool"]},
        {q: "日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？", c:["Society 5.0", "CyPhy", "SDGs"]},
        {q: "イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？", c:["Web3.0", "NFT", "メタバース"]},
        {q: "先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？", c:["約2倍", "約5倍", "約11倍"]}
    ];
    let currentNum = 0;

    quizText.textContent = quizSet[currentNum].q;

    quizSet[currentNum].c.forEach(choice => {
        const li = document.createElement("li");
        const img = document.createElement("img");
        img.src = "../../img/icon/icon-arrow.svg";
        li.textContent = choice;
        li.appendChild(img);
        quizChoices.appendChild(li);
    });
}